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
                    markers: true
                }
            })
        })
    }, {scope: main})

    return(
        <div className="box-container gap-4 space-y-40 flex justify-center items-center h-screen w-screen flex-col" ref={main}>
          <div className="box bg-blue-500 h-screen w-screen">Box 1</div>
        </div>
    )
}

export default ScrollTriger