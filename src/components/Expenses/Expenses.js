import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const saveSelecedYearHandler = (expensesYear) => {
    setSelectedYear(expensesYear);
    console.log("expenses", expensesYear);
  };
  const expenses = props.items;
  const filterExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );
  console.log("filter", filterExpenses);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSelectedYear={saveSelecedYearHandler}
      />
      <ExpensesList filteredItems={filterExpenses} year={selectedYear} allItems={expenses}  />
    </Card>
  );
};

export default Expenses;
