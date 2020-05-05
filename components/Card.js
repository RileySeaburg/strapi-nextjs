import React from 'react'
import styled from '@emotion/styled'

function Card({post}) {
    const {API_URL} = process.env
    console.log(post);
    return (
        <CardStyled>
            <h4>{post.Title}</h4>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    padding: 1rem;
    background-color: white;
    text-align: center;
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`

export default Card
