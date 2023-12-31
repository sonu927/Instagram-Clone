import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const SuggestedUsersHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Sonu Raut" size={"sm"} src="" />
        <Text fontSize={12} fontWeight={"bold"}>
          Sonu Raut
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedUsersHeader;
