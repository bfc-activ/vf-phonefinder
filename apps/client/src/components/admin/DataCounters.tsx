import {
  Card,
  CardBody,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

interface DataCountersProps {
  data: {
    title: string;
    count: number;
  }[];
}

const DataCounters = ({ data }: DataCountersProps) => (
  <SimpleGrid my={12} columns={3} spacing={4}>
    {data.map(({ title, count }) => (
      <Card>
        <CardBody>
          <Stat>
            <StatLabel
              textTransform="uppercase"
              fontWeight="600"
              letterSpacing="wide"
            >
              {title}
            </StatLabel>
            <StatNumber>{count}</StatNumber>
          </Stat>
        </CardBody>
      </Card>
    ))}
  </SimpleGrid>
);

export default DataCounters;
