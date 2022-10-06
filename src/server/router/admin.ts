import { createRouter } from "./context";
import { z } from "zod";
import { env } from "../../env/server.mjs";

export const adminRouter = createRouter()
  .mutation("login", {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    async resolve({ input }) {
      const { username, password } = input;

      if (username === env.ADMIN_USERNMAE && password === env.ADMIN_PASSWORD) {
        return {
          success: true,
        };
      }
      return {
        success: false,
      };
    },
  })
  .mutation("addProject", {
    input: z.object({
      title: z.string(),
      link: z.string(),
      featured: z.boolean(),
    }),

    async resolve({ input, ctx }) {
      try {
        const project = await ctx.prisma.projects.create({
          data: {
            title: input.title,
            link: input.link,
            featured: input.featured,
          },
        });

        return { success: true, project };
      } catch (error) {
        return { success: false, error };
      }
    },
  })
  .query("getProjects", {
    async resolve({ ctx }) {
      const projects = await ctx.prisma.projects.findMany({
        orderBy: {
          featured: "desc",
        },
      });
      return { success: true, projects };
    },
  })
  .query("featuredProjects", {
    async resolve({ ctx }) {
      const projects = await ctx.prisma.projects.findMany({
        where: {
          featured: true,
        },
        take: 4,
      });
      return { success: true, projects };
    },
  })
  .mutation("deleteProject", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      try {
        const project = await ctx.prisma.projects.delete({
          where: {
            id: input.id as any,
          },
        });

        return { success: true, project };
      } catch (error) {
        return { success: false, error };
      }
    },
  });
