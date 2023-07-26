import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import logo from "../images/manppp.jpg";
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
const Arrow = styled.div`
    z-index: 2;
    width: 50px;
    height: 50px;
    background-color: ;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: absolute;
    /*tf*/
    left : ${props=> props.direction === "left" && "10px"};
    right : ${props=> props.direction === "right" && "10px"};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    aligh-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.img`
    height: 80%;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        console.log(slideIndex);
        if(direction === "left"){
            
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key = {item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Find your next buddy!</Button>
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
  )
}

export default Slider