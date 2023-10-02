import { Elysia } from "elysia";
import UserRepositoryMemory from "./external/memory/UserRepositoryMemory";
import RegisterUser from "./core/users/service/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";

const app = new Elysia();

// ---- Registry Routes ----

const userRepository = new UserRepositoryMemory();
const registerUser = new RegisterUser(userRepository);
new RegisterUserController(app, registerUser);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
