import {
    AbsoluteCenter,
    Avatar,
    Box,
    Divider,
    Flex,
    Icon,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { BsFolder2 } from 'react-icons/bs';
import { RiFlashlightFill } from 'react-icons/ri';
import Comparison from '../comparision/Comparision';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarActions } from '../../store';
import Overview from '../overview/Overview';
import History from '../history/History';

export default function Home() {
    const sidebarState = useSelector((state) => state.sidebar.sidebarState);
    return (
        <Flex width={"100%"} height={"100%"}>
            <Box width={"10%"}>
                <SidebarContent sidebarState={sidebarState} />
            </Box>
            <Box width={"90%"} overflow={"scroll"}>
                {sidebarState === 0 && <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Overview />
                </Flex>}

                {sidebarState === 1 && <Flex direction={"column"} width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <Comparison />
                </Flex>}

                {sidebarState === 2 && <Flex width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                    <History />
                </Flex>}
            </Box>
        </Flex>
    );
}

const SidebarContent = ({ sidebarState }) => {

    const dispatch = useDispatch();

    return <Box
        w={{ base: '0', md: '0', lg: '100%' }}
        h="100vh"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('inherit', 'gray.700')}
        borderRightWidth="1px"
    >
        <VStack h="full" w="full" alignItems="flex-start" justifyContent="space-between">
            <Box w="full">
                <Flex px="4" py="5" align="center">
                    <Icon as={RiFlashlightFill} h={8} w={8} />
                    <Text
                        fontSize="2xl"
                        ml="2"
                        color={useColorModeValue('brand.500', 'white')}
                        fontWeight="semibold"
                    >
                        FRESH
                    </Text>
                </Flex>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="md"
                    color="gray.600"
                    aria-label="Main Navigation"
                    onClick={() => { dispatch(sidebarActions.setSidebarState(0)) }}
                >
                    <NavItem icon={AiOutlineHome}>Overview</NavItem>
                </Flex>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="md"
                    color="gray.600"
                    aria-label="Main Navigation"
                    onClick={() => { dispatch(sidebarActions.setSidebarState(1)) }}
                >
                    <NavItem icon={AiOutlineTeam}>Comparison</NavItem>
                </Flex>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="md"
                    color="gray.600"
                    aria-label="Main Navigation"
                    onClick={() => { dispatch(sidebarActions.setSidebarState(2)) }}
                >
                    <NavItem icon={BsFolder2}>History</NavItem>
                </Flex>
            </Box>

            <Flex px="4" py="5" mt={10} justifyContent="center" alignItems="center">
                <Avatar
                    size={'sm'}
                    name="Ahmad"
                    src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                />
            </Flex>
        </VStack>
    </Box>
};

const NavItem = (props) => {
    const color = useColorModeValue('gray.600', 'gray.300');

    const { icon, children } = props;
    return (
        <Flex
            align="center"
            px="4"
            py="3"
            cursor="pointer"
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            color={useColorModeValue('inherit', 'gray.400')}
            _hover={{
                bg: useColorModeValue('gray.100', 'gray.900'),
                color: useColorModeValue('gray.900', 'gray.200')
            }}
        >
            {icon && (
                <Icon
                    mx="2"
                    boxSize="4"
                    _groupHover={{
                        color: color
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};
