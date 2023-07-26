import React from 'react'
import styled from 'styled-components'

import Review from './Review';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Reviews = ({reviews}) => {
  return (
    <Container>
        {reviews.map((item) => <Review item={item} key={item.id} />)}
    </Container>
  )
}

export default Reviews