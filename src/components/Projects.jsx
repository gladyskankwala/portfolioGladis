import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

function ScrollTriger () {
    const main = useRef()

    useGSAP(() => {
        const boxes = gsap.utils.toArray('.box')

        boxes.forEach((box) => {
            gsap.from(box, {
                scale: 0.4,
                scrollTrigger: {
                    trigger: box,
                    start: "bottom bottom",
                    end: "center center",
                    scrub: true,
                }
            })
        })
    }, {scope: main})

    return(
        <div id="mywork" className="box-container bg-black-100 gap-4 space-y-40 flex h-screen w-screen flex-col" ref={main}>
          <div className="box bg-white h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">Projects</h1>
            <p>comming soon</p>
          </div>
        </div>
    )
}

export default ScrollTriger