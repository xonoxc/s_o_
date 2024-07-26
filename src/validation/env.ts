import { z } from "zod"

export const envSchema = z.object({
    NEXT_PUBLIC_APPWRITE_HOST_URL: z.string(),
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
    APPWRITE_API_KEY: z.string(),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
    console.error("error validating env variables", result.error)
    process.exit(1)
}

export const env = result.data
