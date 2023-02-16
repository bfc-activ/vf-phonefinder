import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableContainerProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const DataTable = ({
  headings,
  bodyData,
  containerProps,
}: {
  headings: { title: string; isNumeric?: boolean }[];
  bodyData: ReactNode;
  containerProps: TableContainerProps;
}) => {
  return (
    <TableContainer {...containerProps}>
      <Table>
        <Thead>
          <Tr>
            {headings.map((heading, index) => (
              <Th key={index} isNumeric={heading.isNumeric}>
                {heading.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{bodyData}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
