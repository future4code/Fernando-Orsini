import * as bcrypt from "bcryptjs";
import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

    createHash = (
        plainText: string
    ): string => {
        const rounds: number = Number(process.env.COST)
        const salt: string = genSaltSync(rounds)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (
        plainText: string,
        hash: string
    ): boolean => {
        return compareSync(plainText, hash)
    }
}

const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }