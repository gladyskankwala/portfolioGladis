

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
        <section className="bg-white flex min-h-screen justify-center">
            <h1>What I offer</h1>
            <div>
                {offers.map((offer) => (
                    <div key={offer.id}>
                        <h2>{}</h2>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Whatioffer;