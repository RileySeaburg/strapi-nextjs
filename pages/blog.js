import React from "react";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";
import styled from '@emotion/styled'
import { Flex, Box } from "reflexbox";

const blog = ({ posts, isDark }) => {
  return (
    <Box variant="container" bg={{ _: "red", lg: "lightblue" }}>
      <Box my={4} as="h2">Blog</Box>
      <h3>Recent Posts</h3>
      <Flex justifyContent="space-around" flexDirection={{ _: "column", md: "row" }} >
        {posts.map((post) => (
          <Box key={post.id} width="30%">
            <a href="#">
              <Card key={post.id} post={post} />
            </a>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
export default blog;
