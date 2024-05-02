import React from 'react';
import {
    Box,
    chakra,
    Text,
    HStack,
    Flex,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
import { FaRegNewspaper } from 'react-icons/fa';

const DisplayTransactionHistory = ({ data }) => {
    return (
        <Flex mb="10px">
            <LineWithDot />
            <Card {...data} />
        </Flex>
    );
};

const Card = ({ _id, outletId, consumerName, items, consumerNumber, addedOn }) => {
    const formattedDate = new Date(addedOn).toLocaleString();

    return (
        <HStack
            p={{ base: 3, sm: 6 }}
            m={5}
            bg={useColorModeValue('gray.100', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            width={"100%"}
            height={"90px"}
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: '15px 15px 15px 0',
                position: 'absolute',
                left: '-15px',
                display: 'block'
            }}
        >
            <Icon as={FaRegNewspaper} w={8} h={8} color="teal.400" />
            <Flex width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Flex direction={'column'} width={"18%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize="md" noOfLines={2}>
                        Transaction Id:
                    </Text>
                    <Text fontSize="md" noOfLines={2}>
                        {_id}
                    </Text>
                </Flex>
                <Flex ml={"18px"} direction={'column'} width={"18%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize="md" noOfLines={2}>
                        Outlet Id:
                    </Text>
                    <Text fontSize="md" noOfLines={2}>
                        {outletId}
                    </Text>
                </Flex>
                <Flex direction={'column'} width={"18%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize="md" noOfLines={2}>
                        Consumer Name:
                    </Text>
                    <Text fontSize="md" noOfLines={2}>
                        {consumerName}
                    </Text>
                </Flex>
                <Flex direction={'column'} width={"18%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize="md" noOfLines={2}>
                        Consumer Number:
                    </Text>
                    <Text fontSize="md" noOfLines={2}>
                        {consumerNumber}
                    </Text>
                </Flex>
                <Flex direction={'column'} width={"18%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize="md" noOfLines={2}>
                        Date/Time:
                    </Text>
                    <Text fontSize="md" noOfLines={2}>
                        {formattedDate}
                    </Text>
                </Flex>
            </Flex>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex pos="relative" alignItems="center" mr="40px">
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={"cornflowerblue"}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    width="100%"
                    height="100%"
                    bottom="0"
                    right="0"
                    top="0"
                    left="0"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    backgroundColor="rgb(255, 255, 255)"
                    borderRadius="100px"
                    border="3px solid cornflowerblue"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

export default DisplayTransactionHistory;
