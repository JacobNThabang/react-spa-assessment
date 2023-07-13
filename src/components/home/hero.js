import hero from "../../../src/heroimage.png"

export default function HeroSection() {

    return (
    <>
        <div className="flex w-full h-auto relative">
                <img
                    src={hero}
                    className="w-full h-full object-cover"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/8 pl-20 text-white hidden md:flex">
                    <div className="flex flex-col justify-between">
                            <h1 className="font-bold text-5xl">
                                Live with Confidence
                            </h1>
                            <p className="mt-7 text-xl font-normal w-[570px]">
                                José Mourinho brings confidence to pan-African Sanlam campaign.
                            </p>
                            <button className="mt-12 w-fit bg-primary-bg text-sm font-bold rounded-[50px] px-4 py-2">
                                View project
                            </button>
                    </div>
                </div>
        </div>
    </>
    );
}