import { publicProcedure, router } from "../trpc";

import { UserSchema } from "../../common/UserSchema";
import { z } from "zod";

export const userRouter = router({
  create: publicProcedure.input(UserSchema).mutation(async ({ input, ctx }) => {
    const user = await ctx.prisma.users.create({
      data: input,
    });
    return user;
  }),
});
