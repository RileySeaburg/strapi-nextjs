import React from "react";
import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "../components/Navigation";
import Link from "next/link";

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          className="container logo"
        >
          <Link href="/">
            <a>
              <img src="/public/vercel.svg" alt="" />
              <span className="logo-text">Company Name Here</span>
            </a>
          </Link>
          <Navigation />
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#3b5998" : "#efefef")};
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 1rem;
    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  .logo {
    display: flex;
    color: #333;
    font-weight: bold;
    font-size: ${rem(20)};
    margin-left: ${rem(2)};
  }
`;

export default Header;
