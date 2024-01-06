import { Despesa } from "@prisma/client"

export class CreateUsuarioDto {
    nome: string
    email: string
    senha: string
    despesas: Despesa[]
}
