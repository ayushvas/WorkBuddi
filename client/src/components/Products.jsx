import React, { useEffect } from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import Product from './Product'
import { useState } from 'react'
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat}) => {
  console.log(cat);
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        // console.log(cat);
        const res = await axios.get(cat 
          ? `http://localhost:5000/api/users/find?interest=${cat}` 
          : `http://localhost:5000/api/users/find`
        );
        // console.log(res);
        setProducts(res.data);
      }catch(err){

      }
    }
    getProducts();
  },[cat]);
  // console.log(products);
 
  return (
    <Container>
      {products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} cat={cat}/>)}
    </Container>
  )
}

export default Products