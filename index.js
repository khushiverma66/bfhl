const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { array } = req.body;
  const status = "Success";
  const userId = 1;
  const emailId = "user@example.com";
  const collegeRollNumber = "123456";

  const evenNumbers = array.filter((num) => num % 2 === 0);
  const oddNumbers = array.filter((num) => num % 2 !== 0);
  const alphabets = array
    .filter((char) => typeof char === "string")
    .map((char) => char.toUpperCase());

  res.json({
    status,
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers,
    alphabets,
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
