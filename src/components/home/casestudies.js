import {
    Skhokho,
    SavingsJar,
    TheOlympian
} from "../../assets/casestudies";

export default function CaseStudiesSection() {

    const caseStudies = [
        {
            image: TheOlympian,
            heading: "The Olympian",
            details: "The only athlete in the world to do her Olympic routine in 2020."
        },
        {
            image: SavingsJar,
            heading: "The Savings Jar",
            details: "Grow your savings treasure and grow your dragon."
        },
        {
            image: Skhokho,
            heading: "Skhokho seMali",
            details: "Helping South Africans become #CashCleva with Skhokho and TymeBank."
        },
    ];

    return (
        <>
            <div className="flex h-auto p-20 text-black">
                <div className="flex flex-col">
                    <div className="flex gap-5 mt-16">
                        <div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
                        <span className="text-xl font-normal">Case studies</span>
                    </div>
                    <div className="mt-14 flex lg:flex-row flex-col gap-10 justify-between">
                        {caseStudies.map((caseStudy) => {
                            return <div className="relative" key={caseStudy.heading}>
                                <img
                                    src={caseStudy.image}
                                    className="h-full object-cover shadow-[0px_8px_16px_0px_rgba(54,54,54,0.10)]"
                                    alt=""
                                />
                                <div className="absolute xl:top-[55%] md:top-1/4 sm:top-[55%] left-1/8 p-5 text-white">
                                    <div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
                                    <h1 className="my-4 text-3xl font-bold">{caseStudy.heading}</h1>
                                    <p className="text-base">{caseStudy.details}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}