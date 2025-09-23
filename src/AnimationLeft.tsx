import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type LeavesMotionProps = {
  src: string;
};

export default function LeavesMotionLeft({ src }: LeavesMotionProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px" });
  // margin makes it trigger a bit earlier/later

  useEffect(() => {
    async function runAnimation() {
      // first run: to and fro
      await controls.start({
        x: ["-40vw", "40vw", "-40vw"],
        y: [0, -5, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 15, ease: "easeInOut" },
      });

      // second run: settle in the middle
      await controls.start({
        x: "-8vw",
        y: "-5vw",
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
