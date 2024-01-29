import express from "express";
import {sendError, sendSuccess} from "./response";
import cors from "cors";
import {config} from "dotenv";
import {sendNotification, sendNotificationc} from "./script";
import path from "path";
config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/preview", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.info("Get / hello success");
  res.send(`

  <!DOCTYPE html>
<html>

<head>
    <title>Welcome to GMB Scrapper APIs</title>
</head>

<body style="background-color: #f0f0f0; text-align: center; font-family: Arial, sans-serif;">
    <h1>Plug  APIs</h1>

</body>
</html>
`);
});
app.set("json spaces", 4);
app.get("/send", async (req, res) => {
  try {
    const result = await sendNotificationc("New Withdral of 5000 Naira");
    sendSuccess(res, result, "Successfully");
  } catch (error) {
    sendError(res, error, "UnSuccessfully");
  }
});


app.use((_req, res) => {
  sendError(res, {error: "Route not found"}, "Route not found", 404);
});

export {app};


