import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as expressSession from "express-session";
import * as helmet from "helmet";
import * as hpp from "hpp";
import * as morgan from "morgan";
import * as passport from "passport";

const app = express();
const prod: boolean = process.env.NODE_ENV === "production";

dotenv.config();
if (prod) {
  app.use(hpp()); // Express middleware to protect against HTTP Parameter Pollution attacks
  app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
  app.use(morgan("combined"));
  app.use(
    cors({
      origin: /nodebird\.com$/,
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? ".nodebird.com" : undefined,
    },
    name: "rnbck",
  })
);

app.set("port", prod ? process.env.PORT : 3065);
app.get("/", (req, res, next) => {
  res.send("react nodebird 백엔드 정상 작동");
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
});

// npm i morgan cors cookie-parser express-session dotenv passport
