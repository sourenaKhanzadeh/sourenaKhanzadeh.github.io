import React from "react";
import {motion, useScroll} from "framer-motion";
import "../../scss/explore.scss"
import Education from "../education/education";

const Explore = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div  className="progress-bar"
                         style={{scaleX: scrollYProgress}}/>
            <Education/>
        </>
    );
}

export default Explore;