import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const Socials = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: white;
 background-color: #${props=>props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 19px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>trueReviews.</Logo>
            <Description>
            Lama dev is the best youtuber and 
            most underated person  out there, 
            the efforts he takes for providing 
            free projects where as all others 
            provide paid version , is just 
            unbelievable , Hope you get 
            everything you wish for wishing 
            you 1 million subscribers , You 
            cannot imagine the no of students 
            you are helping world wide. A BIG 
            THANK YOU
            </Description>
            <Socials>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
            </Socials>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer