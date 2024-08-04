import { z } from "zod"

const envSchema = z.object({
    NEXT_PUBLIC_APPWRITE_HOST_URL: z.string(),
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
    NEXT_PUBLIC_GITHUB_AUTH_URL: z.string(),
    APPWRITE_API_KEY: z.string(),
    NEXT_PUBLIC_APP_URL: z.string(),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
    throw new Error(
        "Error while validating env variables:" + result.error.message
    )
}

export const env = result.data
