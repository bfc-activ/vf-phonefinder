import { createServer, Response } from "miragejs";
import questions from "./data/questions.json";

const makeServer = ({ environment = "development" } = {}) => {
  // Creates the mock Mirage.js server
  const server = createServer({
    environment,

    routes() {
      // Adds the base API URL from 'environment' to the beginning of all requests
      // e.g. https://api.hub.ucc-dev.vodafone.com
      this.urlPrefix = "https://localhost:3001/api";
      this.timing = 600;

      this.get("/questions/:questionId", (_schema, request) => {
        const { questionId } = request.params;
        const question = questions.find((q) => q.questionId === questionId);

        if (!question) {
          return new Response(404, {}, { message: "Question not found." });
        }
        return new Response(200, {}, { data: question });
      });

      // Allow regular requests to pass through
      this.passthrough("http://localhost:3000/**");
    },
  });

  return server;
};

export default makeServer;
