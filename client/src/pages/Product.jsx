import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display:flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const Product = () => {
  
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/shop/" + id);
        setProduct(res.data.shop);
      } catch {}
    };
    getProduct();
  }, [id]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await publicRequest.get("/review/show/" + id);
        setReviews(res.data.reviews);
      } catch {}
    };
    getReviews();
  }, [id]);
  // console.log(product);
  // console.log(reviews);
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
          <ImgContainer>
            <Image src=""/>
          </ImgContainer>
          <InfoContainer>
            <Title>
              {product.shopName}
            </Title>
            <Desc>
              Best in the effing town.
            </Desc>
            <Price>
              20
            </Price>
          </InfoContainer>
        </Wrapper>
          <Reviews reviews={reviews}/>
          <Newsletter/>
          <Footer/>
    </Container>
  )
}

export default Product