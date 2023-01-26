import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      height="7rem"
      width="full"
      position="absolute"
      bottom={0}
      bgColor="gray.50"
      _dark={{ bgColor: "gray.900" }}
      textAlign="center"
      py={2}
    >
      {/* Display text with current year */}
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Vodafone Group Services Limited
      </Text>
      <Text fontSize="xs" color="gray.500">
        This app was developed for the Rich Internet Applications Module for the
        BSc. Digital Technology Solutions course delivered by Blackpool & Fylde
        College in collaboration with Lancaster University.
        <br />
        Built using TypeScript, React, Express and MongoDB by Vodafone Group
        Services Apprentices.{" "}
        <span style={{ textDecoration: "underline" }}>
          Use at your own risk.
        </span>
      </Text>
    </Box>
  );
};

export default Footer;
