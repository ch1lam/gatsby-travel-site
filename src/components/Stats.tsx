/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-04-01 18:10:00
 * @LastEditTime : 2022-04-12 00:09:34
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Stats.tsx
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import { StatsData } from "../data/StatsData";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox
              key={index}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
            >
              <Icon
                css={`
                  color: ${item.color};
                `}
              >
                {item.icon}
              </Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          );
        })}
      </Wrapper>
    </StatsContainer>
  );
};

export default Stats;

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc(100vw - 1300px) / 2;
`;

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StatsBox = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

const Description = styled.p``;
