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

const ExperienceCard = ({ experience }: { experience: any }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#fff",
      color: "#1E293B",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      border: "1px solid #E5E7EB",
    }}
    contentArrowStyle={{ borderRight: "7px solid #E5E7EB" }}
    date={experience.date}
    iconStyle={{
      background: "transparent", // 👈 esto limpia el fondo
      boxShadow: "0 0 0 3px rgba(167,197,235,0.4)", // 👈 halo suave
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        {experience.company_link ? (
          <a
            href={experience.company_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full hover:scale-110 transition-transform duration-300"
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[70%] h-[70%] object-contain rounded-full"
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                borderRadius: "50%",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            />
          </a>
        ) : (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain rounded-full"
            style={{
              backgroundColor: "#fff",
              padding: "6px",
              borderRadius: "50%",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          />
        )}
      </div>
    }
  >
    <div>
      <h3 className="text-primary text-[20px] font-bold">{experience.title}</h3>
      {experience.company_link ? (
        <a
          href={experience.company_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-[16px] font-semibold hover:text-blue-500 transition-colors"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </a>
      ) : (
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      )}
    </div>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point: string, index: number) => (
        <li
          key={`exp-point-${index}`}
          className="text-[#1E293B] text-[14px] pl-1 tracking-wide leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

/*
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
*/

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
