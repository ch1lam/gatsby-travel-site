/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-04-01 18:46:54
 * @LastEditTime : 2022-04-13 21:38:58
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\components\Email.tsx
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import EmailBg from "../assets/images/email.jpg";
import { Button } from "./Button";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Email = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -100 },
  };
  const variants2 = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
    hidden: { opacity: 0, y: -100 },
  };

  const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <EmailContainer>
      <EmailContent>
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          Get Access to Exclusive Offers
        </motion.h1>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants2}
        >
          Sign up for your newsletter below to get $100off your first trip
        </motion.p>
        <form action="#">
          <FormWrap
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants3}
          >
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button
              as="button"
              type="submit"
              $primary
              $round
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 480px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  );
};

export default Email;

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: center;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`;

const FormWrap = styled(motion.div)`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`;
