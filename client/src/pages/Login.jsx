import React, { useState } from 'react'
import styled from 'styled-components'
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(255,255,255,0.5), rgb(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 40px;
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    &:disabled {
    color: green;
    cursor: not-allowed;
  }
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
        <Wrapper>
            <Title>SING IN</Title>
            <Form>
                <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>
                    Sign In
                </Button>
                <Link>Forgot password?</Link>
                <Link>Create a new account.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login