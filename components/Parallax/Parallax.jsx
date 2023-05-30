import { ParallaxStyles } from "./style"
import { useRef } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import steps from "./steps"

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Step({ title, subtitle, step, bgColor }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section style={{ backgroundColor: bgColor, borderRadius: '15px', margin: '10px 10px', boxShadow: '0px 3px 3px var(--char3)' }}
    >
      <div ref={ref}>
        <Card sx={{ 
        maxWidth: 400,
        backgroundColor: 'var(--mb1-2)',
        borderRadius: '25px',
        boxShadow: '0px 3px 3px var(--char3)',
        margin: '5px 1px'
        }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color='var(--char0)' align='left'>
                {subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      
      </div>
      <motion.h2 style={{ y }}>{step}</motion.h2>
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
      <main >
        <ParallaxStyles>
          {steps.map((step) => (
            <Step 
              key={ step.step }
              title={ step.title }
              subtitle={ step.subtitle }
              step={ step.step }
              bgColor={ step.bgColor }
            />
          ))}
          <motion.div className="progress" style={{ scaleX }} />
        </ParallaxStyles>
      </main>
    </>
  );
}
