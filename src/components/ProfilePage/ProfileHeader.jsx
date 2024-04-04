import { Avatar, AvatarGroup, Flex, VStack } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignItems={"flex-start"}
        mx={"auto"}
      >
        <Avatar name="Sonu Raut" src="" alt={"Sonu Raut"} />
      </AvatarGroup>
      <VStack></VStack>
    </Flex>
  );
};

export default ProfileHeader;
