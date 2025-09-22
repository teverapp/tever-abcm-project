import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type LeavesMotionProps = {
  src: string;
};

export default function LeavesMotionLeft2({ src }: LeavesMotionProps) {
  const controls = useAnimation();

  useEffect(() => {
    async function runAnimation() {
      await controls.start({
        x: ["-42vw", "42vw", "-42vw"],
        y: [0, -5, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 15, ease: "easeInOut" },
      });

      await controls.start({
        x: "-10vw",
        y: "-5vw",
        rotate: 5,
        transition: { duration: 3, ease: "easeInOut" },
      });
    }

    runAnimation();
  }, [controls]);

  return (
    <motion.img
      src={src}
      alt="leaf"
      className="w-[10vw] absolute z-10"
      animate={controls}
    />
  );
}
