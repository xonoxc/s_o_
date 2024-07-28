"use client"

import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Search: React.FC = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const [search, setSearch] = useState(searchParams.get("search" || ""))

    useEffect(() => {
        setSearch((searchParams.get("search") || "") as string)
    }, [searchParams])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("search", search as string)
        router.push(`${pathname}?${newSearchParams}`)
    }

    return (
        <form className="flex w-full flex-row gap-4" onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Search for questions"
                value={search as string}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="shrink-0 rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
                Search
            </button>
        </form>
    )
}

export default Search
