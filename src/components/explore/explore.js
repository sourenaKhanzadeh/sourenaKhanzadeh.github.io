import React from "react";
import {motion, useScroll} from "framer-motion";
import "../../scss/explore.scss"
import Education from "../education/education";
import Experience from "../experience/experience";

const Explore = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Education/>
            <Experience/>
            <motion.div  className="progress-bar"
                         style={{scaleX: scrollYProgress}}/>
        </>
    );
}

export default Explore;