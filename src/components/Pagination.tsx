"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"

interface IPaginationProps {
    className?: string
    limit: number
    total: number
}

const Pagination = ({ className, total, limit }: IPaginationProps) => {
    const searchParams = useSearchParams()
    const page = searchParams.get("page") || "1"
    const totaPages = Math.ceil(total / limit)
    const router = useRouter()
    const pathname = usePathname()

    const prev = () => {
        if (page <= "1") return

        const pageNumber = parseInt(page)
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("page", `${pageNumber - 1}`)
        router.push(`${pathname}?${searchParams}`)
    }

    const next = () => {
        if (page >= `${totaPages}`) return

        const pageNumber = parseInt(page)
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("page", `${pageNumber + 1}`)
        router.push(`${pathname}?${searchParams}`)
    }

    return (
        <div className="flex items-center  justify-center gap-4">
            <button
                className={`${className} rounded-lg bg-white/10 px-2 py-0.5 duration-200 hover:bg-white/20`}
                onClick={prev}
                disabled={page <= "1"}
            >
                prev
            </button>
            <span>
                {page} of {totaPages || "1"}
            </span>
            <button
                className={`${className} rounded-lg bg-white/10 px-2 py-0.5 duration-200 hover:bg-white/20`}
                onClick={next}
                disabled={page >= `${totaPages}`}
            >
                next
            </button>
        </div>
    )
}

export default Pagination
