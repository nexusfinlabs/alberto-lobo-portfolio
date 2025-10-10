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
  icon?: string;
  backgroundImage?: string;
};

// 🔧 Card limpia y visible
// 🔧 Card limpia, con link funcional
const ServiceCard = ({ index, title, icon, backgroundImage, link }: ServiceCardProps & { link?: string }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="relative rounded-[22px] overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.03]"
    >
      {/* Imagen de fondo */}
      <div
        className="h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-40 transition-all duration-500"></div>

      {/* Texto visible */}
      <h3 className="absolute bottom-4 w-full text-center text-white font-semibold text-lg tracking-wide z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
        {title}
      </h3>
    </motion.div>
  );

  return (
    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }} className="xs:w-[250px] sm:w-[260px] w-full">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 rounded-[22px]"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Tilt>
  );
};

// 🔹 About
export const About = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-smart");

    const pastelColors = ["#FF80BF", "#74F7C5", "#FFB4A2", "#FFF350", "#00E0FF"];

    spans.forEach((span) => {
      span.addEventListener("mouseenter", () => {
        const random = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        span.style.color = random;
      });
      span.addEventListener("mouseleave", () => {
        span.style.color = "#19212D";
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
            <span className="hover-smart"> Systems Engineering</span>,
            <span className="hover-smart"> HW integration</span>, and
            <span className="hover-smart"> SW delivery</span>.

            <br /><br />

            I also support Corporations in
            <span className="hover-smart"> process transformation</span>,{" "}
            <span className="hover-smart">Operating Model redesign</span>,
            <span className="hover-smart"> Organizational and cultural change</span>,{" "}
            <span className="hover-smart">Change Management</span>, and{" "}
            <span className="hover-smart">ERP implementation</span>,
            particularly SAP with focus on{" "}
            <span className="hover-smart">SAP FICO and BTP.</span>

            <br /><br />

            I’m used to manage
            <span className="hover-smart"> international project teams</span>,
            coordinate <span className="hover-smart"> multidisciplinary and crossfunctional groups</span>,
            and lead <span className="hover-smart"> Top-Tech projects</span> focused on
            <span className="hover-smart"> delivering Results, </span>
            <span className="hover-smart"> Innovation Strategies</span>, and
            <span className="hover-smart"> Operational Excellence.</span>
          </motion.p>

          <div className="flex-shrink-0">
            <div className="profile-photo w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="alberto-profile.png"
                alt="Alberto Lobo"
                className="w-full h-full object-cover object-[center_40%] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Service Cards */}
        <div className="mt-10 flex flex-wrap gap-8 justify-center">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              backgroundImage={service.backgroundImage}
              link={service.link}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
