import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import useQuestions from "@hooks/useQuestions";
import {
  Md5G,
  MdChargingStation,
  MdMemory,
  MdOutline5G,
  MdScreenshot,
  MdSdCard,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Conclusion = () => {
  const { phone } = useQuestions();

  if (!phone) return null;

  return (
    <Box pt={12}>
      <Stack>
        <Heading size="2xl" mb={2}>
          We think the {phone.name} is the phone for you!
        </Heading>
        <Heading size="md" color="gray.500">
          Based on the answers you've given us.
        </Heading>
      </Stack>

      <SimpleGrid mt={12} columns={{ base: 1, lg: 2 }}>
        <Image src={phone.photoURL} alt={phone.name} width="250px" />
        <Box mt={12}>
          <Heading size="lg">{phone.name}</Heading>
          <Text color="gray.500" mt={4}>
            {phone.description}
          </Text>

          <List mt={6} spacing={2}>
            <ListItem>
              <ListIcon
                as={MdOutline5G}
                color={phone.is5GCompatible ? "green.500" : "red.500"}
              />
              {phone.is5GCompatible ? "5G Compatible" : "Not 5G Compatible"}
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdChargingStation}
                color={phone.hasWirelessCharging ? "green.500" : "red.500"}
              />
              {phone.hasWirelessCharging
                ? "Supports Wireless Charging"
                : "No Wireless Charging"}
            </ListItem>
            <ListItem>
              <ListIcon as={MdMemory} />
              {phone.operatingSystem}
            </ListItem>
            <ListItem>
              <ListIcon as={MdSdCard} />
              {phone.storageCapacityGB} GB Storage
            </ListItem>
            <ListItem>
              <ListIcon as={MdScreenshot} />
              {phone.screenSizeInch} inch Screen
            </ListItem>
          </List>

          <Flex mt={6} align="center" justify="space-between">
            <Flex align="flex-end">
              <Text mr={2}>£</Text>
              <Text fontSize="5xl" height="60px">
                {phone.price}
              </Text>
            </Flex>

            <a href={phone.purchaseURL} target="_blank" rel="noreferrer">
              <Button
                leftIcon={<Icon as={MdShoppingCart} />}
                fontWeight="bold"
                mt={1}
              >
                Order via Vodafone UK
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>

      <Flex my={32} justify="center">
        <Link to="/">
          <Button variant="ghost">Take the quiz again</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Conclusion;
