import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedUsersHeader from "./SuggestedUsersHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedUsersHeader />

      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Abrahmov"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan Florence "
        followers={567}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Nwamba "
        followers={759}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://github.com/sonu927"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Sonu Raut
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
