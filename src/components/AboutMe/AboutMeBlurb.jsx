import { useContext } from "react";
import Button3D from "../common/Button3D";
import LinkUnderline from "../common/LinkUnderline";
import { ObserverContext } from "../../context/ObserverContext";
import { motion } from "framer-motion";

export default function AboutMeBlurb() {
  const { setClicked, slideUpVariant, slideRightVariant, slideLeftVariant } =
    useContext(ObserverContext);
  return (
    <section className="blurb">
      <div className="aboutMe__blurb wrapper">
        <div>
          <p>
            I started my programming journey a while ago - as a restless
            teenager, I was always looking for creative projects to get stuck
            into, and computers seemed to offer a lot of fun possibilities -
            whether it was tinkering with basic music software, or amateur
            attempts at web dev.
          </p>
          <p>
            A good number of friends and I shared a love of video games, so
            naturally I went all-in and built a fan website offering reviews and
            content on the PS2 - a state-of-the-art console with photo-realistic
            graphics, if you can imagine it. I hacked together a layout with the
            aid of HTML tables (how everything on the web was built back then)
            and the equally modern FrontPage Express (WYSIWGY editor
            discontinued as of 2006), along with some (probably very
            cringeworthy) tributes to the review magazines we used to read.
          </p>
        </div>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.3 }}
        >
          <p>
            Despite all of this natural curiosity in the days of dial-up
            internet, I didn't originally pursue coding as a career - I had a
            number of interests which initially took me in other directions,
            towards studying in the arts and working for charitable
            organisations.
          </p>
          <p>
            Years later, something 'clicked.' Picking up audio software, I
            realised that I was making heavy use of something called a ‘logical
            editor,’ writing scripts for software samplers, and diving deep into
            'programming' tracks with sequencers or Elektron devices
            (conditional trigs, anyone?). In my job, I gravitated towards
            problem-solving through process automation and by writing programs
            and macros (leading to my
            <LinkUnderline
              text="Direct Debit Calendar app"
              href="../projects/directDebits"
            />
            ).
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
            <img src="../images/Guitar.png" alt="Playing guitar" />
          </div>
          <div>
            <img src="../images/jamie-2.jpg" alt="Playing piano" />
          </div>
        </motion.div>

        <motion.div
          variants={slideLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px", amount: 0.5 }}
        >
          <p>
            Since then, I've come full circle. I have been intensively
            self-teaching programming (thanks to a wealth of online resources,
            and mentors in the field) - you can see what I've been working on as
            I learn
            <LinkUnderline
              text="here"
              href="/"
              onClick={() => setClicked("Projects")}
            />
            . I'm excited to keep learning and to bring this to a career in
            tech.
          </p>
          <p>
            If you like my work and would like to contact me or build something
            together, I'd love to hear from you:
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
