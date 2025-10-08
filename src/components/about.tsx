import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-smart");

    const pastelColors = [
      "#FF80BF", // rosa
      "#74F7C5", // verde menta
      "#FFB4A2", // coral
      "#FFF350", // amarillo pastel
      "#00E0FF", // azul neón claro
    ];

    spans.forEach((span) => {
      span.addEventListener("mouseenter", () => {
        const random = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        span.style.color = random;
      });

      span.addEventListener("mouseleave", () => {
        span.style.color = "#19212D"; // vuelve a azul fijo
      });
    });
  }, []);

  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} gradient-softtech-azulnaranja uppercase font-semibold`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} gradient-softtech-azulnaranja font-extrabold`}>
          Overview.
        </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Text Body */}
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="text-[#1E293B] text-[17px] max-w-3xl leading-[28px] font-medium"
          >
            I’m an <span className="hover-smart">Entrepreneur</span> and
            <span className="hover-smart"> Telecommunications Systems Engineer </span>
            with nearly <span className="hover-smart">20 years of top experience </span> in
            <span className="hover-smart"> technology–driven programs & projects </span>
            across <span className="hover-smart">Aerospace,</span>
            <span className="hover-smart"> Automotive </span>, and
            <span className="hover-smart"> Digital Consulting </span> sectors.

            <br /><br />

            My background covers full project lifecycle, from
            <span className="hover-smart"> RFP</span> and
            <span className="hover-smart"> Technical Proposal stages, </span>
            to <span className="hover-smart">Architectural Design,</span>
            <span className="hover-smart"> Systems & Software development</span>, and
            <span className="hover-smart"> QA testing</span> —
            Combining hands-on expertise in
            <span className="hover-smart"> systems engineering</span>,
            <span className="hover-smart"> HW integration</span>, and
            <span className="hover-smart"> SW delivery</span>.

            <br /><br />

            I’m used to managed
            <span className="hover-smart"> international project teams</span>,
            coordinated <span className="hover-smart"> multidisciplinary and crossfunctional groups</span>,
            and led <span className="hover-smart"> Top-Tech projects</span> focused on
            <span className="hover-smart"> delivering Results, </span>
            <span className="hover-smart"> Innovation Strategies</span>, and
            <span className="hover-smart"> Operational Excelence results</span>.

            <br /><br />
          </motion.p>

          <div className="flex-shrink-0">
            <div className="profile-photo w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-lg">
              <img src="alberto-profile.png" alt="Alberto Lobo"
              className="w-full h-full object-cover object-[center_40%] transition-transform duration-500 hover:scale-105"              />
            </div>
          </div>
        </div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>

      </>
    </SectionWrapper>
  );
};
