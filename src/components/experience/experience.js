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
                    date="2021 - Present"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>Company Name</b>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, dui eget
                        dignissim lacinia, nunc turpis ultricies ligula, sed ultricies eros enim quis
                        nunc. Aenean quis semper nunc. In hac habitasse platea dictumst. Sed euismod
                        nunc ut risus ultricies, a ultricies ante aliquet. Sed euismod nunc ut risus
                        ultricies, a ultricies ante aliquet.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: '#dc6565', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dc6565' }}
                    date="2021 - Present"
                    iconStyle={{ background: '#dc6565', color: '#fff' }}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
                    <p>
                        <b>Company Name</b>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, dui eget
                        dignissim lacinia, nunc turpis ultricies ligula, sed ultricies eros enim quis
                        nunc. Aenean quis semper n
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;