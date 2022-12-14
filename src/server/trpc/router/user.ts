import { publicProcedure, router } from "../trpc";

import { UserSchema } from "../../common/UserSchema";
import { z } from "zod";

export const userRouter = router({
  // create seria uma funcionalidade de criar os usuários
  create: publicProcedure.input(UserSchema).mutation(async ({ input, ctx }) => {
    try {
      const user = await ctx.prisma.users.create({
        data: input,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }),

  //getSomeThings seria uma funcionalidade de listar resumidamente os usuários
  getSomeThings: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.users.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          setor: true,
          cargo: true,
        },
        orderBy: {
          id: "desc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),

  // getAll seria uma funcionalidade de listar todos os dados dos usuarios
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.users.findMany({
        select: {
          id: true,
          username: true,
          telefone: true,
          nome: true,
          cpf: true,
          email: true,
          setor: true,
          cargo: true,
        },
        orderBy: {
          id: "desc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
});
