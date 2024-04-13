import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";
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
      <VStack
        gap={2}
        mx={"auto"}
        flex={1}
        alignItems={"flex-start"}
      >
        <Flex direction={{base: "column",sm:"row"}} gap={4} justifyContent={{base:"center",sm:"flex-start"}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base:"sm",sm:"lg"}}>Sonu_Raut</Text>
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Button color={"black"} bg={"white"} size={{base: "xs",sm:"sm"}} _hover={{bg: "whiteAlpha.800"}}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex gap={{base:2,sm:4}} alignItems={"center"}>
          <Text fontSize={{base:"xs",sm:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>2</Text>
            Posts
          </Text>
          <Text fontSize={{base:"xs",sm:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            Followers
          </Text>
          <Text fontSize={{base:"xs",sm:"sm"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>6</Text>
            Following
          </Text>
        </Flex>
        <Flex>
          <Text fontSize={{base:"sm",sm:"lg"}} fontWeight={"bold"}>Sonu Raut</Text>
        </Flex>
        <Text fontSize={{base:"xs",sm:"sm"}}>This is test profile , be Sure to check it out and shocked</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
