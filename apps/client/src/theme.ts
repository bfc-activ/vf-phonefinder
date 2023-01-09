import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import type { Dict } from "@chakra-ui/utils";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        fontSize: "18px",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
  fonts: {
    heading: "VodafoneRegularBold",
    body: "Vodafone",
  },
  colors: {
    brand: {
      "50": "#FFFAFA",
      "100": "#FFDCDC",
      "200": "#FF9F9F",
      "300": "#FF6161",
      "400": "#FF2424",
      "500": "#E60000",
      "600": "#B30000",
      "700": "#800000",
      "800": "#4D0000",
      "900": "#1A0000",
    },
  },
  components: {
    Form: {
      variants: {
        floating: (props: StyleFunctionProps) => ({
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor:
                props.colorMode === "dark" ? "gray.700" : "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        }),
      },
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: "brand.500",
          },
        },
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    EditableInput: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Tooltip: {
      baseStyle: (props: Dict<any>) => ({
        backgroundColor: mode("gray.50", "gray.700")(props),
        color: mode("gray.900", "white")(props),
        fontWeight: "normal",
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: "medium",
      },
    },
    Button: {
      baseStyle: {
        transitionDuration: "0.1s",
        fontWeight: "bold",
      },
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Input: {
      baseStyle: {
        transitionDuration: "0.1s",
      },
      defaultProps: {
        focusBorderColor: "brand.300",
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.300",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "brand.300",
      },
    },
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
