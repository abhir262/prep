import React,{useContext} from "react";
import{TiDelete} from 'react-icons/ti'
import { AppContext } from "../Context/AppContext";
const bgstyle={backgroundColor:"#fafafa"}
const ExpenseItem=(props)=>{
    const {dispatch}= useContext(AppContext);
    const handleDeleteExpense=()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id,
        })
    }
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge  bg-primary mr-3 ' style={bgstyle}>
					Rs{props.cost}
				</span>
				<TiDelete size='1.5em' onClick={ handleDeleteExpense}></TiDelete>
			</div>
		</li>
        // <li className="list-group-item d-flex justify-content-between align-items-center">
        //     {props.name}
        //     <div>
        //     <span className='badge badge-primary badge-pill mr-3'>
        //             {props.cost}
                   
        //         </span>
        //         <TiDelete size='1.5em'></TiDelete> 
        //     </div>
        // </li>
    );
};
export default ExpenseItem;