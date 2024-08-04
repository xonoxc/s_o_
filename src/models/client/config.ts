import { Client, Avatars, Account, Databases, Storage } from "appwrite"

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

/* Services initialization */
const databases = new Databases(client)
const account = new Account(client)
const storage = new Storage(client)
const avatars = new Avatars(client)

export { databases, client, account, storage, avatars }
