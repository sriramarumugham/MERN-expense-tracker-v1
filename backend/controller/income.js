const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, catogery, description, date } = req.body;
  const income = IncomeSchema({
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
    await income.save();

    res.status(200).json({
      message: "income added ",
    });
  } catch (err) {
    console.log("Error", err);
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

exports.deleteIncome=async(req , res)=>{
    try{
        const {id}=req.params;
        IncomeSchema.findByIdAndDelete(id).then((income)=>{
            return res.status(200).json({"message":"Income Deleted"});
        })
    }
    catch(err){
        console.log("err", err)
        return res.status(500).json({"message":"Internal Server Error"});

    }
}