import Elysia from "elysia";
import ConsultUserById from "../core/users/service/ConsultUserById";

export default class ConsultUserByIdController {
    constructor(
        readonly server: Elysia,
        readonly useCase: ConsultUserById
    ) {
        server.get('/users/:id', async ({params}) => {
            const { id } = params;
            return await useCase.executar(Number(id));
        })
    }
}