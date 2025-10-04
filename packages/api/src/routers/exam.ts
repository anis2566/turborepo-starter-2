import type { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure, publicProcedure } from "../trpc";

export const examRouter = {
  all: publicProcedure.query(async ({ ctx }) => {
        const exmas = await ctx.db.exam.count();
        return exmas
  }),
} satisfies TRPCRouterRecord;