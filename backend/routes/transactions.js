const router = require("express").Router();

const incomeController = require("../controller/income");
const expenseController=require('../controller/expense');

router
  .post("/add-income", incomeController.addIncome)
  .get("/get-incomes", incomeController.getIncomes)
  .delete("/delete-income/:id", incomeController.deleteIncome)
  .get('/get-expenses' , expenseController.getExpense)
  .post('/add-expense' , expenseController.addExpense)
  .delete('/delete-expense/:id' , expenseController.deleteExpense);

module.exports = router;
