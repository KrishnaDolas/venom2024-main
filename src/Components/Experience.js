
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
  
  function Experience() {
    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
      };
    return (
        <>
        <h1 className='text-center'style={{ divstyle,color: '#20b38e' }}>My Experience</h1>
    <VerticalTimeline>

    <VerticalTimelineElement style={divstyle}
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#20b38e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="OCT 2024 - present"
      iconStyle={{ background: '#20b38e', color: '#fff' }}
      icon={<WorkHistoryIcon />}
    >
      <h3 className="vertical-timeline-element-title">Software Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Kisaanstar Pvt Ltd,Pune Maharashtra India</h4>
      <p>
        Handling CRM and Website Here at Kisaanstar Pvt LTd using React and React Native.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement style={divstyle}
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#20b38e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="OCT 2023 - OCT 2024 -- 1Yr🕒"
      iconStyle={{ background: '#20b38e', color: '#fff' }}
      icon={<WorkHistoryIcon />}
    >
      <h3 className="vertical-timeline-element-title">Software Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Chords Technology,Pune Maharashtra India</h4>
      <p>
        Working on React,React Native as a Front end developer.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement style={divstyle}
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#20b38e', color: '#fff' }}
      date="DEC 2022 - OCT 2023 -- 11M🕒"
      iconStyle={{ background: '#20b38e', color: '#fff' }}
      icon={<WorkHistoryIcon />}
    >
      <h3 className="vertical-timeline-element-title">Associate Web Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Affinity Express,Pune Maharashtra India</h4>
      <p>
      Worked on Wordpress,PHP,HTML,CSS,Javascript.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement style={divstyle}
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#20b38e', color: '#fff' }}
      date="AUG 2022 - DEC 2022 -- 5M🕒"
      iconStyle={{ background: '#20b38e', color: '#fff' }}
      icon={<WorkHistoryIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Demandup Media,Pune Maharashtra India</h4>
      <p>
      Worked on Wordpress,PHP,HTML,CSS,Javascript.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<WorkHistoryIcon />}
    />
  </VerticalTimeline>
  </>
    );
  }
  
  export default Experience;
  