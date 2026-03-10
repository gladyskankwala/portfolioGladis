

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
        <section className="bg-white flex  min-h-screen justify-center gap-4">
            <div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                        What I offer
                    </h1>
                </div>
                {offers.map((offer) => (
                    <div key={offer.id} className="border p-4">
                        <h2>{offer.name}</h2>
                        <h3>{offer.para}</h3>
                        <div>
                            <h3></h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Whatioffer;