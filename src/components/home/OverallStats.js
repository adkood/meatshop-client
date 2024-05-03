import React, { useEffect, useState } from 'react';
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Divider,
  AbsoluteCenter,
  Box
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoStatsChartOutline } from "react-icons/io5";
import axios from 'axios';

const QverallStats = () => {

  const [data, setData] = useState([]);

  const fetchOverallStats = async () => {
    try {

      let url = ``;
      if (process.env.NODE_ENV === 'development') {
        url += process.env.REACT_APP_API_KEY_DEV;
      }
      else {
        url += process.env.REACT_APP_API_KEY_PROD;
      }

      const response = await axios.get(url + '/api/transactions/get-overall-stats');

      let finalObj = response.data.data.aggResult[0].overall[0]
      let convertArr = [];

      for (let key in finalObj) {
        if (key !== '_id') {
          convertArr.push({
            title: key,
            value: finalObj[key],
            last: (key[key.length - 1] === 't') ? 'Rs.' : 'Kg.',
          })
        }
      }
      setData(convertArr);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchOverallStats();
  }, []);

  return (
    <Flex width={"100%"} direction={"column"} justifyContent={"center"} alignItems={"center"} mb={7}>
      <Box position='relative' p={10}  width={"100%"}>
        <Divider borderColor='cornflowerblue' />
        <AbsoluteCenter bg={"#F0F8FF"} color='cornflowerblue' fontSize={"1.2rem"} p='2'>
          OVERVIEW
        </AbsoluteCenter>
      </Box>
      <SimpleGrid width={"95%"} columns={{ base: 1, sm: 1, md: 1 }} spacing={2}>
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

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
            bg="cornflowerBlue"
            position="relative"
            w={10}
            h={10}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={IoStatsChartOutline} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <HStack spacing={2}>
              <Text ml={5} as="h3" fontSize="md" noOfLines={2} color="gray.600">
                {data.title}
              </Text>
              <Text ml={5} as="h2" color={"cornflowerblue"} fontSize="lg" fontWeight="bold">
                {data.value}
              </Text>
              <Text ml={5} as="h2" fontSize="lg" color="gray.600">
                {data.last}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default QverallStats;