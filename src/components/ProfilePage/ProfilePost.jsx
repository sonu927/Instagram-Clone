import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
  <>
    <GridItem
      cursor={"pointer"}
      borderRadius={4}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1/1}
      onClick={onOpen}
    >
      <Flex
        opacity={0}
        _hover={{opacity: 1}}
        position={"absolute"}
        top={0}
        bottom={0}
        right={0}
        left={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={2}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50} width={"100%"}>
          <Flex alignItems={"center"}>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} ml={2}>7</Text>
          </Flex>
          <Flex alignItems={"center"}> 
            <FaComment size={20} />
            <Text fontWeight={"bold"} ml={2}>7</Text>
          </Flex>
        </Flex>
      </Flex>
      <Image src={img} alt="posts" w={"100%"} h={"100%"} objectFit={"cover"} />
    </GridItem>
    <Modal isOpen={isOpen} onClose={onClose}
      size={{base:"3xl",md: "5xl"}}
    isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} padding={4}> 
            <Flex w={{base: "90%" , sm:"70%" , md:"full"}} mx={"auto"} gap={4}>
              <Box
                  borderRadius={4}
                  overflow={"hidden"}
                  border={"1px solid"}
                  borderColor={"whiteAlpha.300"}
                  flex={1.5}
              >
                  <Image src={img} alt="post photo" objectFit={"contain"}/>
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}>
                <Flex alignItems={'center'} justifyContent={"space-between"} >
                  <Flex alignItems={'center'} gap={4}>
                    <Avatar src="" name="Sonu Raut" size={"sm"} />
                    <Text fontWeight={"bold"} fontSize={12}>
                      Sonu Raut
                    </Text>
                  </Flex>
                  <Box _hover={{bg: "whiteAlpha.300",color:"red.600"}} borderRadius={4} p={1}>
                    <MdDelete size={20} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full" } alignItems={"flex-start"} maxH={"350px"} overflowY={"auto"}
                >
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                   <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                   <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                   <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                  <Comment 
                    createdAt={'1d ago'}
                    username={"Sonu Raut"}
                    profilePic={"https://bit.ly/kent-c-dodds"}
                    text={"Dummy text comment here"}
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />

                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
    </Modal>
  </>
  );
};

export default ProfilePost;
