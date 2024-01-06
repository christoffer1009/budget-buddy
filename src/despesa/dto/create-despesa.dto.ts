import { CategoriaDespesa, Usuario } from "@prisma/client"

export class CreateDespesaDto {
    valor: number
    data: string
    descricao: string
    usuario: Usuario
    usuarioId: number
    categoria: CategoriaDespesa
    categoriaId: number
}
