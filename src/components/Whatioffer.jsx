import { Code2Icon, icons } from "lucide-react";

const offers = [
    {
       icon: Code2Icon,
       name: "Development",
       id: 1,
       para: "Bring designs to life with clean, efficient, secure and high-performing code.",
       tools: "HTML, CSS, JS & React ",
       comp: "Cross-Browser Compatibility & Faster Load Times"
    },
]

function Whatioffer() {

    return(
        <section className="bg-white flex  min-h-screen justify-center gap-10 align-center">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-4xl mb-20 md:text-5xl font-bold text-red-600">
                        What I offer
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center ">
                    {offers.map((offer) => (
                        <div key={offer.id} className="border bg-slate-800 rounded-xl text-white w-96 p-4 flex flex-col gap-5">
                            <Code2Icon size={24}/>
                            <div className="flex flex-col gap-3 ">
                               <h2 className=" text-2xl font-bold">{offer.name}</h2>
                               <h3 className="">{offer.para}</h3>
                            </div>
                            <div className="text-sm flex flex-col ">
                                <h4 className="border-b">{offer.tools}</h4>
                                <h4 >{offer.comp}</h4>
                            </div>

                             <button className="bg-red-600 p-2 rounded-md">schedule a consultation</button>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Whatioffer;