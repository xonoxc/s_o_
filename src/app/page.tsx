import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import LatestQuestion from "@/app/components/LatestQuestion"
import TopContributors from "@/app/components/TopContributors"

export default function Home() {
    return (
        <div className="container">
            <Header />
            <HeroSection />
            <LatestQuestion />
            <TopContributors />
            <Footer />
        </div>
    )
}
