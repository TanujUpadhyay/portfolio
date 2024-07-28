import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import stealth from "../../assets/images/stealth.jpeg";
import { Page } from "../../components/Page";
import { blue, green, pink } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            Enthusiastic Software Engineer with experience
            in developing innovative projects and
            collaborating with cross-functional teams.
            Skilled in full-stack development and project
            management, with a strong background in realtime
            communication and multimedia
            integration. Capable of overseeing projects,
            leading teams, and contributing actively to
            software development. Eager to bring my
            passion for technology and expertise to
            contribute to pioneering projects that drive
            impact and innovation.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Indira Gandhi National Open University",
                p: "Master of Computer Application (2020-2022)",
                image: stealth, // Add the path to the MCA image
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Indira Gandhi National Open University",
                p: "Bachelors of Computer Application (2017-2020)",
                image: stealth, // Add the path to the BCA image
              }}
            />

            <AboutItem
              color={pink}
              data={{
                title: "DAV Public School",
                p: "Pass out 12th class PCM (2017)",
                image: stealth, // Add the path to the BCA image
              }}
            />
          </Educations>

        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
