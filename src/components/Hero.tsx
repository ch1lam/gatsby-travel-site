/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-27 22:48:35
 * @LastEditTime : 2022-04-11 18:55:25
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Hero.tsx
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Video from "../assets/videos/travel.mp4";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.2,
  });

  const titleVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };
  const subtitleVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
    hidden: { opacity: 0, y: 100 },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={titleVariants}
          >
            Unreal Destinations
          </HeroH1>
          <HeroP
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={subtitleVariants}
          >
            Out of the world
          </HeroP>
          <Button to="/" $primary $round>
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw-1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`;

const HeroH1 = styled(motion.h1)`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;

const HeroP = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;
