import { publicProcedure, router } from "../trpc";

import { userSchema } from "../../common/userSchema";
import { z } from "zod";

export const userRouter = router({
  // create seria uma funcionalidade de criar os usuários
  create: publicProcedure.input(userSchema).mutation(async ({ input, ctx }) => {
    try {
      await ctx.prisma.users.create({
        data: input,
      });
    } catch (error) {
      console.log(error);
    }
    // const user = await ctx.prisma.users.create({
    //   data: input,
    // });
    // return user;
  }),

  // getSomeThings seria uma funcionalidade de listar resumidamente os usuários
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
