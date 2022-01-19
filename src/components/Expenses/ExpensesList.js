import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if ((props.filteredItems.length === 0) & (props.year !== "all")) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>;
  }
  let expensesContent;
  if ((props.filteredItems.length > 0) & (props.year !== "all")) {
    expensesContent = props.filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  } else if ((props.year === "all") & (props.allItems.length > 0)) {
    expensesContent = props.allItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;

/*  let expensesContent = <p>No expenses found.</p>;
    if ((props.filteredItems.length > 0) & (props.year !== "all")) {
    expensesContent = props.filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  } else if ((props.year === "all") & (props.allItems.length > 0)) {
    expensesContent = props.allItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  } */
