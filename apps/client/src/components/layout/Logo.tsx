import {
  Center,
  Divider,
  Flex,
  Image,
  ImageProps,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = (props: { withVFLogo?: boolean } & ImageProps) => {
  // We use the useColorModeValue hook to get the correct logo based on the current color mode
  const logoSource = useColorModeValue(
    "/img/phonefinder_simple_logo_black.svg",
    "/img/phonefinder_simple_logo_white.svg"
  );

  // If the withVFLogo prop is true, we render the Vodafone logo and the Phone Finder logo
  if (props.withVFLogo) {
    return (
      <Flex align="center">
        <Image src="/img/vodafone.svg" width="45px" alt="Vodafone Logo" />
        <Center mx={4} height="40px">
          <Divider orientation="vertical" />
        </Center>
        <Image src={logoSource} {...props} alt="Phone Finder Logo" />
      </Flex>
    );
  }

  // Otherwise, we just render the Phone Finder logo
  return <Image src={logoSource} alt="Phone Finder Logo" {...props} />;
};

export default Logo;
