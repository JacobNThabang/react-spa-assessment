import { Web, UX, App, Blockchain } from "../../assets/whatwedo";

export default function WhatWeDoSection() {

    const offers = [
        {
            image: Web,
            heading: "Web development",
            details: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
        },
        {
            image: UX,
            heading: "User experience & design",
            details: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
        },
        {
            image: App,
            heading: "Mobile app development",
            details: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
        },
        {
            image: Blockchain,
            heading: "Blockchain solutions",
            details: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
        },
    ];

    return (
        <>
            <div className="h-auto p-20 text-black">
                <div className="flex flex-col">
                    <div className="flex gap-5 mt-16">
                        <div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
                        <span className="text-xl font-normal">What we do</span>
                    </div>
                    <h1 className="mt-8 py-6 font-bold md:text-5xl text-3xl leading-[140%] text-secondary-heading-text">
                        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
                    </h1>
                    <div className="mt-14 flex w-full md:flex-row flex-col gap-10">
                        {offers.map((offer) => {
                            return <div key={offer.heading}>
                                <img src={offer.image} alt="" />
                                <h1 className="my-14 text-2xl font-bold h-10">{offer.heading}</h1>
                                <p className="text-xl">{offer.details}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}