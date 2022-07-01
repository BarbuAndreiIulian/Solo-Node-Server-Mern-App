const getGoal = (req, res) => {
  res.status(200).json({ message: "Get Goal" });
};
const postGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add a text field");
  }

  res.status(200).json({ message: "Create Goal" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: "Update Goal" });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: "Delete Goal" });
};

module.exports = { getGoal, postGoal, updateGoal, deleteGoal };
