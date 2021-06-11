import React from 'react';
import styled from 'styled-components';

import card1 from '../img/card1.png';
import card2 from '../img/card2.jpg';
import card3 from '../img/card3.jpg';
import card4 from '../img/card4.jpg';
import card5 from '../img/card5.jpg';

let ColorText = "#000";

function stories() {
    return (
        <Stories>
            <StoriesCard>
                <StoriesImage src={card1}></StoriesImage>
                <StoriesText>Homer</StoriesText>
            </StoriesCard>
            
            <StoriesCard>
                <StoriesImage src={card2}></StoriesImage>
                <StoriesText>Maggie</StoriesText>
            </StoriesCard>
            
            <StoriesCard>
                <StoriesImage src={card3}></StoriesImage>
                <StoriesText>Bart</StoriesText>
            </StoriesCard>

            <StoriesCard>
                <StoriesImage src={card4}></StoriesImage>
                <StoriesText>Lisa</StoriesText>
            </StoriesCard>
            
            <StoriesCard>
                <StoriesImage src={card5}></StoriesImage>
                <StoriesText>Mr.Burns</StoriesText>
            </StoriesCard>
        </Stories>
    )
}

export default stories;

const Stories = styled.div`
    display: flex;
    margin: 10px 0;
`
const StoriesCard = styled.div`
    width: 14%;
    height: 287px;
    background-position: center;
    background-size: cover;
    position: relative;
    left: 165px;
`

const StoriesImage = styled.img`
    margin-left: 20%;
    border-radius: 15px;
    cursor: pointer;
    filter: grayscale(60%);

    &:hover{
        height: 288px;
        filter: grayscale(0%);
    }
`

const StoriesText = styled.p`
    color: ${ColorText};
    font-size: 14px;
    font-weight: bold;
    padding:10px;
    text-align: center;
    position: relative;
    left: 20px;
`