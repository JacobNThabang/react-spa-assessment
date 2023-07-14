import { Brands, Hero } from "../components/home";
import { Footer, NavBar } from "../components/ui";

function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Brands />
            <Footer />
        </>
    );
}

export default Home;