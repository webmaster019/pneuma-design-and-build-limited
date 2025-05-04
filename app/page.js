import Layout from "@/components/layout/Layout"
import ServiceFrom from "@/components/sections/home1/ServiceFrom"
import Quality from "@/components/sections/home1/Quality"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Blog from "@/components/sections/home1/Blog"
import Funfacts from "@/components/sections/home1/Funfacts"
import Roofer from "@/components/sections/home1/Roofer"
import Portfolio from "@/components/sections/home1/Portfolio"
import Team from "@/components/sections/home1/Team"
import News from "@/components/sections/home1/News"
import Brand from "@/components/sections/home1/Brand"
import Testimonial from "@/components/sections/home1/Testimonial"
import Workprocess from "@/components/sections/home1/Workprocess"
import ServiceFour from "@/components/sections/home4/ServiceFour";
import Choose from "@/components/sections/home4/Choose";
import Faq from "@/components/sections/home4/Faq";
import Funfact from "@/components/sections/home4/Funfact";
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <Services />
                <About />
                <ServiceFour />
                <Choose />
                <Testimonial />
                <Faq />
                <Team />
                <Brand />
                <Funfact />
                <Blog />
                <News />
            </Layout>
        {/*    <Layout headerStyle={1} footerStyle={2}>
                <Banner />
                <ServiceFrom />
                <Quality />
                <About />
                <Services />
                <Funfacts />
                <Roofer />
                <Portfolio />
                <Team />
                <Testimonial />
                <Workprocess />
                <Brand />
                <Blog />
                <News />
            </Layout>*/}


        </>
    )
}
