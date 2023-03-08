const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, catogery, description, date } = req.body;
  const expense = ExpenseSchema({
    title,
      amount,
    catogery,
    description,
    date,
  });

  try {
    //validating
    if (!title || !catogery || !amount || !description || !date) {
      return res.status(400).json({ message: "All fields are required " });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "All fields are required " });
    }
    await expense.save();

    res.status(200).json({
      message: "expense added ",
    });
  } catch (err) {
    console.log("Error", err);
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

exports.deleteExpense=async(req , res)=>{
    try{
        const {id}=req.params;
        ExpenseSchema.findByIdAndDelete(id).then((income)=>{
            return res.status(200).json({"message":"Expense Deleted"});
        })
    }
    catch(err){
        console.log("err", err)
        return res.status(500).json({"message":"Internal Server Error"});

    }
}