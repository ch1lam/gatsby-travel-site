/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-04-01 18:10:00
 * @LastEditTime : 2022-04-22 15:56:46
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Stats.tsx
 */
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { StatsData } from "../data/StatsData";

const Stats = () => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
