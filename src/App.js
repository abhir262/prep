import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./Context/AppContext";
const App=()=>{
return(
   <AppProvider>
  <div className="container">
  <h1 className="mt-3"> MY expense</h1>
    <div className="row mt-3">
       <div className="col-sm">
         <Budget></Budget>
       </div>
       <div className="col-sm">
         <Remaining></Remaining>
       </div>
       <div className="col-sm">
         <ExpenseTotal></ExpenseTotal>
       </div>
       <h3 className="mt-3">Expenses</h3>
       <div className="row mt-3">
         <div className="col-sm">
            <ExpenseList></ExpenseList>
             </div>
        
       </div>
       <h3 className="mt-3">Add Expense</h3>
       <div className="mt-3">
         <div className="col-sm">
           <AddExpenseForm></AddExpenseForm>
         </div>
       </div>
    </div>
</div>
    
   </AppProvider>

  
)
}
export default App