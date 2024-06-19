import Image from "next/image";

export default function FeedProjects() {
  return (
    <>
        <section className="pt-10 pb-10 " id="projects">
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5">
                        <div className="flex items-center justify-center mb-5">
                            <div className="border-2 border-[#FFB100] w-10"></div>
                            <p className="text-brand-300 mx-2">
                                OUR PROJECTS
                            </p>
                        </div>
                        <h1 className="text-brand-100 text-3xl mb-5 font-bold max-w-lg mx-auto">
                            Project We Have Done
                        </h1>
                       
                    </div>

                
                </div>
            </div>
        </section>
    </>
  );
}

