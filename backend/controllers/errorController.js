module.exports = (err, req, res, next) => {
  res.status(500).send("An unknown error occurred.");
  console.log("congrats you hit the error middleware");
};
