import React from 'react'
import styled from 'styled-components';
import { IoMdPeople } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

import cardpost from '../img/card-post.png'

let BgFeed = "#fff"
let ColorIcon = "gray"
let ColorText = "#000"

function feed(props) {
    return (
        <FeedContainer>
            <Feed>
                <FeedImage src={cardpost}></FeedImage>
                <FeedLinkName href="/">{props.nome}</FeedLinkName>
                <FeedLinkHora href="/">{props.hora}</FeedLinkHora>
                <FeedIconPeople> <IoMdPeople/> </FeedIconPeople>
                <FeedIcon> <BiDotsHorizontalRounded/> </FeedIcon>
                
                <FeedText>{props.conteudo}</FeedText>
            </Feed>
            <PostHomer src={props.img}></PostHomer>
            
            <FeedInteragir>

                <Icon>
                    <FeedIconLike><AiOutlineLike/></FeedIconLike>
                    <TextIcon>Curtir</TextIcon>
                </Icon>

                <Icon>
                    <FeedIconComments><BiComment/></FeedIconComments>
                    <TextIcon>Comentar</TextIcon>
                </Icon>

                <Icon>
                    <FeedIconShare><BiShare/></FeedIconShare>
                    <TextIcon>Compartilhar</TextIcon>
                </Icon>

            </FeedInteragir>
        </FeedContainer>
    )
}

export default feed;
const FeedContainer = styled.div`

    position: relative;
    left: 340px;

    width: 650px;
    height: 120px;  
    margin-bottom: 340px;
`

const Feed = styled.div`
    background-color: ${BgFeed};
    border-radius: 15px 15px 0px 0px ;
    border-bottom: 1px solid #cecece;
    margin-top: 20px;
`
const FeedImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #cecece;

    margin-top:10px;
    margin-left: 80px;

    cursor: pointer;
`
const FeedLinkName = styled.a`
    position: relative;
    top:-30px;
    left: 5px;
    margin-left: 5px;
    text-decoration: none;
    color: ${ColorText};

    &:hover{
        text-decoration: underline;
    }
`
const FeedLinkHora = styled.a`
    position: relative;
    top:-10px;
    left: -105px;
    text-decoration: none;
    color: ${ColorText};

    &:hover{
        text-decoration: underline;
    }
`
const FeedIconPeople = styled.div`
    display: inline-block;
    position: relative;
    top:-5px;
    left: -95px;
    font-size: 14pt;
    color:${ColorIcon}
`
const FeedIcon = styled.div`
    display: inline-block;
    position: relative;
    top: 15px;
    float: right;
    margin-right: 20px;
    font-size: 18pt;
    cursor: pointer;
`
const FeedText = styled.p`
    margin-left: 80px; 
    margin-bottom: 10px;
`
const PostHomer = styled.img`
    width: 650px;
    height: 300px;
    margin-bottom: 20px;

    cursor: pointer;
`

const FeedInteragir = styled.div`
    border-top:1px solid #cecece;
    border-bottom:1px solid #cecece;
    background-color: ${BgFeed};
    
    display: inline-box;
    width: 650px;
    height: 50px;
    position: relative;
    top: -24px;
    
    padding:15px;
    justify-content: center;
    cursor: pointer;
    
`

const Icon = styled.div`
    font-size: 14pt;
    padding-left: 55px;
    display: inline-box;
    margin-right: 10px;
    
    &:hover{
        color:#40E0D0;
        transition: .2s ease-in;
    }
`

const FeedIconLike = styled.div`
    margin-right: 5px;
`

const FeedIconComments = styled.div`
    margin-right: 5px;
`
const FeedIconShare = styled.div`
    margin-right: 5px;
`
const TextIcon = styled.span`
    font-weight: bold;
    display: inline-block;
`