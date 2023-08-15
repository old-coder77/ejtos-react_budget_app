import React, { useContext } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red"  onClick={handleDeleteExpense}>-</FaMinusCircle></td>
        </tr>
    );
};
export default ExpenseItem;
