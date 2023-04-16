import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../../scss/utils.scss";
import { MdWork } from "react-icons/md";


const Experience = () => {
    return (
        <div className="card experience">
            <h1>Experience</h1>
            <VerticalTimeline
                animate={true}
                lineColor={"#dc6565"}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2023 - Present"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>Toronto Metropolitan University</b>
                        <br/>
                        As a Teaching Assistant at Toronto Metropolitan University, I have had the
                        opportunity to contribute significantly to the academic growth of numerous students. With my
                        expertise in software engineering. I have been able to foster an engaging and interactive
                        learning environment. My commitment to
                        student success is evident in the way I deliver comprehensive explanations, clarify complex
                        concepts, and provide tailored guidance to students during one-on-one sessions. By cultivating
                        a strong foundation in computer science, I have successfully enabled my students to excel in
                        their studies and make strides in the ever-evolving field of technology.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2022 - 2023"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>NTN</b>
                        <br/>
                        As a Software Engineer at NTN, I have demonstrated exceptional technical acumen and dedication
                        to delivering high-quality software solutions. My strong foundation in computer science,
                        combined with my ability to quickly adapt to new technologies and methodologies, has allowed
                        me to contribute significantly to the company's success. I have played a key role in the
                        development and optimization of numerous software applications, ensuring that they meet
                        stringent performance and usability standards. My collaborative approach to problem-solving
                        has not only led to the successful completion of complex projects but has also fostered a
                        culture of innovation and continuous improvement within the team.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2019 - 2020"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Private High School Computer Science Teacher</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>World life Education Center</b>
                        <br/>
                        During my enriching experience as a private high school teacher at World Life Education Center,
                        I have honed my skills in crafting effective, engaging, and student-centered lesson plans. My
                        unwavering dedication to each student's academic development, coupled with my ability to foster
                        a supportive and inclusive learning environment, has allowed me to create meaningful connections
                        and establish trust with my students. As an educator, I have consistently demonstrated my
                        commitment to ensuring the success of every student by employing innovative teaching techniques
                        and adapting my instructional approach to accommodate diverse learning styles. My ability to
                        convey complex concepts with clarity and enthusiasm has inspired students to reach their full
                        potential and develop a genuine passion for learning.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2018 - 2019"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Game Developer and Graphic Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>DigiTeens</b>
                        <br/>
                        As a multifaceted game developer and graphic designer, I have consistently demonstrated my
                        ability to create captivating and immersive gaming experiences. My extensive knowledge of game
                        mechanics, programming languages, and design principles has allowed me to excel in crafting
                        unique and engaging worlds that resonate with players. My artistic prowess and keen eye for
                        detail enable me to design visually stunning and memorable characters, environments, and user
                        interfaces that not only enhance gameplay but also elevate the overall aesthetic appeal of each
                        project.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2017 - 2018"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Algorithm Instructor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>TriWay Education</b>
                        <br/>
                        As a highly skilled Algorithm Instructor, I have demonstrated my ability to inspire students to
                        unlock the full potential of their problem-solving abilities. With a deep understanding of
                        theoretical concepts and practical applications, I am able to convey complex topics with clarity
                        and precision. My engaging teaching style, tailored to suit diverse learning needs, has proven
                        effective in cultivating a comprehensive grasp of algorithmic thinking and design among my
                        students.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;