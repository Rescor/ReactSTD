import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {title: "Meow~", amount: 49406, date: new Date(2022, 10, 11)},
        {title: "Meow~", amount: 1642, date: new Date(2022, 10, 11)},
        {title: "Meow~", amount: 9000, date: new Date(2022, 10, 11)},
        {title: "Meow~", amount: 1285, date: new Date(2022, 10, 11)},
    ]
  return (
      <div>
          <Expenses data={expenses} />
      </div>

  );
}

export default App;
