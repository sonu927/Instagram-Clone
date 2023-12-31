import { Container } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import FeedPost from "./FeedPost";
import PostSkeleton from "../Skeletons/PostSkeleton";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Container maxW={"container.sm"}>
      {isLoading ? (
        [0, 1, 2, 3].map((_, idx) => {
          return <PostSkeleton key={idx} />;
        })
      ) : (
        <>
          <FeedPost img={"/img1.png"} username={"user1"} avatar={"/img1.png"} />
          <FeedPost img={"/img2.png"} username={"user2"} avatar={"/img2.png"} />
          <FeedPost img={"/img3.png"} username={"user3"} avatar={"/img3.png"} />
          <FeedPost img={"/img4.png"} username={"user4"} avatar={"/img4.png"} />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
