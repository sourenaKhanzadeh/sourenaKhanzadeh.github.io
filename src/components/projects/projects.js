import React from "react";
import {motion} from "framer-motion";
import { Card } from "antd";
import "../../scss/utils.scss"
import { useState, useEffect } from 'react';
import { GrProjects } from "react-icons/gr";


const cardVariants = {
    offscreen: {
        y: 100
    },
    onscreen: {
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Projects = () => {

    return (
        <>
            <div className={"card projects"}>
                <h1>Projects</h1>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={cardVariants}
                >
                    <Card title={"6 Top Projects"} bordered={true}
                          type="inner" style={{ width: '100%' }}
                            className={"project-card"}

                    >
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"Snake AI"}
                                description={"A snake game with an ai that learns to play the game"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"Opti Code Pro AI"}
                                description={"A class level refactoring tool that utilizes heuristic search algorithms to " +
                                    "find the best refactoring path"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"iShare"}
                                description={"paperswithcode clone"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"Face Recognition"}
                                description={"A face recognition system that uses a deep learning model to recognize faces"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"Paxos Algorithm"}
                                description={"A distributed consensus algorithm"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                        <Card.Grid style={{textAlign: 'center' }}>
                            <Card.Meta
                                title={"Chess AI"}
                                description={"A chess game with an ai that measures the quality of the moves user made"}
                                avatar={<GrProjects/>}
                            />
                        </Card.Grid>
                    </Card>
                </motion.div>
            </div>

        </>
    );
}

export default Projects;