import { Banner } from "@/components/banner"
import { Cta } from "@/components/cta"
import Featured from "@/components/featured"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  return (
    <>
      
      <Banner />
      <Featured/>
      <WhyChooseUs />
      <Testimonials />
      <Cta />
      
    </>
  )
}

