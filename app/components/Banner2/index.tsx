import Image from "next/image";

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch my-16 gap-8 lg:gap-12">

                {/* COLUMN-1 - IMAGE (now first in DOM order) */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto block order-1 lg:order-none lg:pr-8">
                    <Image
                        src="/images/banner/manchester2.jpg"
                        alt="hero-image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </div>

                {/* COLUMN-2 - TEXT (now second in DOM order) */}
                <div className="mx-auto sm:mx-0 flex flex-col justify-center order-2 lg:order-none lg:pl-8">
                    <div className="py-3 text-center lg:text-start">
                      
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className="text-6xl lg:text-7xl font-bold text-darkpurple leading-tight">
                           Whether it’s routine repairs,  <br />   emergency fixes or <br />  regular inspections we can help. 
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                        Property maintenance can be overwhelming for property owners and managers alike. Whether it’s a planned home renovation, emergency repairs to a retail unit, regular maintenance of an office building or anything in between – it can be time consuming, stressful and expensive.                
                        </p>

                        <p className="mt-6 text-lg text-gray-600">
                            That’s where we can help. With decades of property experience and a reliable track record, we specialise in providing top-notch maintenance services for all types of residential and commercial properties, no matter how big or small.
                        </p>
                    </div>
                    <div className="my-7 text-center lg:text-start">
                        <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
                            VIEW OUR SERVICES
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;