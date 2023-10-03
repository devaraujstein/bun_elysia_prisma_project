import Elysia from "elysia";
import ConsultUsers from "../core/users/service/ConsultUsers";

export default class ConsultUsersController {
    constructor(
        readonly server: Elysia,
        readonly useCase: ConsultUsers
    ) {
        server.get('/users', async () => {
            return await useCase.executar();
        })
    }
}