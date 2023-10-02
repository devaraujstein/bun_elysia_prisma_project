import User from "../../core/users/model/User";
import UserRepository from "../../core/users/service/UserRepository";

export default class UserRepositoryMemory implements UserRepository {

    private readonly users: User[] = [];

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) ?? null;
    }

    async create(user: User): Promise<User> {
        const newUser = {
            ...user,
            id: Math.random()
        }
        this.users.push(newUser);
        return newUser;
    }

}