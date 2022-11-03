import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import {
  LoginSuccess,
  AuthSuccess,
  AlertSuccess,
  LoginFailure,
} from "../Context/AuthContext/Action";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const toast = useToast();
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data: data,
    })
      .then((res) => {
        console.log(res.data.token);
        dispatch(LoginSuccess(res.data.token));
        dispatch(AuthSuccess(true));
        setData({
          email: "",
          password: "",
        });
        toast({
          title: "Congrats..!",
          description: "Signup Successfull !",
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
          description: "Email is Already Registered !",
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

      <Container p={10} mt="-5" background="rgb(15,6,23)">
        <Box>
          <Heading color="white" size="md">
            Create a new account
          </Heading>
          <Text
            mt={5}
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            color="rgb(207, 195, 202)"
          >
            Create an account to continue enjoying uninterrupted video and
            personalised experience
          </Text>
        </Box>
        <Box mt="2rem">
          <Button bg="white" color="purple" size="md" width="360px" h="45px">
            <Image
              src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.40"
              alt="google"
            />
            Sign In
          </Button>
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
        <Box mt="1.4rem">
          <Input
            color="white"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
            variant="flushed"
            w="sm"
            placeholder="Email ID"
            focusBorderColor="red"
          />
          <Input
            mt="1rem"
            color="white"
            variant="flushed"
            name="password"
            value={data.password}
            onChange={(e) => handleChange(e)}
            w="sm"
            type="password"
            placeholder="Password"
            focusBorderColor="red"
          />
        </Box>
        <Box ml="40px" mt="2rem">
          <Center justify="space-between">
            <Text fontSize="13px" color="white">
              By proceeding you agree to our 
            <span style={{color:"#A785FF",cursor:"pointer"}}>
               -Terms of Services && Privacy Policy.
              </span>
            </Text>
          </Center>
        </Box>
        <Box mt="2rem">
          <Button
            onClick={handleClick}
            bg="#8230C6"
            color="white"
            size="md"
            width="360px"
            h="45px"
            _hover={{ bg: "white", color: "#8230C6" }}
          >
            Register
          </Button>
        </Box>
        <Box mt="2rem">
          <Flex justify="center">
            <Text fontSize="13px" color="white">
              Already Registered?
            </Text>
            <Text fontSize="13px" color="#A785FF">
              <NavLink to="/login">Login</NavLink>
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
