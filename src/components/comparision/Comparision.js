import {
    Table,
    Tbody,
    Tr,
    Td,
    Flex,
    TableCaption,
    TableContainer,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { comparisonActions } from '../../store';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Comparison = () => {

    const [prevData, setPrevData] = useState({});
    const [currData, setCurrData] = useState({});
    const [overall, setOverall] = useState({});

    const dispatch = useDispatch();
    const comparisonState = useSelector((state) => state.comparison.comparisonState);

    const fetchComparisonData = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }
            
            const response = await axios.get(url + `/api/transactions/prev-comp?compare=${comparisonState}`);
            setPrevData(response.data.data.previousData.overall[0]);
            setCurrData(response.data.data.currentData.overall[0]);
            setOverall(response.data.data.overallPlusMinus);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchComparisonData();
    }, [comparisonState])


    console.log(prevData, currData, overall);

    return (
        <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} borderRadius={'5px'} width="95%" height="92%" color={"#36454F"} bgColor={"#F0F8FF"}>
            {/* heading */}
            <Flex width={"90%"} height={"7%"} justifyContent={"space-between"}>
                <Flex width={"40%"} height={"100%"} alignItems={"center"}>
                    <Heading fontSize={"1.6rem"} >COMPARISON TABLE</Heading>
                    <MdOutlineCompareArrows style={{ marginLeft: "10px" }} fontSize="3rem" />
                </Flex>
                <Flex width={"30%"} height={"100%"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontWeight={"bold"} fontSize={"1rem"} ml={2} cursor={"pointer"} onClick={() => { dispatch(comparisonActions.setComparisonState('year')) }} color={comparisonState === 'year' ? 'cornflowerblue' : '#36454F'}>YEAR</Text>
                    <Text fontWeight={"bold"} fontSize={"1.5rem"} ml={2}>/</Text>
                    <Text fontWeight={"bold"} fontSize={"1rem"} ml={2} cursor={"pointer"} onClick={() => { dispatch(comparisonActions.setComparisonState('month')) }} color={comparisonState === 'month' ? 'cornflowerblue' : '#36454F'}>MONTH</Text>
                    <Text fontWeight={"bold"} fontSize={"1.5rem"} ml={2}>/</Text>
                    <Text fontWeight={"bold"} fontSize={"1rem"} ml={2} cursor={"pointer"} onClick={() => { dispatch(comparisonActions.setComparisonState('week')) }} color={comparisonState === 'week' ? 'cornflowerblue' : '#36454F'}>WEEK</Text>
                </Flex>
            </Flex>
            <Divider />
            <Flex width={"90%"} height={"65%"}>

                {/* prev table */}
                <Flex width="50%" height="100%" alignItems={"center"}>
                    <TableContainer width={"95%"}>
                        <Table variant='striped' colorScheme='blue'>
                            <TableCaption>Last {comparisonState} results</TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td>Total Quantity Sold:</Td>
                                    <Td isNumeric>{prevData.totalQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Total Amount Generated:</Td>
                                    <Td isNumeric>{prevData.totalAmount}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Max Transaction Quantity:</Td>
                                    <Td isNumeric>{prevData.maxTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Min Transaction Quantity:</Td>
                                    <Td isNumeric>{prevData.minTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Max Transaction Amount:</Td>
                                    <Td isNumeric>{prevData.maxTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Min Transaction Amount:</Td>
                                    <Td isNumeric>{prevData.minTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Avg Transaction Quantity:</Td>
                                    <Td isNumeric>{prevData.avgTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Avg Transaction Amount:</Td>
                                    <Td isNumeric>{prevData.avgTransactionAmount}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>

                {/* curr table */}
                <Flex direction={"row-reverse"} width="50%" height="100%" alignItems={"center"}>
                    <TableContainer width={"95%"}>
                        <Table variant='striped' colorScheme='green'>
                            <TableCaption>Current {comparisonState} results</TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td>Total Quantity Sold:</Td>
                                    <Td isNumeric>{currData.totalQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Total Amount Generated:</Td>
                                    <Td isNumeric>{currData.totalAmount}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Max Transaction Quantity:</Td>
                                    <Td isNumeric>{currData.maxTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Min Transaction Quantity:</Td>
                                    <Td isNumeric>{currData.minTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Max Transaction Amount:</Td>
                                    <Td isNumeric>{currData.maxTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Min Transaction Amount:</Td>
                                    <Td isNumeric>{currData.minTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Avg Transaction Quantity:</Td>
                                    <Td isNumeric>{currData.avgTransactionQuantity}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Avg Transaction Amount:</Td>
                                    <Td isNumeric>{currData.avgTransactionAmount}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
            </Flex>
            <Divider />
            {/* overall content */}
            <Flex justifyContent={"space-evenly"} alignItems={"center"} direction={"column"} width={"100%"} height={"25%"}  >
                <Flex height={"23%"} width={"50%"} justifyContent={"space-around"} alignItems={"center"} >
                    <Flex width={"30%"} height={"100%"} alignItems={"center"}>
                        <Heading fontSize={"1.1rem"} fontWeight={"thin"}>Quantity Sold:</Heading>
                    </Flex>
                    <Flex width={"30%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={"1rem"}>{overall.quantitySold} %</Text>
                        {overall.quantitySold < 0 ? <FaArrowTrendDown style={{ marginLeft: "10px" }} size={"1.5rem"} color='#cf352e' /> : <FaArrowTrendUp style={{ marginLeft: "10px" }} size={"1.5rem"} color='#36B35F' />}
                    </Flex>
                </Flex>

                <Flex height={"23%"} width={"50%"} justifyContent={"space-around"} alignItems={"center"} >
                    <Flex width={"30%"} height={"100%"} alignItems={"center"}>
                        <Heading fontSize={"1.1rem"} fontWeight={"thin"}>Amount Generated:</Heading>
                    </Flex>
                    <Flex width={"30%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={"1rem"}>{overall.amountGenerated} %</Text>
                        {overall.amountGenerated < 0 ? <FaArrowTrendDown style={{ marginLeft: "10px" }} size={"1.5rem"} color='#cf352e' /> : <FaArrowTrendUp style={{ marginLeft: "10px" }} size={"1.5rem"} color='#36B35F' />}
                    </Flex>
                </Flex>

                <Flex height={"23%"} width={"50%"} justifyContent={"space-around"} alignItems={"center"} >
                    <Flex width={"30%"} height={"100%"} alignItems={"center"}>
                        <Heading fontSize={"1.1rem"} fontWeight={"thin"}>Avg Transaction Quantity:</Heading>
                    </Flex>
                    <Flex width={"30%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={"1rem"}>{overall.avgTransactionQuantity} %</Text>
                        {overall.avgTransactionQuantity < 0 ? <FaArrowTrendDown style={{ marginLeft: "10px" }} size={"1.5rem"} color='#cf352e' /> : <FaArrowTrendUp style={{ marginLeft: "10px" }} size={"1.5rem"} color='#36B35F' />}
                    </Flex>
                </Flex>

                <Flex height={"23%"} width={"50%"} justifyContent={"space-around"} alignItems={"center"}>
                    <Flex width={"30%"} height={"100%"} alignItems={"center"}>
                        <Heading fontSize={"1.1rem"} fontWeight={"thin"}>Avg. Transaction Amount:</Heading>
                    </Flex>
                    <Flex width={"30%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={"1rem"}>{overall.avgTransactionAmount} %</Text>
                        {overall.avgTransactionAmount < 0 ? <FaArrowTrendDown style={{ marginLeft: "10px" }} size={"1.5rem"} color='#cf352e' /> : <FaArrowTrendUp style={{ marginLeft: "10px" }} size={"1.5rem"} color='#36B35F' />}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );

}

export default Comparison;