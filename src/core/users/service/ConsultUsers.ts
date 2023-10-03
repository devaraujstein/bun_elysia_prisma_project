import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

export default class ConsultUsers implements UseCase<void, User[]>{
    constructor(private readonly repository: UserRepository) { }

    executar(): Promise<User[]> {
        return this.repository.consultUsers();
    }

}