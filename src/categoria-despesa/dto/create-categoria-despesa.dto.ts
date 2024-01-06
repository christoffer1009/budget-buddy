import { Despesa } from "@prisma/client"

export class CreateCategoriaDespesaDto {
    nome: string
    despesas: Despesa[]

}
