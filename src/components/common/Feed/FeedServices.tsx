import Image from "next/image";

export default function FeedServices() {
  return (
    <>
        <section className="pt-10 pb-10 bg-stone-50" id="services">
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5">
                        <div className="flex items-center justify-center">
                            <div className="border-2 border-[#FFB100] w-10"></div>
                            <p className="text-brand-300 mx-2">
                                OUR SERVICES
                            </p>
                        </div>
                        <h1 className="text-brand-100 text-3xl mb-5 font-bold max-w-lg mx-auto">
                            What Service We Offer
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
                    {services.map((item, i) => (
                        <div key={i} className="border-brand-200 rounded-lg border-2 py-3 px-3">
                            <h1 className="text-brand-100 hover:text-brand-200 text-xl">
                                {item.title}
                            </h1>
                            <p className="text-brand-300 text-base">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

const services = [
    {
        title: "Electrical Security",
        desc: "We bring the right people together to challenge established"
    },
    {
        title: "Electricity Overuse",
        desc: "We bring the right people together to challenge established"
    },
    {
        title: "Install & Upgrades",
        desc: "We bring the right people together to challenge established"
    },
    {
        title: "Diagnosis & Repair",
        desc: "We bring the right people together to challenge established"
    },
    {
        title: "Cable Networking",
        desc: "We bring the right people together to challenge established"
    },
    {
        title: "Faulty & Old Wiring",
        desc: "We bring the right people together to challenge established"
    },
]