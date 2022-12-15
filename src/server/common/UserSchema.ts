import { z } from "zod";

export const UserCreateSchema = z.object({
  username: z.string({
    invalid_type_error: "Apenas para lembrar que da para mexer com erro",
  }),
  password: z.string(),
  telefone: z.string(),
  nome: z.string().nullish(),
  cpf: z.string().nullish(),
  email: z.string(),
  setor: z.string().nullish(),
  cargo: z.string().nullish(),
});
