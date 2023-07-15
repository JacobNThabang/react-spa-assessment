import { Brands, Hero, Offers } from "../components/home";
import { Footer, NavBar } from "../components/ui";

function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Offers />
            <Brands />
            <Footer />
        </>
    );
}

export default Home;