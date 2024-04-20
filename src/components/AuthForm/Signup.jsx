import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import useSignupWithEmailAndPassword from "../../hooks/useSignupWithEmailAndPassword";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
 const {loading,error,signup} = useSignupWithEmailAndPassword();
  return (
    <>
         <Input
            //isInvalid={inputsCheck.email}
            placeholder="Email"
            fontSize={14}
            type="email"
            size={"sm"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            //isInvalid={inputsCheck.userName}
            placeholder="Username"
            fontSize={14}
            type="text"
            size={"sm"}
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
          <Input
           // isInvalid={inputsCheck.fullName}
            placeholder="Fullname"
            fontSize={14}
            type="text"
            size={"sm"}
            value={inputs.fullname}
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />
          <InputGroup>
            <Input
              //isInvalid={inputsCheck.password}
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
          {error && (
            <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                <AlertIcon fontSize={12}/>
                {error.message}
            </Alert>
          )}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            isLoading={loading}
           onClick={()=>signup(inputs)}
          >
            Sign up
          </Button>
    </>
  )
}

export default Signup