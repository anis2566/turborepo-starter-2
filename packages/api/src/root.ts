import { authRouter } from "./routers/auth";
import { examRouter } from "./routers/exam";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
    auth: authRouter,
    exam: examRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;