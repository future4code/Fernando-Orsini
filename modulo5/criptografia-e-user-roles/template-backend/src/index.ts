import app from "./app"
import editUser from "../endpoints/editUser"
import createUser from '../endpoints/createUser'
import login from "../endpoints/login"
import { HashManager } from "./services/HashManager"



app.put('/users', editUser)


// const cypherText = new HashManager().createHash("laranja")
// const cypherText1 = new HashManager().createHash("laranja")

// console.log("cypherText", cypherText)
// console.log("cypherText1", cypherText1)

// hashFinal -> $2a$12$E6E.p/fSpfHVIt/bjTtdjOg8wiCQC3qxr43uElYtdBkL1.lflE..S
// string aleatória -> E6E.p/fSpfHVIt/bjTtdjO
// algoritmo -> $2a$
// cost -> 12$
// salt -> $2a$12$E6E.p/fSpfHVIt/bjTtdjO
// codigo encriptado -> g8wiCQC3qxr43uElYtdBkL1.lflE..S

// hashFinal do mesmo valor inicial -> $2a$12$bCb5ZZ4eUZfFMsDH1W6kvu3B1GHoYfu/H8b68NsWPHClF8WBdPpyS

// Comparação
// const passwordIsCorrect = new HashManager().compareHash("acerola", "$2a$12$bCb5ZZ4eUZfFMsDH1W6kvu3B1GHoYfu/H8b68NsWPHClF8WBdPpyS")
// console.log("isTrue", passwordIsCorrect)
app.post("/users/signup", async (req: Request, res: Response) => {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };
  
      const id = generateId();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword, userData.role);
  
      const token = generateToken({
        id,
        role: userData.role,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post("/users/login", async (req: Request, res: Response) => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const user = await getUserByEmail(userData.email);
  
      const compareResult = await compare(
        userData.password,
        user.password
      );
  
      if (!compareResult) {
        throw new Error("Invalid password");
      }
  
      const token = generateToken({
        id: user.id,
        role: user.role,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getData(token);
  
      if (authenticationData.role !== "normal") {
        throw new Error("Only a normal user can access this funcionality");
      }
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });