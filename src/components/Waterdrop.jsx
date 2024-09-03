import React from "react";
import { motion } from "framer-motion";

const WaterDrop = () => {
  return (
    <div className="relative inline-block overflow-hidden">
      {/* Text */}
      <motion.h1
        className="text-5xl font-bold text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: .25 }}
      >
        Your Text Here
      </motion.h1>

      {/* Reveal Box */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-green-500"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default WaterDrop;
