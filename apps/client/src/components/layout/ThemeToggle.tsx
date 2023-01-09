import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

const ThemeToggle = (
  props: Omit<IconButtonProps, "aria-label" | "datatestid">
) => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="whiteAlpha"
      color={useColorModeValue("blackAlpha.900", "whiteAlpha.800")}
      variant="ghost"
      icon={useColorModeValue(
        <MdDarkMode fontSize="20px" />,
        <MdWbSunny fontSize="20px" />
      )}
      onClick={toggleColorMode}
      {...props}
      aria-label={`Switch to ${useColorModeValue("Dark", "Light")} mode`}
      datatestid="switchTheme"
    />
  );
};

export default ThemeToggle;
