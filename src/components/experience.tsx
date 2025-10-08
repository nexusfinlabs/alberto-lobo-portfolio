import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    // Tema claro: tarjeta sobre surface + texto del tema
    contentStyle={{
      background: "var(--color-surface)",
      color: "var(--color-text)",
      boxShadow: "0 10px 24px rgba(0,0,0,.06)",
      border: "1px solid var(--color-muted)",
      borderRadius: "14px",
    }}
    contentArrowStyle={{ borderRight: "7px solid var(--color-muted)" }}
    date={experience.date}
    iconStyle={{
      background: "var(--color-secondary)",
      color: "#fff",
      boxShadow: "0 6px 14px rgba(167,197,235,.45)",
    }}
    // línea del timeline
  >
    <div>
      <h3 className="text-[24px] font-bold text-primary">{experience.title}</h3>
      <p className="text-[16px] font-semibold text-secondary m-0">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-app/80 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} gradient-softtech-azulnaranja uppercase font-semibold`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} gradient-softtech-azulnaranja font-extrabold`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-col">
          {/* color de la línea del timeline vía CSS var */}
          <VerticalTimeline lineColor={"var(--color-muted)"}>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
