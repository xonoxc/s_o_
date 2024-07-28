import React from "react"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { databases } from "@/models/server/config"
import {
    db,
    questionAttachmentBucket,
    questionCollection,
} from "@/models/details"
import { Query } from "node-appwrite"
import slugify from "@/utils/slugify"
import { storage } from "@/models/client/config"
import HeroSectionHeader from "@/app/components/HeroSectionHeader"

export default async function HeroSection() {
    const question = await databases.listDocuments(db, questionCollection, [
        Query.orderDesc("$createdAt"),
        Query.limit(15),
    ])

    return (
        <HeroParallax
            header={<HeroSectionHeader />}
            products={question.documents.map((q) => ({
                title: q.title,
                link: `/questions/${q.$id}/${slugify(q.title)}`,
                thumbnail: storage.getFilePreview(
                    questionAttachmentBucket,
                    q.attachmentId
                ).href,
            }))}
        />
    )
}
