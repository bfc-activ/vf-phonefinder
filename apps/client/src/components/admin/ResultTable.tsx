import { Td, Tooltip, Tr } from "@chakra-ui/react";
import DataTable from "./DataTable";
import { Result } from "@interfaces/Results";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const ResultTable = ({ results }: { results: Result[] }) => {
  dayjs.extend(relativeTime);

  return (
    <DataTable
      containerProps={{ mt: 4 }}
      headings={[
        { title: "Submitted by" },
        { title: "Answers" },
        { title: "Submitted at" },
      ]}
      bodyData={results?.map((result) => (
        <Tr>
          <Td>{result.user.email}</Td>
          <Td>
            {result.answers.map((answer) => (
              <p>{answer.displayText}</p>
            ))}
          </Td>
          <Td>
            <Tooltip
              label={dayjs(result.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            >
              {dayjs(result.createdAt).fromNow()}
            </Tooltip>
          </Td>
        </Tr>
      ))}
    />
  );
};

export default ResultTable;
