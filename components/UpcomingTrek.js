import {
  Flex,
  Box,
  Text,
  useDisclosure,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import moment from "moment";
import CalendarModal from "./CalendarModal";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

const UpcomingTrek = ({ event }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrek, setSelectedTrek] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );

  const onDateSelect = (date) => {
    const formmatedDate = moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY");
    const data = event.filter((x) => {
      if (x.startDate == date) {
        return x;
      }
    });
    if (data.length !== 0) {
      setSelectedTrek(data[0]);
      onOpen();
    } else {
      alert("No event found on selected date!!!");
    }
  };

  const filterByMonth = (x) => {
    const selectedMonthNumber = moment(new Date(), "DD-MM-YY").format("X");
    const month = moment(x?.startDate, "YYYY-MM-DD HH:mm").format("X");
    if (month >= selectedMonthNumber) {
      return x;
    }
  };

  return (
    <>
      <Flex
        w="100vw"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        py="2"
        flexWrap="wrap"
        gap="2"
        mb={["45px", "45px", "4", "4"]}
      >
        <Flex
          // border='1px solid green'
          flex="1"
          height="500px"
          width="100%"
          justifyContent="center"
          bg="white"
          //   bg="url('/images/m6.png')"
          //   backgroundSize="80%"
          //   backgroundRepeat="no-repeat"
          //   bgPos="center"
          p={["2", "4", "6", "8"]}
        >
          <video autoPlay loop muted>
            <source src="/images/m7.mp4" type="video/mp4"></source>
          </video>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          // border='1px solid green'
          p={["2", "2", "4", "4"]}
          flex="1"
          height="500px"
          w="100%"
          maxW="650px"
        >
          <Text
            fontSize="32px"
            fontWeight="200"
            fontFamily="anton"
            letterSpacing="1.3px"
            textTransform="uppercase"
            color="black"
          >
            {/* {selectedMonth} */}
            UPCOMING TREKS
          </Text>
          <Flex
            direction="column"
            // border='1px solid green'
            my="2"
            mx="auto"
            p="6"
            w="100%"
            h="100%"
            overflowY="auto"
          >
            {event
              ?.filter(filterByMonth)
              .slice(0, 5)
              .map((el, id) => {
                const date = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
                  "DD"
                );
                const month = moment(el?.startDate, "YYYY-MM-DD HH:mm").format(
                  "MMM"
                );
                return (
                  <Flex
                    key={id}
                    justifyContent="start"
                    alignItems="center"
                    fontSize="20px"
                    fontWeight="600"
                    color="#FF3603a7"
                    mb="4"
                    bg="#cbd5e0ad"
                    height="70px"
                    // px="2"
                    borderRadius="20px"
                    _hover={{
                      bg: "#ff4517a7",
                      color: "black",
                    }}
                    onClick={() => {
                      onDateSelect(el?.startDate);
                    }}
                    overflow="hidden"
                    position="relative"
                  >
                    <Flex
                      as="span"
                      color="white"
                      height="100%"
                      px="2"
                      py="2"
                      ml={["4", "4", "6", "6"]}
                      bg="mainOrange"
                      fontFamily="Kanit"
                      textAlign="center"
                    >
                      {date}
                      <br />
                      {month}
                    </Flex>
                    <Flex direction="column" px="2" w="80%" whiteSpace="nowrap">
                      <Text
                        color="blackAlpha.800"
                        fontSize="23px"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        w={["70%", "70%", "70%", "50%"]}
                      >
                        {el?.name}
                      </Text>
                      <Text
                        as="span"
                        fontSize="11px"
                        color="gray.800"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        {el?.description}
                      </Text>
                    </Flex>

                    <Flex position="absolute" right="5px" top="0">
                      {el?.travel && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Travel
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Travel.png"
                          />
                        </Button>
                      )}
                      {el?.stay && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Stay
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Home.png"
                          />
                        </Button>
                      )}
                      {el?.food && (
                        <Button variant="calendar_btn">
                          <Text
                            display={["none", "none", "none", "block"]}
                            mr="1"
                            p="0"
                          >
                            Food
                          </Text>
                          <Image
                            height="15px"
                            width="15px"
                            src="/images/Food.png"
                          />
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                );
              })}
            {event.filter(filterByMonth).length <= 0 && (
              <Box
                textAlign="center"
                py={10}
                px={6}
                bg="gray.200"
                borderRadius="20px"
              >
                <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                  NO UPCOMING EVENT FOUND!
                </Heading>
              </Box>
            )}
            <Link href="/events">
              <Text
                as="a"
                mt="2"
                fontWeight="400"
                fontSize="23px"
                color="#FF3606"
                fontFamily="anton"
                textAlign="center"
                cursor="pointer"
              >
                EXPLORE ALL TREKKING &rarr;
              </Text>
            </Link>
          </Flex>

          <CalendarModal
            onClose={onClose}
            isOpen={isOpen}
            data={selectedTrek}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default UpcomingTrek;
