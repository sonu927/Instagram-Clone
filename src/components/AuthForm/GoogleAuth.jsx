import { Flex, Image, Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            cursor={"pointer"}
          >
            <Image src="google.png" w={5} alt="Google" />
            <Text color={"blue.500"}>Log in with Google</Text>
    </Flex>
  )
}

export default GoogleAuth