import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  TableContainerProps,
} from "@chakra-ui/react";

const DataTable = ({
  headings,
  bodyData,
  containerProps,
}: {
  headings: { title: string; isNumeric?: boolean }[];
  bodyData: {
    data: {
      text: string;
      isNumeric?: boolean;
    }[];
    isNumeric?: boolean;
  }[];
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
        <Tbody>
          {bodyData.map((row, index) => (
            <Tr key={index}>
              {row.data.map((cell, index) => (
                <Td key={index} isNumeric={cell.isNumeric}>
                  {cell.text}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
