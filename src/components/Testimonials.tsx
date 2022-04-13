/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-31 19:55:36
 * @LastEditTime : 2022-04-13 21:38:56
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Testimonials.tsx
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100 },
  };
  const variants2 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -100 },
  };

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);
  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <TestimonialsContainer>
      <TopLine
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        Testimonials
      </TopLine>
      <Description
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={variants}
          >
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michael</h3>
            <p>
              {" "}
              "The greatest experience of my life! It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accommodation."
            </p>
          </Testimonial>
          <Testimonial
            ref={ref3}
            animate={controls3}
            initial="hidden"
            variants={variants}
          >
            <FaRegLightbulb
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Kin</h3>
            <p>
              "It was so easy to set up my trip! They answered all my questions
              right away and gave me the best price out of all the companies I
              researched."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          ref={ref4}
          animate={controls4}
          initial="hidden"
          variants={variants2}
        >
          {data.allFile.nodes.map((item: any, key: any) => {
            return <Images image={getImage(item)!} alt="guy" key={key} />;
          })}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
`;

const TopLine = styled(motion.p)`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;

const Description = styled(motion.p)`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Testimonial = styled(motion.div)`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`;

const ColumnTwo = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Images = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`;
