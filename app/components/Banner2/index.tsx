import Image from "next/image";

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch my-16">

                {/* COLUMN-1 - IMAGE (now first in DOM order) */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto block order-1 lg:order-none">
                    <Image
                        src="/images/banner/manchester.png"
                        alt="hero-image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </div>

                {/* COLUMN-2 - TEXT (now second in DOM order) */}
                <div className="mx-auto sm:mx-0 flex flex-col justify-center order-2 lg:order-none">
                    <div className="py-3 text-center lg:text-start">
                      
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className="text-6xl lg:text-7xl font-bold text-darkpurple leading-tight">
                            Commercial  <br /> maintenance <br /> Services
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                        </p>
                    </div>
                    <div className="my-7 text-center lg:text-start">
                        <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;