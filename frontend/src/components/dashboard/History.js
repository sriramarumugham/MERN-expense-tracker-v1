import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/Context";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent Transactions</h2>
      {history.map((items) => {
        const { id, title, amount, type } = items;
        return (
          <div className="history-item" key={id}>
            <p
              key={id}
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>

            <p
              key={id}
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type == "expense"
                ? `-${amount < 0 ? 0 : amount}`
                : `+${amount < 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
