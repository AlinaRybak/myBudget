import './App.css';
import InputBudget from './components/inputBudget/InputBudget';

function App() {
  return (
    <div className="container background-color"> 
      <h2 className="text-white budget-style text-center pt-2">BUDGET APP</h2>
      <InputBudget/>
    </div>
  );
}

export default App;
