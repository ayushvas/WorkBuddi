import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';

import { logOut } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    margin-left : 25px;
    display: flex;
    border: 0.5px solid lightgray; 
    align-items: center;
    padding : 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
`
const MenuItem = styled.div`
    margin-left: 25px;  
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        logOut(dispatch);
      };
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    English
                </Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>workBuddi.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem><Button onClick={handleClick}>Sign In</Button></MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
       
    </Container>
  )
}

export default Navbar