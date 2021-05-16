import * as express from "express";

const app = express();
const prod = process.env.NODE_ENV === "production";

app.get("/", (req, res) => {
  res.send("react nodebird 백엔드 정상 작동");
});

app.listen(prod ? process.env.PORT : 3065, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
