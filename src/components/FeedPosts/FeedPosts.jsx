import { Container } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"}>
      <FeedPost img={"/img1.png"} username={"user1"} avatar={"/img1.png"} />
      <FeedPost img={"/img2.png"} username={"user2"} avatar={"/img2.png"} />
      <FeedPost img={"/img3.png"} username={"user3"} avatar={"/img3.png"} />
      <FeedPost img={"/img4.png"} username={"user4"} avatar={"/img4.png"} />
    </Container>
  );
};

export default FeedPosts;
