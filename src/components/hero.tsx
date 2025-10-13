import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Hero = () => {
  return (
    // 1) Fondo: gradiente azul → naranja
    <section className="relative w-full min-h-[100dvh] mx-auto bg-softtech-linear-strong overflow-visible">

      {/* 2) Contenido */}
      <div
        className={cn(
          styles.paddingX,
          "relative z-10 inset-0 pt-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        )}
      >
        {/* Línea lateral en Secondary (fina, elegante) */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-secondary/80" />
          <div className="w-[3px] sm:h-80 h-40 bg-secondary/35" />
        </div>

        {/* Copy */}
        <div>
          {/* Título con sombra sutil para legibilidad */}
          <h1 className={cn(styles.heroHeadText, "text-elevated text-[var(--color-text)]")}>
            Hi, I'm{" "}
            <span className="inline-block px-3 py-1 pill-glass">
              Alberto
            </span>
          </h1>

          {/* Subtítulo con mayor contraste */}
          <p className={cn(styles.heroSubText, "mt-4 lead-contrast max-w-3xl")}>
            I am an Engineer, Entrepreneur and Tech Advisor, that develops Digital Strategies
            and Software applications for Start-ups, SME and big corporations.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="btn btn-primary">Work & Projects</a>
            <a
              href="https://www.linkedin.com/in/ajleblob/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin font-semibold flex items-center gap-2"
              /* btn-linkedin-soft" */
            >
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-16 h-6" />

            </a>
          </div>


          {/* Download CV Button — versión cool & soft-tech */}
          <a
            href="https:/nexusfinlabs.com/doc/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-[#472b20] font-semibold flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download CV
          </a>

          {/* New Buttons
          <!div><br />
            <a href="" className="btn btn-accent text-[#472b20] font-semiboldt">Download</a>
            <a href="" className="btn btn-secondary font-semibold">Email</a>
          </div>
          */}
        </div>
      </div>

      <div className="canvas-under canvas-right canvas-up">
          <ComputersCanvas />
      </div>

      {/* 4) Fade inferior para que el 3D no “suba” ópticamente */}
      <div className="hero-fade-bottom" />

      {/* Scroll */}
      <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[var(--color-secondary)] flex justify-center items-start p-2 bg-surface/80 backdrop-blur">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
