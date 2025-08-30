import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const emailRouter = createTRPCRouter({
  addToWaitingList: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const waitingListEntry = await ctx.db.waitingList.create({
          data: {
            email: input.email,
          },
        });

        return {
          success: true,
          message: "Successfully added to waiting list",
          id: waitingListEntry.id,
        };
      } catch (error) {
        // Handle unique constraint violation (duplicate email)
        if (
          error instanceof Error &&
          error.message.includes("Unique constraint")
        ) {
          return {
            success: false,
            message: "Email already exists in waiting list",
          };
        }

        throw error;
      }
    }),

  getWaitingListCount: publicProcedure.query(async ({ ctx }) => {
    const count = await ctx.db.waitingList.count();
    return { count };
  }),

  getAllEmails: publicProcedure.query(async ({ ctx }) => {
    const emails = await ctx.db.waitingList.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return emails;
  }),
});
