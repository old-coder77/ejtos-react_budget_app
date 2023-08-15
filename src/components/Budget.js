import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget,dispatch} = useContext(AppContext);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                        type='number'
                        id='budget'
                        value={budget}
                        step='10'
                        onChange={(event) => dispatch({
                            type: 'SET_BUDGET',
                            payload: event.target.value,
                        })}>
                        </input></span>
        </div>
    );
};
export default Budget;
