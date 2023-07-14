import { useEffect, useState } from "react";

export default function TrustedByBrandsSection() {
    const [brands, setBrands] = useState([]);

    // This method fetches the brands from the database.
    useEffect(() => {
        async function getBrands() {
            try {
                const response = await fetch(`http://localhost:8080/brand/`);

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                const brands = await response.json();
                setBrands(brands);
            } catch (error) {
                const message = `An error occurred: ${error.message}`;
                window.alert(message);
                setBrands([]);
            }
        }

        getBrands();

        return;
    }, [brands.length]);


    return (
        <>
            <div className="h-auto p-20 text-black">
                <div className="flex flex-col">
                    <div className="flex gap-5 mt-16">
                        <div className="mt-2.5 h-1 w-10 bg-primary-active"></div>
                        <span className="text-xl font-normal">You’ll be in good company</span>
                    </div>
                    <h1 className="mt-8 font-bold text-5xl text-secondary-heading-text">
                        Trusted by leading brands
                    </h1>
                    <div className="mt-20 flex flex-col md:grid md:grid-cols-3 xl:grid-cols-5 justify-between">
                        {brands.map((image) => {
                            return <div className="flex w-64 items-center justify-center px-14 py-10" key={image.name}>
                                <img src={`data:image/${image.img.contentType};base64,
                                            ${image.img.data.toString('base64')}`}
                                    alt=""
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}