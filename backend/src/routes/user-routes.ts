import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controller.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignup);

export default userRoutes;

// curl http://localhost:8080/api/v1/user
// curl -X POST http://localhost:8080/api/v1/user/signup \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","email":"yuta@kusuno.com","password":"1234"}'
// curl -X PUT http://localhost:8080/api/v1/user/ \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","age":26}'
// curl -X DELETE http://localhost:8080/hello \
//      -H "Content-Type: application/json" \
//      -d '{"name":"Leo","age":26}'
