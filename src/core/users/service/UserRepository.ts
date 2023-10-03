import User from "../model/User";

export default interface UserRepository {
    consultUsers(): Promise<User[]>;
    consultUserById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<User>;
}