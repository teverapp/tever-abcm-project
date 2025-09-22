import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type LeavesMotionProps = {
  src: string; // image path
};

export default function LeavesMotionLeft({ src }: LeavesMotionProps) {
  const controls = useAnimation();

  useEffect(() => {
    async function runAnimation() {
      // First round: full back and forth
      await controls.start({
        x: ["-40vw", "40vw", "-40vw"],
        y: [0, -5, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 10, ease: "easeInOut" },
      });

      // Second round: stop somewhere in the MainImage
      await controls.start({
        x: "-8vw",
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
