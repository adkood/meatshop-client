import { Flex, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
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
        <Flex width="100%" height="100%" direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} mb={"65px"}>
            <Heading fontSize={"1.3rem"} fontWeight={"thin"} color={"cornflowerblue"}>ITEMS AVAILABLE</Heading>
            {
                meatlist.map((ele, i) => {
                    return <Flex key={i} justifyContent={"space-between"} alignItems={"center"} color="cornflowerblue" width="90%" height="45px" border="1px solid" rounded="md" mb={1}>
                        <Text ml={"50px"}>{ele.meatType}</Text>
                        <Text >@</Text>                        
                        <Text mr={"50px"}>{ele.pricePerKg} Rs/Kg</Text>                        
                    </Flex>
                })
            }
        </Flex>
    );
}

export default Meatlist;