import { Box, Button, Checkbox, Flex, Image } from "@chakra-ui/react";
import React,{ useContext } from "react";
import styles from "../Styles/plan.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CloseIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { BsCheckCircle, BsCheckLg } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Login from "./Login"

const PremiumPlan = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/payment");
  };

  
  const {state} = useContext(AuthContext);

  if(state.auth === false){
    return(
      <Login />
    )
  }

  return (
    <Box>
      <Box w="90%">
        <Flex justify="right">
          <NavLink to="/">
            <CloseIcon color="white"/>
          </NavLink>
        </Flex>
      </Box>
      <Box style={{ paddingTop: "10px", paddingBottom: "1rem" }}>
        <Box className={styles.container}>
          <Box className={styles.left}>
            <h1>Watch Ad-Free with Premium!</h1>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <Box>
                <p>2800+ Blockbuster Movies</p>
              </Box>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p>250+ Web Series</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p>Live TV, Before TV</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p>Offer: Extra 10% OFF on Cards</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p>Watch on Mobile, TV, Laptop</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
            <Box className={styles.flex}>
              <Box>
                <BsCheckLg color="rgb(250, 111, 190)" size="1.5rem" />
              </Box>
              <p>Eduaurra Competitive Exams Learning</p>
              <Box>
                <QuestionOutlineIcon />
              </Box>
            </Box>
          </Box>
          <Box className={styles.right}>
            <Box className={styles.box1}>
              <Box className={styles.line}>
                <Box className={styles.flex2}>
                  <Box className={styles.off}>
                    <p>LIMITED PERIOD OFFER</p>
                  </Box>
                  <Box className={styles.off2}>SAVE 30%</Box>
                </Box>

                <Box className={styles.flex3}>
                  <Box className={styles.price}>
                    <h1>12 months plan</h1>
                    <p>Effective price ₹58/month</p>
                  </Box>
                  <Box className={styles.price2}>
                    <s>999</s>
                    <h1
                      style={{
                        fontSize: "19px",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      699
                    </h1>
                    <Box>
                      <BsCheckCircle
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "1rem",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.innerbox}>
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
                  alt=""
                />
                <p>Watch on 3 Screens at the same time</p>
              </Box>
            </Box>

            <Box className={styles.box2}>
              <Box className={styles.line}>
                <Box className={styles.flex3}>
                  <Box className={styles.price}>
                    <h1>3 months plan</h1>
                  </Box>
                  <Box className={styles.price2}>
                    <h1
                      style={{
                        fontSize: "19px",
                        fontWeight: "bold",
                        marginRight: "5px",
                      }}
                    >
                      499
                    </h1>
                    <Checkbox borderColor={"black"} defaultChecked></Checkbox>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.innerbox}>
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
                  alt=""
                />
                <p>Watch on 2 Screens at the same time</p>
              </Box>
            </Box>
            <Box>
              <br />
              <br />
              <Button onClick={click} colorScheme="purple" w="90%" size="md">
                Continue with 699
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumPlan;
