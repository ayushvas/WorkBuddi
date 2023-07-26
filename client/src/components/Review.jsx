import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    display: flex;
    margin: 20px;
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
const Right = styled.div`
    flex:4;
    display: flex;
    
    flex-direction: column;
`
const Icon = styled.div`
    
`
const Name = styled.h1`
    font-size: 40px;
    font-weight: 200;
`
const Text = styled.p`

`
const Review = ({item}) => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
            </Left>
            <Right>
                <Name>
                    PPP
                </Name>
                <Text>
                    {item.review}
                </Text>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Review