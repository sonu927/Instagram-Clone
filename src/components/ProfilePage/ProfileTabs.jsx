import { Box, Flex, Text } from "@chakra-ui/react";
import { BiTable } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";


import React from "react";

const ProfileTabs = () => {
  return (
    <Flex 
      w={"full"}
      justifyContent={"center"}
      textTransform={"uppercase"}
      alignItems={"center"}
      gap={{base:4,sm: 10}}
      fontWeight={"bold"}
    >
      <Flex borderTop={"1px solid white"} alignItems={"center"} p={1} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BiTable />
        </Box>
        <Text fontSize={12} display={{base: "none",sm:"block"}}>Posts</Text>
      </Flex>
      <Flex alignItems={"center"} p={1} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <FiBookmark />
        </Box>
        <Text fontSize={12} display={{base: "none",sm:"block"}}>Saved</Text>
      </Flex>
      <Flex alignItems={"center"} p={1} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <LuHeart />
        </Box>
        <Text fontSize={12} display={{base: "none",sm:"block"}}>Liked</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
