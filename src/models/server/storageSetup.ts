import { Permission } from "node-appwrite"
import { questionAttachmentBucket } from "@/models/details"
import { storage } from "@/models/server/config"

export default async function getOrCreateStorage() {
    try {
        await storage.getBucket(questionAttachmentBucket)
        console.log("Storage attached")
    } catch (error) {
        try {
            await storage.createBucket(
                questionAttachmentBucket,
                questionAttachmentBucket,
                [
                    Permission.create("users"),
                    Permission.read("users"),
                    Permission.update("users"),
                    Permission.delete("users"),
                    Permission.read("any"),
                ],
                false,
                undefined,
                undefined,
                ["jpg", "png", "gif", "jpeg", "webp", "heic"]
            )

            console.log("Storage Created")
            console.log("Storage Connected")
        } catch (error) {
            console.error("Error while creating storage:", error)
        }
    }
}
