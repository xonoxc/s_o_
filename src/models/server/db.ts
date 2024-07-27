import { db } from "@/models/details"

import createAnswerCollection from "@/models/server/answer.collection"
import createCommentsCollection from "@/models/server/comment.collection"
import createQuestionCollection from "@/models/server/question.collection"
import createVoteCollection from "@/models/server/vote.collection"

import { databases } from "@/models/server/config"
import type { Databases } from "node-appwrite"

export default async function initDb(): Promise<Databases> {
    try {
        await databases.get(db)
        console.log("Database connected")
    } catch (error) {
        try {
            await databases.create(db, db)

            console.log("database created")

            /* creating all the collections */

            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentsCollection(),
                createVoteCollection(),
            ])

            console.log("collections created !")
            console.log("database connection successful!")
        } catch (error) {
            console.log("Error creating databases or collection:", error)
        }
    }

    return databases
}
