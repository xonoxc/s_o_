import { env } from "@/validation/env"

import { Avatars, Databases, Storage, Client, Users } from "node-appwrite"

const client = new Client()
    .setEndpoint(env.NEXT_PUBLIC_APPWRITE_HOST_URL)
    .setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(env.APPWRITE_API_KEY)

const databases = new Databases(client)
const storage = new Storage(client)
const users = new Users(client)
const avatars = new Avatars(client)

export { client, databases, storage, users, avatars }
