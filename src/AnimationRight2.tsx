import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type LeavesMotionProps = {
  src: string;
};

export default function LeavesMotionRight2({ src }: LeavesMotionProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px" });

  useEffect(() => {
    async function runAnimation() {
      await controls.start({
        x: ["40vw", "-40vw", "40vw"],
        y: [0, -5, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 15, ease: "easeInOut" },
      });

      await controls.start({
        x: "-2vw",
        y: "-10vw",
        rotate: 5,
        transition: { duration: 3, ease: "easeInOut" },
      });
    }

    if (isInView) {
      runAnimation();
    } else {
      controls.stop(); // optional: stop anim when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt="leaf"
      className="w-[10vw] absolute z-10"
      animate={controls}
    />
  );
}
