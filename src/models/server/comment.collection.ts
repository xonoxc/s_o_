import { Permission } from "node-appwrite"
import { commentsCollection, db } from "@/models/details"
import { databases } from "@/models/server/config"

export default async function createCommentsCollection(): Promise<void> {
    /* creating collection  db */
    await databases.createCollection(
        db,
        commentsCollection,
        commentsCollection,
        [
            Permission.create("users"),
            Permission.read("any"),
            Permission.read("users"),
            Permission.update("users"),
            Permission.delete("users"),
        ]
    )

    console.log("Comments collection created!")

    /* Creating attributes */
    await Promise.all([
        databases.createStringAttribute(
            db,
            commentsCollection,
            "content",
            1000,
            true
        ),

        databases.createEnumAttribute(
            db,
            commentsCollection,
            "type",
            ["question", "answer"],
            true
        ),

        databases.createStringAttribute(
            db,
            commentsCollection,
            "typeId",
            50,
            true
        ),

        databases.createStringAttribute(
            db,
            commentsCollection,
            "authorId",
            50,
            true
        ),
    ])

    console.log("Comments attributes created!")
}
