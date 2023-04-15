import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { PaperClipOutlined, GithubFilled,
            LinkedinFilled
} from "@ant-design/icons";
import TypewriterComponent from "../utils/typewriter";
import "../../scss/index.scss";

const LandingPage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch('res/resumes/resume_v1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100px'}}
                options={{
                    background: {
                        color: {
                            value: "#ffffff00",
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#dc6565",
                        },
                        links: {
                            color: "#9d3b3b",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    fullScreen: {
                        enable: false,
                    },
                    detectRetina: true,
                }}

            />
            <div className={"page"}>
                <div className={"landing-page"}>
                    <h1>Welcome, I am a <span><TypewriterComponent/></span></h1>
                </div>
                <Space wrap>
                    <Button type={"primary"} onClick={downloadResume}>Resume <PaperClipOutlined /></Button>
                    <Link to={"/explore"}>
                        <Button type={"dashed"}>Explore</Button>
                    </Link>
                </Space>
                <Space wrap>
                    <Link to={"https://github.com/sourenaKhanzadeh"}>
                        <Button type={"ghost"}><GithubFilled/></Button>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/sourenak/"}>
                        <Button type={"ghost"}><LinkedinFilled/></Button>
                    </Link>
                </Space>
            </div>
        </>
        );
}


export default LandingPage;