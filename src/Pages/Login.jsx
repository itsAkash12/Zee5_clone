import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { FaApple } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AlertSuccess, AuthSuccess, LoginFailure, LoginSuccess } from "../Context/AuthContext/Action";
export default function Login() {
  const toast = useToast();
  const { dispatch } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data: loginData,
    })
      .then((res) => {
        console.log(res.data.token);
        dispatch(LoginSuccess(res.data.token));
        dispatch(AuthSuccess(true));

        setLoginData({
          email: "",
          password: "",
        });
        toast({
          title: "Welcome Back Buddy !",
          description: "Enjoy Your Favourite Content",
          status: "success",
          duration: 4000,
          position: ["top"],
          isClosable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        dispatch(LoginFailure(true));
        toast({
          title: "Error..!",
          description: "Enter Valid Credentials !",
          status: "error",
          duration: 4000,
          position: ["top"],
          isClosable: true,
        });
      })
      .finally(() => {
        console.log("Success");
      });
  };

  return (
    <Box>
      <Box w="90%">
        <Flex justify="right">
          <NavLink to="/">
            <CloseIcon color="white" />
          </NavLink>
        </Flex>
      </Box>

      <Container p={10} mt="-4" background="rgb(15,6,23)">
        <Box>
          <Heading color="white" size="md">
            Login to ZEE5
          </Heading>
          <Text
            mt={5}
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            color="rgb(207, 195, 202)"
          >
            Login to continue enjoying uninterrupted video and personalised
            experience.
          </Text>
        </Box>
        <Box
          display="flex"
          gap="1.5rem"
          size="40px"
          marginTop="2.6rem"
          justifyContent="center"
          fontSize="38px"
          color="white"
          cursor="pointer"
        >
          <FaApple />
          <AiFillGoogleCircle />
          <BsFacebook />
          <AiFillTwitterCircle />
        </Box>
        <Box mt="2rem">
          <Button
            bg="black"
            size="md"
            borderRadius="50%"
            color="white"
            _hover={{ bg: "teal", color: "white" }}
          >
            Or
          </Button>
        </Box>
        <Box mt="1rem">
          <Input
            color="white"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            variant="flushed"
            w="sm"
            placeholder="Email ID"
            focusBorderColor="red"
          />
          <Input
            mt="1rem"
            color="white"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            variant="flushed"
            w="sm"
            type="password"
            placeholder="Password"
            focusBorderColor="red"
          />
        </Box>
        <Box mt="2rem">
          <Text fontSize="13px" color="#A785FF">
            Forgot Password?
          </Text>
        </Box>
        <Box mt="2rem">
          <Button
            bg="#8230C6"
            color="white"
            size="md"
            onClick={handleClick}
            width="360px"
            h="45px"
            _hover={{ bg: "white", color: "#8230C6" }}
          >
            Login
          </Button>
        </Box>
        <Box mt="2rem">
          <Flex justify="center">
            <Text fontSize="13px" color="white">
              New to ZEE5?
            </Text>
            <Text fontSize="13px" color="#A785FF">
              <NavLink to="/register">Register</NavLink>
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
