import React from 'react';
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Icon,
  SimpleGrid,
  Container,
  Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const AmountStat = () => {

  const valueOverall = useSelector((state) => state.outlet.valueOverall);

  let data = [];

  for (let key in valueOverall) {
    if (key !== '_id' && key[key.length - 1] !== 'y') {
      data.push({
        title: key,
        value: valueOverall[key],
        last: 'Rs.',
      })
    }
  }

  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={5} mb={4}>
        {data.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
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
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack py={2} px={2} spacing={4} bg={useColorModeValue('gray.100', 'gray.800')} w="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="cornflowerblue"
            position="relative"
            w={10}
            h={10}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={FaIndianRupeeSign} w={4} h={4} color="white" />
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

export default AmountStat;