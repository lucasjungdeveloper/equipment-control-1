import type { NextApiRequest, NextApiResponse  } from "next";
import { appRouter } from "../../../server/trpc/router/_app";
import cors from "nextjs-cors";
import { createContext } from "../../../server/trpc/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "../../../env/server.mjs";
// export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext,
//   onError:
//     env.NODE_ENV === "development"
//       ? ({ path, error }) => {
//           console.error(`❌ tRPC failed on ${path}: ${error}`);
//         }
//       : undefined,
// });

//API HANDLER WITH CORS [create.t3.gg] = https://create.t3.gg/en/usage/trpc#useful-snippets

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Enable cors
  await cors(req, res);

  // Create and call the tRPC handler
  return createNextApiHandler({
    router: appRouter,
    createContext,
  })(req, res);
};

export default handler;
