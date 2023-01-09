import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      height="4rem"
      width="full"
      position="absolute"
      bottom={0}
      bgColor="gray.50"
      _dark={{ bgColor: "gray.900" }}
    >
      {/* Display text with current year */}
      <Text textAlign="center" py={4}>
        &copy; {new Date().getFullYear()} Vodafone Group Services Limited
      </Text>
    </Box>
  );
};

export default Footer;
