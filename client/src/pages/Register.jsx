import React from 'react'
import styled from 'styled-components'
import { register } from '../redux/apiCalls'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(255,255,255,0.5), rgb(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/4065400/pexels-photo-4065400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 40px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    margin-top: 20px;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if(confirmedPassword === password){
        await register({ username, email, password });
    }else{
        console.log("Passwords do not match!")
    }
    
  };
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <Input placeholder="confirm password" onChange={(e) => setConfirmedPassword(e.target.value)}/>
                <Agreement>
                    you agree to deez nuts!!!
                </Agreement>
                <Button onClick={handleClick}>
                    Create
                </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register