import React from 'react'
import styled from 'styled-components';
import cardpost from '../img/card-post.png'

import { AiFillVideoCamera } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegLaugh } from "react-icons/fa";

let BgPost = "#fff"
let ColorText = "#000"

function post() {
    return (
        <Post>
            <PostContainer>
                <PostImage src={cardpost}></PostImage>
                <PostInput type="text" placeholder="No que você está pensando, Home? "></PostInput>
            </PostContainer>
            
            <IconContainer>
                <Container>
                    <IconVideo> <AiFillVideoCamera/> </IconVideo>
                    <IconText>Vídeo ao vivo</IconText>
                </Container>
                
                <Container>
                <IconPicture> <AiOutlinePicture/> </IconPicture>
                <IconText>Foto/Vídeo</IconText>
                </Container>
                
                <Container>
                <IconSmile> <FaRegLaugh/> </IconSmile>
                <IconText>Sentimento/Atividade</IconText>
                </Container>
            </IconContainer>
        </Post>
    )
}

export default post;


const Post = styled.div`
    background-color: ${BgPost};
    
    margin-top: 50px;
    position: relative;
    left: 340px;

    width: 650px;
    height: 120px;  
    border-radius: 15px;
    
    align-content: center;
    justify-content: center;
    text-align: center;
`

const PostContainer = styled.div`
    border-bottom:  1px solid #ccc;
    padding-bottom: 10px;
`

const PostImage = styled.img`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #cecece;
    
    position: relative;
    top: 15px;

    cursor: pointer;
`

const PostInput = styled.input`
    border-radius: 15px;
    border: 0;
    width: 450px;
    height: 40px;
    background-color:rgba(230,230,230); 
    margin-left: 5px;
    cursor: pointer;

    &:hover{
        background-color: rgba(220,220,220);
    }
`

const IconContainer = styled.div`
    padding-top:10px;
    padding-bottom: 20px;
    position: relative;
    left: -30px;
`

const Container = styled.div`
    display: inline-block;


     &:hover{
        background-color:rgba(230,230,230);
        border-radius: 10px;
        text-align: center;
        height: 40px;
    }
`

const IconVideo = styled.div`
    display: inline-block;
    flex-direction: row;
    margin-right: 5px;
    margin-left: 10px;
    
    color: red;
   
    font-size: 18pt;
    font-weight: bold;
    cursor: pointer;
   
    position: relative;
    top: 7px;

   
`
const IconPicture = styled.div`
    display: inline-block;
    flex-direction: row;
    margin-right: 5px;
    margin-left: 10px;
    color: green;
    font-size: 18pt;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    top: 7px;
`
const IconSmile = styled.div`
    display: inline-block;
    flex-direction: row;
    margin-right: 5px;
    margin-left: 10px;
   
    color: #FFD700;
    
    font-size: 18pt;
    font-weight: bold;
   
    cursor: pointer;
    
    position: relative;
    top: 7px;
`

const IconText = styled.span`
    color: ${ColorText};
    font-weight: bold;
    cursor: pointer;
`



