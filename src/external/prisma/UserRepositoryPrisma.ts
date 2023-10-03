import { PrismaClient } from "@prisma/client";
import User from "../../core/users/model/User";
import UserRepository from "../../core/users/service/UserRepository";

export default class UserRepositoryPrisma implements UserRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async consultUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    consultUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        });
    }
    create(user: User): Promise<User> {
        return this.prisma.user.create({ data: user });
    }

}