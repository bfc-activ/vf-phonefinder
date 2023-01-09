import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  useColorModeValue,
  useDisclosure,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
  As,
  Collapse,
} from "@chakra-ui/react";
import LoginButton from "@components/auth/LoginButton";
import useCurrentUser from "@hooks/useCurrentUser";
import { RefObject, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  MdChevronRight,
  MdExpandMore,
  MdList,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import Logo from "./Logo";

type NavLinks = {
  title: string;
  to: string;
  children?:
    | undefined
    | [
        {
          title: string;
          to: string;
          icon: SVGElement;
          subLabel: string;
        }
      ];
}[];

// Render profile avatar with user's name side-by-side
const ProfileAvatar = ({
  name,
  isMobile,
}: {
  name: string;
  isMobile?: boolean;
}) => {
  return (
    <Flex
      display={{ base: isMobile ? "inline-flex" : "none", md: "inline-flex" }}
      align="center"
    >
      <Avatar size="sm" name={name} />
      <Text
        ml={2}
        color={useColorModeValue("gray.50", "gray.200")}
        fontSize="md"
        fontWeight="medium"
      >
        {name}
      </Text>
    </Flex>
  );
};

const Navbar = () => {
  const { currentUser, logout } = useCurrentUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const burgerButtonRef = useRef(null);
  const location = useLocation();

  // Links shown to logged-in users.
  const loggedInLinks: NavLinks = [{ title: "Home", to: "/" }];
  // Links shown to logged-out users or guests.
  const loggedOutLinks: NavLinks = [{ title: "Home", to: "/" }];
  // Determine which links to show.
  const links = currentUser ? loggedInLinks : loggedOutLinks;
  // Determine if the current route matches the link.
  const isCurrentRoute = (link: string) => location.pathname === link;

  return (
    <>
      <MobileNav
        burgerButtonRef={burgerButtonRef}
        isOpen={isOpen}
        onClose={onClose}
        links={links}
      />

      <Box
        // Make the navbar stick at all times
        position="sticky"
        top={0}
        zIndex={10}
        px={4}
        py={3}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex maxW="5xl" mx="auto" align="center" justify="space-between">
          <Flex align="center">
            <Flex
              _hover={{ opacity: 0.7 }}
              transition="all .1s ease-in-out"
              align="center"
              justify="space-between"
            >
              <Link to="/">
                <Logo withVFLogo width="170px" />
              </Link>
            </Flex>

            <Flex
              display={{ base: "none", md: "flex" }}
              ml={12}
              experimental_spaceX={2}
            >
              {links.map((link, i) => {
                return (
                  <Popover openDelay={0} trigger="hover" placement="bottom-end">
                    <PopoverTrigger>
                      <Link key={i} to={link.to}>
                        <Button
                          variant="ghost"
                          size="md"
                          _active={{
                            bg: useColorModeValue("gray.200", "gray.600"),
                          }}
                          _hover={{
                            bg: useColorModeValue("gray.100", "gray.700"),
                          }}
                          px={4}
                          py={1}
                          color={useColorModeValue("gray.900", "gray.100")}
                          isActive={isCurrentRoute(link.to)}
                        >
                          {link.title}
                        </Button>
                      </Link>
                    </PopoverTrigger>

                    {link.children && (
                      <PopoverContent
                        border={0}
                        boxShadow="xl"
                        bg={useColorModeValue("gray.50", "gray.800")}
                        p={4}
                        rounded="xl"
                        minW="sm"
                      >
                        <Stack>
                          {link.children?.map((child: any) => (
                            <DesktopSubNav
                              key={child.label}
                              href={child.to}
                              label={child.title}
                              icon={child.icon}
                              subLabel={child.subLabel}
                            />
                          ))}
                        </Stack>
                      </PopoverContent>
                    )}
                  </Popover>
                );
              })}
            </Flex>
          </Flex>

          <Flex align="center" experimental_spaceX={4}>
            {currentUser && (
              <Flex experimental_spaceX={6}>
                <ProfileAvatar name={currentUser.displayName} />
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  mt={{ base: 2, md: 0 }}
                  variant="link"
                  colorScheme="gray"
                  onClick={logout}
                >
                  Log out
                </Button>
              </Flex>
            )}
            {!currentUser && (
              <Box display={{ base: "none", md: "block" }}>
                <LoginButton variant="outline" colorScheme="gray" />
              </Box>
            )}
            <ThemeToggle />
            <IconButton
              ref={burgerButtonRef}
              onClick={onOpen}
              display={{ base: "inline-flex", md: "none" }}
              colorScheme="brand"
              variant="outline"
              aria-label="Toggle Mobile Menu"
              icon={<Icon as={MdMenu} fontSize="xl" />}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

// Mobile Navigation Drawer
const MobileNav = ({
  burgerButtonRef,
  isOpen,
  onClose,
  links,
}: {
  burgerButtonRef: RefObject<any>;
  isOpen: boolean;
  onClose: () => void;
  links: any[];
}) => {
  const { currentUser, logout } = useCurrentUser();

  return (
    <Drawer
      size={{ base: "md", lg: "sm" }}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={burgerButtonRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="gray.900">
        <DrawerCloseButton
          colorScheme="whiteAlpha"
          variant="outline"
          mt={2}
          color="whiteAlpha.800"
          borderColor="whiteAlpha.800"
          borderWidth={1}
          p={4}
        />
        <DrawerHeader />

        <DrawerBody bg="gray.900">
          <Flex pb={8} height="100%" justify="space-between" direction="column">
            <Flex id="mobile_links" direction="column">
              {links.map((link, i) => (
                <MobileNavItem onClose={onClose} {...link} />
              ))}
            </Flex>

            {!currentUser && <LoginButton />}
            {currentUser && (
              <Flex align="center" justify="space-between">
                <ProfileAvatar isMobile name={currentUser.displayName} />
                <Button
                  leftIcon={<Icon as={MdLogout} />}
                  variant="outline"
                  onClick={logout}
                >
                  Log out
                </Button>
              </Flex>
            )}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem = ({
  title,
  children,
  to,
  onClick,
  onClose,
}: {
  title: string;
  children?: any[];
  to?: string;
  onClick?: () => void;
  onClose?: () => void;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children ? onToggle : onClose}>
      <Flex
        py={2}
        as={Link}
        to={to ?? "#"}
        onClick={onClick || undefined}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.50", "gray.200")}>
          {title}
        </Text>
        {children && (
          <Icon
            as={MdExpandMore}
            transition={"all .25s ease-in-out"}
            color={useColorModeValue("gray.50", "gray.200")}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0" }}>
        <Stack
          // mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child: any) => (
              <Box
                onClick={onClose}
                color={useColorModeValue("gray.200", "gray.300")}
                key={child.title}
                py={2}
              >
                <Link to={child.to}>{child.title}</Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  icon,
}: {
  label: string;
  href: string;
  subLabel?: string;
  icon?: As<any> | undefined;
}) => {
  return (
    <Link to={href}>
      <ChakraLink
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("brand.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Flex mb={2} alignItems="center">
              <Icon
                width="21px"
                height="21px"
                as={icon}
                transition={"all .1s ease"}
                color={useColorModeValue("gray.900", "gray.50")}
                _groupHover={{
                  color: useColorModeValue("brand.500", "brand.300"),
                }}
                mr={2}
                aria-label={`${label} icon`}
              />
              <Text
                transition={"all .1s ease"}
                _groupHover={{
                  color: useColorModeValue("brand.500", "brand.300"),
                }}
                color={useColorModeValue("gray.900", "gray.50")}
                fontWeight={500}
              >
                {label}
              </Text>
            </Flex>

            <Text
              color={useColorModeValue("gray.400", "gray.200")}
              fontSize="sm"
            >
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .1s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon
              color={useColorModeValue("brand.500", "brand.300")}
              w={5}
              h={5}
              as={MdChevronRight}
            />
          </Flex>
        </Stack>
      </ChakraLink>
    </Link>
  );
};

export default Navbar;
