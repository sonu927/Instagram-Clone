import { Box, Flex, Avatar, Button, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={name} size={"sm"} src={avatar} />
        <VStack spacing={1} alignItems={"self-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={"bold"} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={14}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        _hover={{ color: "white" }}
        cursor={"pointer"}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "UnFollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
