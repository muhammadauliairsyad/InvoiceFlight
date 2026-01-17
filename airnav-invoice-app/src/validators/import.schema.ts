import { z } from "zod";

export const importSchema = z.object({
  fileName: z.string().min(1)
});
