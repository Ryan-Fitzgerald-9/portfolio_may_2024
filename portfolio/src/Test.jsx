import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

    const [open, setOpen] = useState(false)

  const variants = {
    visible: { opacity: 1, x:600, transition:{type:"spring", stiffness:300, damping:300} },
    hidden: { opacity: 0 },
  }

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
    </div>
  );
};

export default Test;
