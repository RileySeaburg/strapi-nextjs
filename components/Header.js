import React from "react";
import styled from "@emotion/styled";
import {rem} from 'polished'
function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="container logo">
          <a href="/">
            <img src="/public/vercel.svg" alt="" />
          </a>
          <span className="logo-text">Company Name Here</span>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
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
      margin-left: ${rem(2)}
  }
`;

export default Header;
