import { Td, Tr } from "@chakra-ui/react";
import DataTable from "./DataTable";
import { Question } from "@interfaces/Questions";

const QuestionTable = ({ questions }: { questions: Question[] }) => {
  return (
    <DataTable
      containerProps={{ mt: 4 }}
      headings={[{ title: "ID" }, { title: "Question" }, { title: "Type" }]}
      bodyData={questions?.map((question) => (
        <Tr>
          <Td>{question._id}</Td>
          <Td>{question.displayText}</Td>
          <Td>{question.type}</Td>
        </Tr>
      ))}
    />
  );
};

export default QuestionTable;
