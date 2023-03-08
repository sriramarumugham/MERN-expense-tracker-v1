import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Context";
import IncomeItem from "../incomeitem/IncomeItem";

function Transactions() {
  const { transactionHistory, deleteIncome, deleteExpense } =
    useGlobalContext();
  const history = transactionHistory();

  return (
    <div>
      <InnerLayout>
        {history.map((transaction) => {
           const { _id, title, amount, date, catogery, description, type } =
           transaction;
          return <IncomeItem
          deleteItem={ type==="income"? deleteIncome: deleteExpense  }
          type={type}
          indicatorColor={ type=== "income"? "green" : "var(--color-red)" }
          description={description}
          catogery={catogery}
          id={_id}
          title={title}
          amount={amount}
          date={date}
          key={_id}
        />
      
      })}
      </InnerLayout>
    </div>
  );
}

export default Transactions;
