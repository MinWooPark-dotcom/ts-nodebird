import { Model, DataTypes } from "sequelize";
import { dbType } from "./index"; // index에서 가져오고, 또 index는 user로부터 무언가 import해서 순환 참조가 발생하지만 타입핑 같은 걸 순환 참조하는 것은 에러 발생 안함, 실제 런타임에서 실행되는 코드는 에러 남)
import { sequelize } from "./sequelize";

class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};

export default User;
