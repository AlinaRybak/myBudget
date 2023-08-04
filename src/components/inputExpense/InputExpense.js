import React, {useState} from "react";
import "./App.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'; 

function InputExpense({setExtensesValue}){

    const [extenseValue, setExtenseValue] = useState('');
    const [extenses, setExtenses] = useState([]);
    const [amountValue, setAmountValue] = useState('');
    const [amounts, setAmounts] = useState([]);
    const [showIcons, setShowIcons] = useState([]);

    const handleInputExtense = e => {
      setExtenseValue(e.target.value);
    };
 
    const handleExtenseTitle = () => {
      if(extenseValue.trim() !== ''){
        setExtenses([...extenses, extenseValue]);
        setExtenseValue('');
      };
    };  

    const handleInputAmount = e => {
      setAmountValue(e.target.value);
    };

    const handleExtenseAmount = () => {
        if(amountValue.trim() !== ''){
          setAmounts([...amounts, amountValue]);
          setAmountValue('');
        };
    };

    const handleAddExtense = () => {
      handleExtenseTitle();
      handleExtenseAmount();
      setShowIcons([...showIcons, true]);
      setExtensesValue(prevExtensesValue => [
        ...prevExtensesValue,
        { extense: extenseValue, amount: amountValue }
      ]);
    };

    const handleDeleteExpense = (index) => {
      const updateExtense = (extenses.filter)((_, i) => (i !== index));
      const updateAmount = (amounts.filter)((_, i) => (i !== index));
      const updatedShowIcons = showIcons.filter((_, i) => i !== index);

      setExtenses(updateExtense);
      setAmounts(updateAmount);
      setShowIcons(updatedShowIcons);
    }

    return <div className="container mt-3">
          <div className="d-flex justify-content-around">
            <div className="border border-danger mr-auto p-2 w-25">
              <h4 className="text-white mb-2 text-center mt-2">Enter Your Expense</h4>
              <div className="input-group input-group-lg">
                <input type="text" className="form-control mt-3" aria-label="Large" aria-describedby="inputGroup-sizing-sm"  value = {extenseValue} onChange = {handleInputExtense}/>
              </div>
              <h4 className="text-white mb-2 mt-2 text-center">Enter Expense Amount</h4>
              <div className="input-group input-group-lg">
                <input type="text" className="form-control mt-2" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value = {amountValue} onChange =  {handleInputAmount}/>
              </div>
              <button type="button" className="btn btn-outline-danger mt-3 mb-3" onClick={handleAddExtense}>Add Expense</button>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-white">Expense Title</h5>
              {extenses.map((extense,index) =>(<p className="text-danger mt-3" key={index}>- {extense}</p>))}
            </div>
            <div className="p-2 text-center">
              <h5 className="text-white">Expense Value</h5>
              {amounts.map((amount, index) =>(<p className="text-danger mt-3" key={index}>{amount}</p>))}
            </div>
            <div className="p-2 text-center">
              <h5 className="text-white">Delete</h5>
              {showIcons.map((show,index)=>show && (
                  <div className="mt-3" key={index}>
                  <FontAwesomeIcon icon={faTrashCan} style={{color: "#e24612", cursor: "pointer"}}
                  onClick={() => handleDeleteExpense(index)}/>
                </div>
              ))}
            </div>
          </div>
        </div>      
}
export default InputExpense;