import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    console.log(inputs);
  };
  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <InputGroup>
            <Input
              placeholder="Password"
              fontSize={14}
              type={showPassword ? "text" : "password"}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <InputRightElement
              onClick={() => setShowPassword(!showPassword)}
              cursor={"pointer"}
            >
              {showPassword ? (
                <FaEye color="grey" />
              ) : (
                <FaEyeSlash color="grey" />
              )}
            </InputRightElement>
          </InputGroup>

          {!isLogin && (
            <InputGroup>
              <Input
                placeholder="Confirm Password"
                fontSize={14}
                type={showPassword ? "text" : "password"}
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
              <InputRightElement
                onClick={() => setShowPassword(!showPassword)}
                cursor={"pointer"}
              >
                {showPassword ? (
                  <FaEye color="grey" />
                ) : (
                  <FaEyeSlash color="grey" />
                )}
              </InputRightElement>
            </InputGroup>
          )}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>

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
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            cursor={"pointer"}
          >
            <Image src="google.png" w={5} alt="Google" />
            <Text color={"blue.500"}>Log in with Google</Text>
          </Flex>
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
