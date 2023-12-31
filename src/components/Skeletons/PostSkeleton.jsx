import { Box, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import React from "react";

const PostSkeleton = () => {
  return (
    <VStack mb={10} alignItems={"flex-start"} gap={4}>
      <Flex gap={2} alignItems={"center"}>
        <SkeletonCircle size="10" />
        <Skeleton height={"8px"} width={"150px"} />
      </Flex>
      <Skeleton w={"full"}>
        <Box h={"500px"}>Content warped</Box>
      </Skeleton>
    </VStack>
  );
};

export default PostSkeleton;
