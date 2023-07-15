import { Brands, CaseStudies, Hero, Offers } from "../components/home";
import { Footer, NavBar } from "../components/ui";

function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Offers />
            <CaseStudies />
            <Brands />
            <Footer />
        </>
    );
}

export default Home;