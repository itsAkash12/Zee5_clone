import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Box,
  Button,
  HStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  DrawerFooter,
  AccordionIcon,
  Text,
  useDisclosure
} from "@chakra-ui/react";

export default function DrawerApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <HStack>
      <Box>
        <Button
          size="sm"
          onClick={onOpen}
          colorScheme="none"
          leftIcon={<Icon color={"white"} w={30} h={30} as={AiOutlineMenu} />}
        ></Button>
      </Box>
      <Box>
        <Drawer
          marginTop={30}
          size="xs"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          color={"white"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay w={20}/>
          <DrawerContent bg="#0f0617">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody bg="#0f0617" color="white">
              <Link to={"/"}>
                <h2>Home</h2>
              </Link>
              <hr />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Explore
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link href="/movies">TV Shows</Link>
                    <br />
                    <Link href="/movies">Movies</Link>
                    <br />
                    <Link href="/">Web Series</Link>
                    <br />
                    <Link href="/">News</Link>
                    <br />
                    <Link href="/">Eduaraa</Link>
                    <br />
                    <Link href="/">Premium</Link>
                    <br />
                    <Link href="/">Live Tv</Link>
                    <br />
                    <Link href="/">Music</Link>
                    <br />
                    <Link href="/">ZEEPLEX</Link>
                    <br />
                    <Link href="/">Play</Link>
                    <br />
                    <Link href="/">Articles</Link>
                    <br />
                    <Link href="/">Kids</Link>
                    <br />
                    <Link href="/">Videos</Link>
                    <br />
                    <Link href="/">Stories</Link>
                    <br />
                    <Link href="/">Channels</Link>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Plans
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Buy Plan</Link>
                    <br />
                    <Link>Have a Prepaid code?</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Settings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Language</Link>
                    <br />
                    <Link>Reset setting to default</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Info
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>About us</Link>
                    <br />
                    <Link>Help Center</Link>
                    <br />
                    <Link>Content Redressal Mechanism</Link>
                    <br />
                    <Link>Terms of use</Link>
                    <br />
                    <Link>Privacy Policy</Link>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
            <hr />
            <DrawerFooter textAlign="center">
              <Text color={"white"}>Version 2.51.65</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  );
}
