import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async findUserByEmail(): User {
        try {
            const user = await BaseDataBase.connection("lbn_user")
            .select("*")
            .where({ email });

            return User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
                )
        }
    }
}