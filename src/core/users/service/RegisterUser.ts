import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

type Entry = {
    name: string,
    email: string,
    password: string
}

export default class RegisterUser implements UseCase<Entry, void> {
    constructor(private readonly repository: UserRepository) { };

    async executar(entry: Entry): Promise<void> {
        const { name, email, password } = entry;

        const userExists = await this.repository.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists");
        }

        await this.repository.create({
            name,
            email,
            password
        })

    }

}