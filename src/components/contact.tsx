import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

export const Contact = () => {
  return (
    <SectionWrapper idName="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-2xl p-10 max-w-xl mx-auto text-gray-800"
      >

        {/* Title */}
        <motion.div>
          <p className={`${styles.sectionSubText} gradient-softtech-azulnaranja uppercase font-semibold`}>
            Lets work together!
          </p>
          <h2 className={`${styles.sectionHeadText} gradient-softtech-azulnaranja font-extrabold`}>
            Contact.
          </h2>
        </motion.div>

        {/* Info */}
        <div className="mt-8 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-primary">Name</h4>
            <p className="text-gray-700">Alberto Lobo | Wolf </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary">Address</h4>
            <p className="text-gray-700">
              Between Munich and Barcelona (available for travel)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary">Phone</h4>
            <p className="text-gray-700">
              <a href="tel:+34605693177" className="hover:text-blue-500">
                +34 605 693 177
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary">Email</h4>
            <p className="text-gray-700">
              <a
                href="mailto:hola@movildrive.com"
                className="text-blue-600 hover:underline"
              >
                hola@movildrive.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
