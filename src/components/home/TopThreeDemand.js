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
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";

const Demands = () => {
    const demandedMeat = useSelector((state) => state.outlet.demandedMeat);
    return (
        <Flex width="100%" height="90%" direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} mb={3}>
            <Box position='relative' p={10} width={"100%"}>
                <Divider borderColor='cornflowerblue' />
                <AbsoluteCenter rounded={"md"} display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"#F0F8FF"} width={"45%"} color='cornflowerblue' fontSize={"1.2rem"}>
                    TOP 3 BY DEMAND
                </AbsoluteCenter>
            </Box>
            <SimpleGrid width={"95%"} columns={{ base: 1, sm: 1, md: 1 }} spacing={2}>
                {
                    demandedMeat.map((ele, i) => {
                        return <Card data={ele} />
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
                h={"50px"}
                w="100%"
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
                        bg="red.500"
                        position="relative"
                        w={10}
                        h={10}
                        overflow="hidden"
                        lineHeight={0}
                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                    >
                        <Icon as={FaHeart} w={6} h={6} color="white" />
                    </Flex>
                    <VStack spacing={0} align="start" maxW="lg" h="100%">
                        <HStack spacing={2}>
                            <Text ml={5} as="h3" fontSize="md" noOfLines={2} color="gray.600">
                                {data.meatType}
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
            </Stack>
        </motion.div>
    );
};

export default Demands;