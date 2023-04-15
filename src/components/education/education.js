import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FcGraduationCap } from 'react-icons/fc';
import 'react-vertical-timeline-component/style.min.css';
import '../../scss/education.scss';

const Education = () => {
    return (
        <div className="education">
            <h1>Education</h1>
            <VerticalTimeline
                animate={true}
                lineColor={"#dc6565"}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2022 - 2024"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<FcGraduationCap/>}
                >
                    <h3 className="vertical-timeline-element-title">Toronto Metropolitan University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master of Science</h4>
                    <p>
                        Major: Computer Science
                        <br/>
                        GPA: 4.33
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2018 - 2022"
                    // iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<FcGraduationCap/>}
                >
                    <h3 className="vertical-timeline-element-title">Toronto Metropolitan University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor of Science</h4>
                    <p>
                        Major: Computer Science
                        <br/>
                        GPA: 3.55
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        );

}


export default Education;