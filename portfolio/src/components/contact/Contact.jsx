import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jk8054p', 'template_fyn6teh', formRef.current, {
        publicKey: 'ehOYBbwW_iihiySsB',
      })
      .then(
        () => {
            setSuccess(true);
        },
        (error) => {
            setError(true);
        },
      );
  }

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Connect</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>rfitzgerald806@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Location</h2>
          <span>Blackstone, MA</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg width="500px" viewBox="0 0 64 64">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 7 }}
              d="M62.6738,49.8809c-0.4111-0.584-1.1523-0.9614-1.8877-0.9614H60.061V17.2261c0-1.7427-1.4194-3.1606-3.1641-3.1606    H45.8047v-3.0996c0-2.084-1.6953-3.7798-3.7793-3.7798H20.855c-2.0859,0-3.7832,1.6958-3.7832,3.7798v3.0996H7.103    c-1.7446,0-3.1641,1.418-3.1641,3.1606v31.6934H3.2139c-0.7354,0-1.4766,0.3774-1.8877,0.9614    c-0.3306,0.4688-0.4141,1.0342-0.231,1.5464l1.248,3.5439c0.4312,1.2227,1.144,1.8428,2.1187,1.8428h55.0762    c0.9746,0,1.6875-0.6201,2.1187-1.8433l1.2461-3.5386C63.0879,50.915,63.0044,50.3496,62.6738,49.8809z M20.855,28.2139h2.8022    v4.3169c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h4.7827v7.2412c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-7.2412h4.9175v4.3169    c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h2.668c2.084,0,3.7793-1.6958,3.7793-3.7798v-3.7085h7.0503v23.6099h-41.71V20.7256    h5.9268v3.7085C17.0718,26.5181,18.769,28.2139,20.855,28.2139z M21.2932,26.2139l7.6743-7.317l1.8152,1.5826    c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6577-0.2466l2.1458-1.8724l7.9888,7.5863    c-0.0687,0.0081-0.136,0.0209-0.2068,0.0209H21.2932z M43.6921,10.3619c0.0689,0.1894,0.1126,0.391,0.1126,0.6039v13.4683    c0,0.1516-0.0248,0.2963-0.0606,0.4368l-7.9872-7.5848L43.6921,10.3619z M41.9973,9.186l-10.5578,9.2124L20.8729,9.186H41.9973z     M19.0718,10.9658c0-0.2112,0.0435-0.4111,0.1114-0.5992l8.2706,7.2106l-8.1309,7.7523c-0.1555-0.2641-0.251-0.5676-0.251-0.8954    V10.9658z M5.939,17.2261c0-0.6401,0.522-1.1606,1.1641-1.1606h9.9688v2.6602H10.145c-0.5522,0-1,0.4478-1,1v25.6099    c0,0.5522,0.4478,1,1,1h43.71c0.5522,0,1-0.4478,1-1V19.7256c0-0.5522-0.4478-1-1-1h-8.0503v-2.6602H56.897    c0.6421,0,1.1641,0.5205,1.1641,1.1606v31.6934H41.3198c-0.2935,0-0.5718,0.145-0.7617,0.3687s-0.2715,0.5356-0.2241,0.8252    c0,0.2563-0.2163,0.4727-0.4727,0.4727H24.1387c-0.2563,0-0.4727-0.2163-0.4717-0.5044c0.0474-0.29-0.0347-0.5859-0.2246-0.8096    s-0.4688-0.3525-0.7622-0.3525H5.939V17.2261z M59.77,54.3062c-0.1406,0.4004-0.2412,0.5015-0.2349,0.5078H4.48    c-0.0361-0.0381-0.1279-0.1602-0.25-0.5073l-1.1768-3.3403c0.0508-0.0259,0.1118-0.0469,0.1606-0.0469h18.5869    c0.335,0.9688,1.2563,1.6665,2.3379,1.6665h15.7227c1.0815,0,2.0029-0.6978,2.3379-1.6665h18.5869    c0.0488,0,0.1099,0.021,0.1606,0.0469L59.77,54.3062z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
