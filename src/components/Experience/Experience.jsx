import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience, education } from '../../portfolio';
import { ThemeContext } from '../../contexts/theme';

const Experience = () => {
  const [{ themeName }] = useContext(ThemeContext);

  // Use CSS variables from the theme
  const primaryColor = themeName === 'dark' ? 'var(--clr-primary)' : 'var(--clr-primary)';

  return (
    <section className="section experience" id="experience">

      {/* Education Title */}
      <h2 className="section__title">Experience</h2>

      {/* Uses react-vertical-timeline-component package */}
      {/* Vertical Line (make sure to leave lineColor empty)*/}
      <VerticalTimeline lineColor={''}>

        {/* Work Experience Points */}
        {experience.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: 'var(--clr-primary)', color: '#fff' }}
          >

            {/* Stuff inside the Block */}
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.company} - {exp.location}
            </h4>
            <p>{exp.description}</p>


          </VerticalTimelineElement>
        ))}

        {/* Education Points */}
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={edu.date}
            iconStyle={{ background: 'var(--clr-primary)', color: '#fff' }}
          >
            
            {/* Stuff inside the Block */}
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {edu.school} - {edu.location}
            </h4>
            <p>{edu.description}</p>


          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
