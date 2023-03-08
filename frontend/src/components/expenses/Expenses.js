import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Context";
import IncomeItem from "../incomeitem/IncomeItem";
import ExpenseForm from "./ExpenseForm";

function Expenses() {
  const { addExpense, getExpenses, expenses, deleteExpense, totalExpense } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Expense</h1>
        <h2 className="total-income">
          Total Expenses: <span>${totalExpense()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container"><ExpenseForm /></div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, catogery, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  catogery={catogery}
                  indicatorColor="var(--color-red)"
                  deleteItem={deleteExpense}
                />
              );
            })}
            {console.log(expenses)}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}
const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Expenses;
