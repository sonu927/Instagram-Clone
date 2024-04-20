import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [inputsCheck, setInputsCheck] = useState({
    email: false,
    password: false,
  });
  return (
   <>
        <Input
            isInvalid={inputsCheck.email}
            placeholder="Email"
            fontSize={14}
            type="email"
            size={"sm"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <InputGroup>
            <Input
              isInvalid={inputsCheck.password}
              placeholder="Password"
              fontSize={14}
              type={showPassword ? "text" : "password"}
              size={"sm"}
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

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
           
          >
            {"Log in"}
          </Button>
   </>
  )
}

export default Login