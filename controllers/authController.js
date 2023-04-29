const database = require("../database");

const AWS = require("aws-sdk");
const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");
const config = require("../config");
const dotenv = require("dotenv");
dotenv.config();

const loginController = (req, res) => {
  console.log(database);
  res.json({
    status: "success",
    message: "login",
  });
};

const registerController = (req, res) => {
  res.json({
    status: "success",
    message: "register",
  });
};

const userController = async (req, res) => {
  const region = "us-east-1";
  const client = new DynamoDBClient({ region });
  const data = await client.send(new ListTablesCommand({}));
  console.log(data);

  res.send("das");

  //   const name = req.params["name"];
  //   const user = database.find((user) => user.name === name);
  //   if (user) {
  //     return res.json({
  //       status: "success",
  //       data: user,
  //     });
  //   } else {
  //     return res.json({
  //       status: "error",
  //       message: "user not found",
  //     });
  //   }
};

module.exports = { loginController, registerController, userController };
