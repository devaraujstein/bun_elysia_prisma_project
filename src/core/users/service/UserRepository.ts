import User from "../model/User";

export default interface UserRepository {
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<User>;
}