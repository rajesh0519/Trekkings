import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* ***********IMAGE********** */}
      <Flex background="#FF4417" width="100%" height="300px">
        <Image src="./images/footer1.png" />
        <Image src="./images/footer2.png" />
      </Flex>
      {/* ***********end************** */}

      {/* ***********footer links div******* */}
      <Flex
        background="black"
        width="100%"
        justifyContent="center"
        flexWrap="wrap"
      >
        {/* *****footer logo***** */}
        <Flex
          width={["206px", "250px", "300px", "300px"]}
          height={["180px", "180px", "300px", "300px"]}
        >
          <Image src="./images/footerlogo.png" width="100%" height="100%" />
        </Flex>
        {/* *****end***** */}

        {/* *********main link div******** */}
        <Flex
          //   gap="100px"

          width={["84%", "82%", "70%", "70%"]}
          justifyContent="end"
        >
          <Box width={["376px"]}>
            <Text
              as="h1"
              color="#FF3606"
              fontWeight="700"
              fontSize={["16px", "22px", "27px", "30px"]}
              pb="15px"
            >
              QUICK LINKS
            </Text>

            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>
              ABOUT US
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>{" "}
              TREKKING
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>{" "}
              GALLERY{" "}
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>{" "}
              OUR TEAM
            </Text>
          </Box>
          <Box width="376px">
            <Text
              as="h1"
              color="#FF3606"
              fontWeight="700"
              fontSize={["16px", "22px", "27px", "30px"]}
              pb="15px"
            >
              USEFUL LINKS
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>
              SUPPORT
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>
              DISCLAMAIR
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>
              ELEMENT
            </Text>
            <Text
              as="h3"
              color="#FFFFFF"
              fontSize={["12px", "17px", "23px", "23px"]}
            >
              <Text
                as="span"
                color="red"
                fontSize={["12px", "17px", "23px", "23px"]}
              >
                &#9830;
              </Text>
              PRIVACY POLICY
            </Text>
          </Box>
        </Flex>
        {/* ***************** */}
      </Flex>
      {/* ***********end footer links div******* */}

      <Flex
        backgroundColor="black"
        height="200px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="20px"
        pb="30px"
      >
        <Text
          as="h1"
          fontWeight="400"
          fontSize={["20px", "24px", "28px", "30px"]}
          letterSpacing="0.02em"
          color="#FF3606"
        >
          CONNECT WITH US--
        </Text>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="center"
        >
          <Input
            type="email"
            placeHolder="enter your email I'd"
            background="#D9D9D9"
            width={["250px", "300px", "350px", "400px"]}
            height={["38px", "45px", "55px", "60px"]}
            borderRadius={["50px", "50px", "0px", "0px"]}
          />
          <Button
            background="#FF3606"
            width={["100px", "130px", "180px", "210px"]}
            height={["38px", "45px", "55px", "60px"]}
            fontWeight="700"
            fontSize="30px"
            color="#FFFFFF"
            borderRadius={["50px", "50px", "0px", "0px"]}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
