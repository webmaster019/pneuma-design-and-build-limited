import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home4/Banner";
import About from "@/components/sections/home4/About";
import ServiceFour from "@/components/sections/home4/ServiceFour";
import Choose from "@/components/sections/home4/Choose";
import Testimonial from "@/components/sections/home4/Testimonial";
import Faq from "@/components/sections/home4/Faq";
import Team from "@/components/sections/home4/Team";
import Brand from "@/components/sections/home4/Brand";
import Funfact from "@/components/sections/home4/Funfact";
import Blog from "@/components/sections/home4/Blog";
import News from "@/components/sections/home4/News";
import Portfolio from "@/components/sections/home2/Portfolio";
import Services from "@/components/sections/home1/Services";
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                {/*<Services />*/}
                <About />
                <Services />
                <Portfolio />
                <Choose />
                <Team />
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
