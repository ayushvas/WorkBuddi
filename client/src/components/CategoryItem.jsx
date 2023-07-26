import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to= {`products/${item.cat}`}>
        
    
        <Image srt={item.title}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>EXPLORE</Button>
        </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem