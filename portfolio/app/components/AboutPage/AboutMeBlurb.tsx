"use client";

import { useContext } from "react";
import Button3D from "../ui/Button3D";
import LinkUnderline from "../ui/LinkUnderline";
import { ObserverContext } from "@/app/context/ObserverContext";
import { motion } from "framer-motion";
import ResponsiveImg from "../ui/ResponsiveImg";

export default function AboutMeBlurb() {
  const { setClicked, slideUpVariant, slideRightVariant, slideLeftVariant } =
    useContext(ObserverContext);
  return (
    <section className="blurb">
      <div className="aboutMe__blurb wrapper">
        <div>
          <p>
            I started my programming journey quite a while ago, but only
            recently decided to make it a career. As someone always looking for
            creative projects to get stuck into, computers seemed to offer many
            possibilities - originally this was tinkering with music software,
            or building review websites covering the (now officially ‘retro’)
            PS2, hacked together using HTML tables (how everything on the web
            was built back then) and the equally modern FrontPage Express
            (WYSIWGY editor discontinued as of 2006).
          </p>
          <p>
            It was a lot of fun in those early days, but my interests led me
            elsewhere. I pursued Philosophy at university, earning a Masters
            degree, and then built a career with charitable organizations like
            Cancer Research UK. There, I established myself as a skilled trainer
            and project manager in finance, contributing to a great cause.
          </p>
        </div>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.3 }}
        >
          <p>
            Over time, I felt an urge to return to something tech-related. To my
            surprise, I discovered a lot of crossover between my academic and
            professional experiences, and the world of programming. Both fields
            require breaking down complex ideas and processes into their
            component parts, much like understanding the logical flow of a piece
            of software. Only computers tend to be a little less forgiving...
          </p>
          <p>
            In late 2021, I committed to training as a full-stack developer
            alongside my charity career. This journey has been incredibly
            rewarding, evolving from self-training through online courses and
            mentorship to freelance projects and real-world solutions. One such
            project is a{" "}
            <LinkUnderline
              text="Direct Debit Calendar app"
              href="../projects/directDebits"
            />
            , now in production, automating critical processes for my
            organisation.
          </p>
        </motion.div>
        <motion.div
          className="imgcols-2"
          variants={slideRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.5 }}
        >
          <div>
            <ResponsiveImg fileName="Guitar.png" alt="Jamie playing guitar" />
          </div>
          <div>
            <ResponsiveImg fileName="Jamie-2.jpg" alt="Jamie playing piano" />
          </div>
        </motion.div>

        <motion.div
          variants={slideLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.5 }}
        >
          <p>
            You can see some of my previous{" "}
            <LinkUnderline
              text="projects"
              href="/"
              onClick={() => setClicked("My Work")}
            />{" "}
            and what I am working on now at my GitHub:
            <LinkUnderline text="here." href="https://github.com/JamieBarlow" />
          </p>
          <p>
            Currently I’m designing and building a full-stack CRUD application
            (at the request of numerous users) displaying information and
            reviews for public bathrooms, with an emphasis on accessibility and
            community collaboration using local knowledge. This makes use of the
            MERN stack and the{" "}
            <LinkUnderline
              text="Overpass API"
              href="https://wiki.openstreetmap.org/wiki/Overpass_API"
            />{" "}
            from{" "}
            <LinkUnderline
              text="Open Street Map"
              href="https://www.openstreetmap.org/#map=6/54.910/-3.432"
            />
            , a fantastic community-driven source of geographical data.
          </p>
          <p>
            I also enjoy deep-dives into web technology - check out my articles
            on{" "}
            <LinkUnderline text="dev.to." href="https://dev.to/jaybarls" />{" "}
          </p>
          <p>
            If my work resonates with you and you'd like to collaborate, I'd
            love to hear from you:
          </p>
        </motion.div>
        <motion.div
          className="hero__contact p-4"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.5 }}
        >
          <Button3D
            text="Get in touch"
            size="fs--h5"
            href="/"
            onClick={() => setClicked("Contact")}
          />
        </motion.div>
      </div>
    </section>
  );
}
