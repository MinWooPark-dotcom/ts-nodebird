import * as dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string;
};
// interface 이름 'I' 붙이는 게 interface가 앞에 있으니 중복의 느낌이 있지만 타입스크립트의 컨벤션이라 따르기도 함. 개인의 코딩 스타일임.
interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: IConfigGroup = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

export default config;
