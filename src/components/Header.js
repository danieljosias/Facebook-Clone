import React from 'react'
import styled from 'styled-components';

import {FaSearch, FaAlignJustify } from "react-icons/fa";
import logofb from '../img/logo-face-remove.png';

let ColorPrimary = "#fff";
let ColorIcon = "#40E0D0";

function header() {
    return (
        <Header>
            <HeaderLeft>
                <LogoFb src={logofb}></LogoFb>
                <SearchFb> <FaSearch/> </SearchFb>
                <MenuFb> <FaAlignJustify/> </MenuFb>
            </HeaderLeft>
            
            <HeaderRight>
            <PlusBtn>+</PlusBtn>
            </HeaderRight>
        </Header>
    )
}

const Header = styled.header`
    background-color: ${ColorPrimary};
    padding: 10px 0;
    display: flex;
    height: 60px;
`
const HeaderLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
`

const LogoFb = styled.img`
    font-size: 40px;
    margin: 0 10px;
    cursor: pointer;
    width: 70px;
    height: 70px;

    position: relative;
    top: -15px;
`
const SearchFb = styled.div`
    background-color: rgba(230,230,230);
    color: ${ColorIcon};
    
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 45px;
    
    text-align:center;

    cursor: pointer;
`
const MenuFb = styled.div`
    cursor: pointer;
    margin-left: 25px;
    position: relative;
    top: 8px;
    color: ${ColorIcon};
    font-size: 25px;
`
const HeaderRight = styled.div`
    text-align: right;
    width: 50%;
    margin: 0 10px;
`

const PlusBtn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    display: inline-block;
    
    text-align: center;
    line-height: 40px;
    
    background-color: rgba(230,230,230);
    color: ${ColorIcon};
    font-size: 28px;

    cursor: pointer;
`

export default header;
