import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../store';

const PaginationContainer = ({ type }) => {
    return (
        <Flex
            d="flex"
            w="100%"
            alignItems="center"
            p={{ base: 2, sm: 3 }}
        >
            <Pagination type={type} />
        </Flex>
    );
};

const Pagination = ({ type }) => {

    const dispatch = useDispatch();
    let rp = useSelector((state) => state.page.refillCurrentPage);
    let tp = useSelector((state) => state.page.transactionCurrentPage);
    let currentPage;
    let decrementCurrentPage;
    let incrementCurrentPage;
    let setCurrentPage;

    if (type === 'r') {
        currentPage = rp;
        decrementCurrentPage = pageActions.decrementRefillCurrentPage;
        incrementCurrentPage = pageActions.incrementRefillCurrentPage;
        setCurrentPage = pageActions.setRefillCurrentPage;
    }
    else {
        currentPage = tp;
        decrementCurrentPage = pageActions.decrementTransactionCurrentPage;
        incrementCurrentPage = pageActions.incrementTransactionCurrentPage;
        setCurrentPage = pageActions.setTransactionCurrentPage;
    }
    const pageLimit = useSelector((state) => state.page.pageLimit);
    console.log(new Array(3).fill(0));
    return (
        <Flex
            as="nav"
            aria-label="Pagination"
            w="full"
            justifyContent="center"
            alignItems="center"
            mt={{ base: 3, md: 0 }}
        >
            <PaginationButton onClickFn={() => { dispatch(decrementCurrentPage()) }} borderTopLeftRadius="md" borderBottomLeftRadius="md">
                Previous
            </PaginationButton>
            {new Array(pageLimit).fill(0).map((val, i) => {
                return <PaginationButton key={i} onClickFn={() => { dispatch(setCurrentPage(i + 1)) }} isActive={currentPage === (i + 1) ? true : false} borderTopLeftRadius="md" borderBottomLeftRadius="md">{i + 1}</PaginationButton>
            })}
            <PaginationButton onClickFn={() => { dispatch(incrementCurrentPage()) }} borderTopRightRadius="md" borderBottomRightRadius="md">
                Next
            </PaginationButton>
        </Flex>
    );
};

const PaginationButton = ({ onClickFn, children, isDisabled, isActive, ...props }) => {
    const activeStyle = {
        bg: useColorModeValue('gray.300', 'gray.700')
    };

    return (
        <Flex
            onClick={onClickFn}
            p={3}
            px={4}
            fontSize="md"
            fontWeight="500"
            lineHeight={0.8}
            opacity={isDisabled && 0.7}
            _hover={!isDisabled && activeStyle}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            border="1px solid"
            mr="-1px"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            {...(isActive && activeStyle)}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default PaginationContainer;