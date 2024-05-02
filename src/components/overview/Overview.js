import {
    AbsoluteCenter,
    Box,
    Divider,
    Flex,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';

import { RiFlashlightFill } from 'react-icons/ri';
import QuantityGraph from '../home/QuantityGraph';
import SelectBar from '../../utils/SelectBar';
import AmountGraph from '../home/AmountGraph';
import AmountStat from '../home/AmountStat';
import Popular from '../home/Popular';

import QuantityStat from '../home/QuantityStat';
import OverallStats from '../home/OverallStats';
import TopThreeDemand from '../home/TopThreeDemand';
import Meatlist from '../home/Meatlist';

const Overview = () => {

    const color1 = useColorModeValue('inherit', 'gray.700');
    const color2 = useColorModeValue('white', 'gray.800');

    return <>
        <Flex
            as="header"
            align="center"
            w="full"
            px="4"
            d={{ base: 'flex', md: 'none' }}
            borderBottomWidth="1px"
            borderColor={color1}
            bg={color2}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            boxShadow="lg"
            h="14"
        >
            <Flex align="center">
                <Icon as={RiFlashlightFill} h={8} w={8} />
            </Flex>
        </Flex>

        <Box position='relative' padding='10' width={"100%"}>
            <Divider borderColor='white' />
            <AbsoluteCenter color={"white"} bg='#B0C4DE' fontSize={"1.3rem"} px='4'>
                POPULARITY / OVERVIEW
            </AbsoluteCenter>
        </Box>
        <Flex mt={5} mb={13} direction={{ base: 'column', md: 'column', lg: "row" }} justify="space-around" align="center" width={"85%"} p={5} borderRadius={"5px"} bgColor={"#F0F8FF"} boxShadow={"1px 4px 4px grey"}>
            <Flex justifyContent={"center"} alignContent={"center"} width={"40%"} height={"500px"}>
                <Popular />
            </Flex>
            <Flex mb={2} height={"100%"} width={"60%"} justifyContent={"center"} alignItems={"center"}>
                <Flex direction={"column"} width={"40%"} height={"100%"} alignItems={"center"}>
                    <Meatlist />
                    <TopThreeDemand />
                </Flex>
                <Flex width={"60%"} height={"100%"} justifyContent={"center"} alignItems={"center"} p={1}>
                    <OverallStats />
                </Flex>
            </Flex>
        </Flex>

        <Box position='relative' padding='10' width={"100%"}>
            <Divider borderColor='white' />
            <AbsoluteCenter color={"white"} bg='#B0C4DE' fontSize={"1.3rem"} px='4'>
                YEARLY QUANTITY
            </AbsoluteCenter>
        </Box>
        <Flex mt={15} mb={13} direction={{ base: 'column', md: 'column', lg: "row" }} justify="space-around" align="center" width={"85%"} p={8} borderRadius={"5px"} bgColor={"#F0F8FF"} boxShadow={"1px 4px 4px grey"}>
            <Box width={"700px"} height={"450px"} >
                <SelectBar Headingcolor='white' width='700px' height='40px' HeadingBgColor='cornflowerblue' heading="QUANTITY SOLD (Kg)" OptionBgColor='cornflowerblue' type={"quantity"} />
                <QuantityGraph />
            </Box>
            <Box width={"500px"} height={"450px"}>
                <QuantityStat />
            </Box>
        </Flex>

        <Box position='relative' padding='10' width={"100%"}>
            <Divider borderColor='white' />
            <AbsoluteCenter color={"white"} bg='#B0C4DE' fontSize={"1.3rem"} px='4'>
                YEARLY REVENUE
            </AbsoluteCenter>
        </Box>
        <Flex mt={15} mb={13} direction={{ base: 'column', md: 'column', lg: "row" }} justify="space-around" align="center" width={"85%"} p={8} borderRadius={"5px"} bgColor={"#F0F8FF"} boxShadow={"1px 4px 4px grey"}>
            <Box width={"700px"} height={"450px"}>
                <SelectBar Headingcolor='white' width='700px' height='40px' HeadingBgColor='cornflowerblue' heading="VALUE GENERATED (Kg)" OptionBgColor='cornflowerblue' type={"value"} />
                <AmountGraph />
            </Box>
            <Box width={"500px"} height={"450px"} >
                <AmountStat />
            </Box>
        </Flex>
    </>
    //     <Box position='relative' padding='10' width={"100%"}>
    // <Divider borderColor='white' />
    // <AbsoluteCenter color={"white"} bg='#B0C4DE' fontSize={"1.3rem"} px='4'>
    //     YEARLY REFILL
    // </AbsoluteCenter>
    // </Box>
    // <Flex mt={20} mb={13} direction={{ base: 'column', md: 'column', lg: "row" }} justify="center" align="center" >
    // <Box ml={20} width={"650px"} height={"420px"} >
    //     <SelectBar Headingcolor='white' width='650px' height='40px' HeadingBgColor='cornflowerblue' heading="QUANTITY SOLD (Kg)" OptionBgColor='cornflowerblue' />
    //     <QuantityGraph />
    // </Box>
    // <Box ml={10} width={"500px"} height={"420px"}>
    // </Box>

}
export default Overview;