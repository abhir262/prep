import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Remaining=()=>{
  const {expenses, budget }= useContext(AppContext);
  const totalExpenses= expenses.reduce((total,item)=>{
    return (total= total+item.cost)
  },0)
    return(
      <div className="alert alert-success">
          <span>Remaining:Rs {budget- totalExpenses}</span>
      </div>  
    )
}
export default Remaining;