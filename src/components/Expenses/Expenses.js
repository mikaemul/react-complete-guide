import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const saveSelecedYearHandler = (expensesYear) => {
    setSelectedYear(expensesYear);
    console.log("expenses", expensesYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSelectedYear={saveSelecedYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
