import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); 
  

 
  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          

          
          {isLogin? <Login /> : <Signup />}

          <Flex
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            w={"full"}
          >
            <Box h={"1px"} flex={2} bg={"gray.400"} />
            <Box color={"white"}>OR</Box>
            <Box h={"1px"} flex={2} bg={"gray.400"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>

      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
          <Box fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account"}
          </Box>
          <Box
            color={"blue.500"}
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
