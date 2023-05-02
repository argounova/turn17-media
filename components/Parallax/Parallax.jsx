import { ParallaxStyles } from "./style"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import FeatureTextCard from "../FeatureTextCard";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <FeatureTextCard
          title="Build Steps Title"
          description="Description of each step in the development process."
        />
      </div>
      <motion.h2 style={{ y }}>{`${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <main>
        <ParallaxStyles>
          {[1, 2, 3, 4, 5].map((image) => (
            <Image id={image} key={id}/>
          ))}
          <motion.div className="progress" style={{ scaleX }} />
        </ParallaxStyles>
      </main>
    </>
  );
}
