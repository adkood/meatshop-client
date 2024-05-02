import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialOutletState = {
    quantityOutletState: "",
    quantityMeatState: "",
    quantityYearState: "",
    valueOutletState: '',
    valueMeatState: "",
    valueYearState: "",
    refillOutletState: "",
    refillMeatState: "",
    refillYearState: "",
    quantityOverall: {},
    valueOverall: {},
    demandedMeat: [],
}

const outletSlice = createSlice({
    name: "outlet",
    initialState: initialOutletState,
    reducers: {
        setQuantityOutletState(state, action) {
            state.quantityOutletState = action.payload;
        },
        setValueOutletState(state, action) {
            state.valueOutletState = action.payload;
        },
        setRefillOutletState(state, action) {
            state.refillOutletState = action.payload;
        },
        setQuantityMeatState(state, action) {
            state.quantityMeatState = action.payload;
        },
        setQuantityYearState(state, action) {
            state.quantityYearState = action.payload;
        },
        setRefillMeatState(state, action) {
            state.refillMeatState = action.payload;
        },
        setRefillYearState(state, action) {
            state.refillYearState = action.payload;
        },
        setValueMeatState(state, action) {
            state.valueMeatState = action.payload;
        },
        setValueYearState(state, action) {
            state.valueYearState = action.payload;
        },
        setQuantityOverall(state, action) {
            state.quantityOverall = action.payload;
        },
        setValueOverall(state, action) {
            state.valueOverall = action.payload;
        },
        setDemandedMeat(state, action) {
            state.demandedMeat = action.payload;
        }
    }
});

const initialComparisonState = {
    comparisonState: "year"
}

const comparisonSlice = createSlice({
    name: "comparison",
    initialState: initialComparisonState,
    reducers: {
        setComparisonState(state, action) {
            state.comparisonState = action.payload;
        }
    }
});

const initialSidebarState = {
    sidebarState: 0
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialSidebarState,
    reducers: {
        setSidebarState(state, action) {
            state.sidebarState = action.payload;
        }
    }
});

const initialHistoryState = {
    transactionSelected: true,
    refillSelected: false,
    outletState: null,
    meatState: null,
    yearState: null,
}

const historySlice = createSlice({
    name: "history",
    initialState: initialHistoryState,
    reducers: {
        toggleTransactionState(state) {
            state.transactionSelected = !state.transactionSelected;
            state.refillSelected = !state.refillSelected;
        },
        setOutletState(state, action) {
            state.outletState = action.payload;
        },
        setMeatState(state, action) {
            state.meatState = action.payload;
        },
        setYearState(state, action) {
            state.yearState = action.payload;
        }
    }
});

const initialPaginationState = {
    transactionCurrentPage: 1,
    refillCurrentPage: 1,
    pageLimit: 1,
}

const paginationSlice = createSlice({
    name: "page",
    initialState: initialPaginationState,
    reducers: {
        incrementTransactionCurrentPage(state) {
            if (state.transactionCurrentPage < state.pageLimit)
                state.transactionCurrentPage = state.transactionCurrentPage + 1;
        },
        decrementTransactionCurrentPage(state) {
            if (state.transactionCurrentPage > 1)
                state.transactionCurrentPage = state.transactionCurrentPage - 1;
        },
        incrementRefillCurrentPage(state) {
            if (state.refillCurrentPage < state.pageLimit)
                state.refillCurrentPage = state.refillCurrentPage + 1;
        },
        decrementRefillCurrentPage(state) {
            if (state.refillCurrentPage > 1)
                state.refillCurrentPage = state.refillCurrentPage - 1;
        },
        setPageLimit(state, actions) {
            state.pageLimit = actions.payload;
        },
        setTransactionCurrentPage(state, actions) {
            state.transactionCurrentPage = actions.payload;
        },
        setRefillCurrentPage(state, actions) {
            state.refillCurrentPage = actions.payload;
        }
    }
});

// const initialLoginState = {
//     isLogin: false,
// }

// const loginSlice = createSlice({
//     name: 'login',
//     initialState: initialLoginState,
//     reducers: {
//         setLogin(state) {
//             state.isLogin = !state.isLogin;
//         }
//     }
// })

// const initialModalState = {
//     loginModal: false,
// }

// const modalSlice = createSlice({
//     name: 'modal',
//     initialState: initialModalState,
//     reducers: {
//         loginModalToggle(state, action) {
//             state.loginModal = action.payload;
//         }
//     }
// })

export const outletActions = outletSlice.actions;
export const comparisonActions = comparisonSlice.actions;
export const sidebarActions = sidebarSlice.actions;
export const historyActions = historySlice.actions;
export const pageActions = paginationSlice.actions;
// export const loginActions = loginSlice.actions;
// export const modalActions = modalSlice.actions;

const store = configureStore({
    reducer: {
        outlet: outletSlice.reducer,
        comparison: comparisonSlice.reducer,
        sidebar: sidebarSlice.reducer,
        history: historySlice.reducer,
        page: paginationSlice.reducer,
        // login: loginSlice.reducer,
        // modal: modalSlice.reducer,
    }
})

export default store;