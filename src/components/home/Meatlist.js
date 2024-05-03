import {
    Flex,
    Text,
    Box,
    HStack,
    VStack,
    useColorModeValue,
    Icon,
    Stack,
    Divider,
    AbsoluteCenter,
    SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CgProductHunt } from "react-icons/cg";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Meatlist = () => {
    const [meatlist, setMeatlist] = useState([]);

    const fetchMeats = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            const res = await axios.get(url + '/api/meats');
            setMeatlist(res.data.data.meats);
        } catch (err) {
            console.error('error fetching meats: ', err);
        }
    }

    useEffect(() => {
        fetchMeats();
    }, []);

    console.log(meatlist);
    return (
        <Flex width="100%" height="100%" direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} >
            <Box position='relative' p={10} width={"100%"}>
                <Divider borderColor='cornflowerblue' />
                <AbsoluteCenter rounded={"md"} display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"#F0F8FF"} color='cornflowerblue' fontSize={"1.2rem"} p='2'>
                    ITEMS AVAILABLE
                </AbsoluteCenter>
            </Box>
            <SimpleGrid width={"95%"} columns={{ base: 1, sm: 1, md: 1 }} spacing={2}>
                {
                    meatlist.map((ele, i) => {
                        return <Card data={ele}></Card>
                    })
                }
            </SimpleGrid>
        </Flex>
    );
}

const Card = ({ data }) => {
    return (
        <motion.div whileHover={{ translateY: -5 }}>
            <Stack
                direction="column"
                rounded="md"
                boxShadow={useColorModeValue(
                    '0 4px 6px rgba(160, 174, 192, 0.6)',
                    '2px 4px 6px rgba(9, 17, 28, 0.9)'
                )}
                w="100%"
                h={"50px"}
                textAlign="left"
                align="start"
                role="group"
                overflow="hidden"
            >
                <HStack py={2} px={2} spacing={4} bg={useColorModeValue('gray.100', 'gray.800')} w="100%">
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        rounded="lg"
                        p={2}
                        bg="orange.500"
                        position="relative"
                        w={10}
                        h={10}
                        overflow="hidden"
                        lineHeight={0}
                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                    >
                        <Icon as={CgProductHunt} w={6} h={6} color="white" />
                    </Flex>
                    <VStack spacing={0} align="start" maxW="lg" h="100%">
                        <HStack spacing={2}>
                            <Text ml={5} as="h3" fontSize="md" noOfLines={2} color="gray.600">
                                {data.meatType}
                            </Text>
                            <Text ml={5} as="h2" fontSize="lg" color="gray.600">
                                @
                            </Text>
                            <Text ml={5} as="h2" color={"cornflowerblue"} fontSize="lg" fontWeight="bold">
                                {data.pricePerKg} /Kg.
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
            </Stack>
        </motion.div>
    );
};

export default Meatlist;