import User, { associate as associateUser } from "./user";

export * from "./sequelize";
// 모델들 담아둠
const db = {
  User,
};
export type dbType = typeof db; // 각 모델로 export

associateUser(db);
