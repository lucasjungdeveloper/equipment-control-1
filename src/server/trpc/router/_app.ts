import connectDB from "../../../utils/prismaDB";
import { router } from "../trpc";
import { userRouter } from "./user";

// Connect to Prisma
connectDB();

export const appRouter = router({
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
