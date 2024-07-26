import { Permission } from "node-appwrite"
import { answerCollection, db } from "@/models/details"
import { databases } from "@/models/server/config"

export default async function createAnswerCollection(): Promise<void> {
    /* creating collection  db */
    await databases.createCollection(db, answerCollection, answerCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])

    console.log("Answer collection created!")

    /* Creating attributes */
    await Promise.all([
        databases.createStringAttribute(
            db,
            answerCollection,
            "content",
            1000,
            true
        ),

        databases.createStringAttribute(
            db,
            answerCollection,
            "questionId",
            50,
            true
        ),

        databases.createStringAttribute(
            db,
            answerCollection,
            "authorId",
            50,
            true
        ),
    ])

    console.log("Answer attributes created!")
}
