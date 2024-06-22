import Image from "next/image";

export default function FeedHelp() {
  return (
    <>
        <section className="py-16 bg-brand-100" id="services">
            <div className="container">
                <div className="row">
                    <div className="text-center mb-5">
                        <div className="flex items-center justify-center mb-5">
                            <div className="border-2 border-[#ffffff] w-10"></div>
                            <p className="text-white mx-2">
                                Se precisar entre em contato
                            </p>
                        </div>
                        <h1 className="text-white text-3xl mb-5 font-bold max-w-lg mx-auto">
                            Você precisa de ajuda com a elétrica da sua casa?
                        </h1>
                        <p className="text-white max-w-3xl mx-auto">
                            Estou aqui para oferecer assistência em qualquer necessidade elétrica que você tenha em sua residência. Com qualificação e experiência, estou à disposição para resolver problemas, realizar manutenções e garantir a segurança elétrica do seu lar.
                        </p>
                    </div>

                
                </div>
            </div>
        </section>
    </>
  );
}

