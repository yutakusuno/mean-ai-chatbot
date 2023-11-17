import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userLogout,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;

// curl http://localhost:8080/api/v1/user
// curl -X POST http://localhost:8080/api/v1/user/signup \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","email":"yuta3@kusuno.com","password":"123456"}'
// curl -X POST http://localhost:8080/api/v1/user/login \
//      -H "Content-Type: application/json" \
//      -d '{"email":"yuta3@kusuno.com","password":"123456"}'
// curl -X PUT http://localhost:8080/api/v1/user/ \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","age":26}'
// curl -X DELETE http://localhost:8080/hello \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","age":26}'
