import React, { useState } from 'react'
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { makeRequest, register } from '../redux/apiCalls';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: #f5fbfd;
    position: relative;
    overflow: hidden;
   
`
const Image = styled.div`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
         background-color: #e9f5f5;
         transform: scale(1.3);
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const TextField = styled.div`
    position: absolute;
    top: ${props=> props.p ? "175px" : "500px"};
    display: flex;
    flex-direction: column;
    bottom: 0;
    margin: auto;
    height: 100px;
    border: none;
    transition: all 1s ease;
`
const TextInput = styled.input`

`
const Button = styled.button`

`

const Product = ({item}, {cat}) => {
    const location = useLocation();
    // if(!cat){
        
  // console.log(location);
        const interest = location.pathname.split("/")[2];
    // }
    const [text, setText] = useState("Hey!");
    const user= useSelector((state) => state.user.currentUser)
    var from = null;
    if(user){
        from = user.username;
    }
    
    const to = item.username;
    console.log(from);
    console.log(to);
    console.log(cat);
  const handleClick = (e) => {
    e.preventDefault();
    if(from){
        makeRequest({from, to, interest, text});
    }else{
        window.location.href = "http://localhost:3000/login";
    }
    
  };
    const [textOpen, setTextOpen] = useState(false);
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
            <Icon onClick={()=>setTextOpen(!textOpen)}>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <TextField p = {textOpen} onChange={(e) => setText(e.target.value)}>
                <TextInput/>
                <Button onClick={handleClick}/>
            </TextField>
        </Info>
    </Container>
  )
}

export default Product