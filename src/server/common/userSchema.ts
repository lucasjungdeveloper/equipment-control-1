import { z } from "zod";
// username: z.string({
//   description: "Apenas para lembrar que da para mexer com erro",
// }),
export const userSchema = z.object({
  username: z.string({
    invalid_type_error: "Apenas para lembrar que da para mexer com erro",
  }),
  password: z.string(),
  telefone: z.string(),
  nome: z.string().nullable(),
  cpf: z.string().nullable(),
  email: z.string(),
  setor: z.string().nullable(),
  cargo: z.string().nullable(),
  profilePicture: z.string(),
  auth: z.string().nullable(),
  email_confirmed_at: z.date().nullable(),
  invited_at: z.date().nullable(),
  reauthenticated_at: z.date().nullable(),
  last_login_at: z.date().nullable(),
  reauthentication_sent_at: z.date().nullable(),
  reauthentication_token: z.string().nullable(),
  phone_change_at: z.date().nullable(),
  confirmation_token: z.string().nullable(),
  is_super_admin: z.boolean(),
});
