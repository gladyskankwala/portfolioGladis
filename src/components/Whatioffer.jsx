

const offers = [
    {
       name: "Development",
       id: 1,
       para: "Bring designs to life with clean, efficient, secure and high-performing code.",
       tools: "HTML, CSS, JS & React ",
       comp: "Cross-Browser Compatibility & Faster Load Times"
    },
]

function Whatioffer() {

    return(
        <section className="bg-black flex  min-h-screen justify-center gap-4">
            <div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                        What I offer
                    </h1>
                </div>
                <div>
                    {offers.map((offer) => (
                        <div key={offer.id} className="border bg-slate-500 text-white w-96 p-4 flex flex-col gap-7">
                            <div className="flex flex-col gap-3">
                               <h2 className=" text-2xl font-bold">{offer.name}</h2>
                               <h3 className="">{offer.para}</h3>
                            </div>
                            <div className="text-sm flex flex-col ">
                                <h4 className="border-b">{offer.tools}</h4>
                                <h4 >{offer.comp}</h4>
                            </div>

                             <button>schedule a consulation</button>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Whatioffer;