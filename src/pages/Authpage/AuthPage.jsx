import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} p={0}>
        <Flex gap={10} justifyContent={"center"} alignItems={"center"}>
          {/*Left Side*/}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={600} alt="Phone img" />
          </Box>
          {/* Right Side */}
          <VStack spacing={4} align={"stretch"} padding={2}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={4} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore" />
              <Image src="/microsoft.png" h={10} alt="Mocrosoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
