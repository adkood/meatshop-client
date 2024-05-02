import { Flex, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";

const Demands = () => {
    const demandedMeat = useSelector((state) => state.outlet.demandedMeat);
    return (
        <Flex width="100%" height="90%" direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} mb={3}>
            <Heading fontSize={"1.3rem"} fontWeight={"thin"} color={"cornflowerblue"}>TOP 3 BY DEMAND</Heading>
            {
                demandedMeat.map((ele, i) => {
                    return <Flex key={i} alignItems={"center"} color={"white"} bgColor={"cornflowerblue"} width="90%" height="45px" border="1px solid" rounded="md">
                        <Text ml={10}><FaHeart size={"1.3rem"}  /></Text>
                        <Text ml={10}>{ele.meatType}</Text>
                    </Flex>
                })
            }
        </Flex>
    );
}

export default Demands;