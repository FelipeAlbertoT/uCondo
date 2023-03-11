import { createContext, useReducer } from "react";
import chartAccounts from "../data/chartAccounts";

const ChartAccountContext  = createContext({})
const initialState = { chartAccounts }

const actions = {
    deleteChartAccount(state, id) {
        return {
            ...state,
            chartAccounts: state.chartAccounts.filter(item  => item.id !== id)
        };
    }, 
    createChartAccount(state, chartAccount) {
        const chartAccounts = state.chartAccounts.filter(acc => acc.id !== chartAccount.id)
        return {
            ...state,
            chartAccounts: [...chartAccounts, chartAccount]
        }
    }
}

export const ChartAccountProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action.payload) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ChartAccountContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ChartAccountContext.Provider>
    )
}

export default ChartAccountContext