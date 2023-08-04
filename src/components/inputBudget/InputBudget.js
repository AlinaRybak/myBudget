import React, { useState } from "react";
import "./App.css";
import InputExpense from '../inputExpense/InputExpense';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMoneyBill1Wave, faCreditCard, faDollarSign } from '@fortawesome/free-solid-svg-icons'; 

function InputBudget(){

    const [inputValue, setInputValue] = useState('');
    const [budgetValue, setBudgetValue] = useState(0);
    const [extensesValue, setExtensesValue] = useState([]);
        

    const handleInputChange = e => {
      setInputValue(e.target.value);
    };

    const handleCalculateClick = () => {
      const parsedInputValue = parseFloat(inputValue);
      if (!isNaN(parsedInputValue)) {
        setBudgetValue(parsedInputValue);
      }
    };

    const totalExpenses = extensesValue.reduce((total, expense) => total + parseFloat(expense.amount), 0);


    return <>
    <div className="d-flex justify-content-around">
      <div class="border border-success mr-auto p-2 w-25">
        <h4 className="text-white mb-3 text-center mt-2">Please Enter Your Budget</h4>
        <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        </div>
        <input type="text" class="form-control mt-3" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value = {inputValue} onChange={handleInputChange}/>
        </div>
        <button type="button" class="btn btn-outline-success mt-3 mb-3" onClick={handleCalculateClick}>Calcuate</button>
    </div>
    <div className="p-2 text-center">
          <h4 className="text-white">BUDGET</h4>
          <div> <FontAwesomeIcon icon={faMoneyBill1Wave} className="display-6"/></div>
          <div className="text-success text-size mt-3"><FontAwesomeIcon icon={faDollarSign} style={{color: "#42a95b",}}/> {budgetValue}</div>
        </div>
        <div className="p-2 text-center">
          <h4 className="text-white">EXPENSES</h4>
          <div><FontAwesomeIcon icon={faCreditCard} className="display-6"/></div>
          <div className="text-danger text-size mt-3"><FontAwesomeIcon icon={faDollarSign} style={{color: "#e24612",}}/> {totalExpenses}</div>
        </div>
        <div className="p-2 text-center">
          <h4 className="text-white">BALANCE</h4>
          <div> <FontAwesomeIcon icon={faDollarSign} className="display-6"/></div>
          <div className="text-size mt-3"><FontAwesomeIcon icon={faDollarSign} style={{color: "#050505",}}/> {budgetValue-totalExpenses}</div>
        </div>
        </div>
        <InputExpense setExtensesValue = {setExtensesValue}/>
        </>;
}

export default InputBudget;
