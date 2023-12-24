import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";

const Sidebar = () => {
  const sidebaritems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Sonu Raut" src="/profilepic.png" />,
      text: "Profile",
      link: "/SonuRaut",
    },
  ];
  return (
    <Box
      height={"100vh"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: "2", md: "4" }}
      position={"sticky"}
      top={0}
      left={0}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.300",
          }}
          w={10}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebaritems.map((item, index) => {
            return (
              <Tooltip
                key={index}
                label={item.text}
                hasArrow
                placement="right"
                ml={1}
                display={{ base: "block", md: "none" }}
                openDelay={500}
              >
                <Link
                  to={item.link || null}
                  as={RouterLink}
                  display={"flex"}
                  alignItems={"center"}
                  gap={4}
                  _hover={{
                    bg: "whiteAlpha.400",
                  }}
                  p={2}
                  w={{ base: "10", md: "full" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                  borderRadius={6}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Link>
              </Tooltip>
            );
          })}
        </Flex>
        <Tooltip
          label={"Logout"}
          hasArrow
          placement="right"
          ml={1}
          display={{ base: "block", md: "none" }}
          openDelay={500}
        >
          <Link
            to={"/auth"}
            as={RouterLink}
            display={"flex"}
            alignItems={"center"}
            gap={4}
            _hover={{
              bg: "whiteAlpha.400",
            }}
            p={2}
            w={{ base: "10", md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            borderRadius={6}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
