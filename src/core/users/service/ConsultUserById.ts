import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

export default class ConsultUserById implements UseCase<number, User | null>{
    constructor(private readonly repository: UserRepository) { }

    executar(id: number): Promise<User | null> {
        return this.repository.consultUserById(id);
    }

}