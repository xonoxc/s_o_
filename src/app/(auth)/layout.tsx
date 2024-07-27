"use client"

import { useEffect } from "react"
import { useAuthStore } from "@/store/Auth"
import { useRouter } from "next/navigation"

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
    /* auth restrictons for authentication routes  */
    const { session } = useAuthStore()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push("/")
        }
    }, [session, router])

    if (session) {
        return <></>
    }

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center py-12">
            <div className="relative">{children}</div>
        </div>
    )
}

export default Layout
