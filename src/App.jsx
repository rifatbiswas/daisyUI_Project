import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expense, setExpense] = useState([
    {
      id: 1,
      category: "Utility",
      description: "House hold Expense",
      amount: 200,
    },
    {
      id: 2,
      category: "Utility",
      description: "House hold Expense",
      amount: 100,
    },
    {
      id: 3,
      category: "Gosaries",
      description: "House hold Expense",
      amount: 500,
    },
    {
      id: 4,
      category: "Gosaries",
      description: "House hold Expense",
      amount: 800,
    },
    {
      id: 5,
      category: "Utility",
      description: "House hold Expense",
      amount: 200,
    },
  ]);

  // State Mangement

  const deletitem = (id) => {
    setExpense(expense.filter((e) => e.id != id));
  };

  const [selectcategory, setSelectcategory] = useState("");

  const filtercategory = selectcategory
    ? expense.filter((e) => e.category === selectcategory)
    : expense;
  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto border border-gray-700 rounded-2xl p-5 mt-10 ">
        <ExpenseFilter

        />
        <ExpenseList expense={filtercategory} onDelete={deletitem} />
      </div>
    </>
  );
}

export default App;
