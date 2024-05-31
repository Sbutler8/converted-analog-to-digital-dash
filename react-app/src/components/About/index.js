import { useState } from "react";
import AboutTwo from "../AboutTwo/index";
import { Modal } from "../../context/Modal";
import "./About.css";

const About = ({ showAbout, setShowAbout }) => {
  const [showAbout2, setShowAbout2] = useState(false);

  return (
    <>
      {showAbout && (
        <>
          <div className="about-header">About</div>
          <p className="about-body">
            This application is for users who love the latest and greatest
            trends in today's automotive industry. I have had a dream of
            converting my old 1988 Mazda's analog dashboard into a digital touch
            screen. This app is meant to mimic the conversion of an older cars
            analog dashboard to that of a newer digital dashboard. In order to
            do so realistically one would connect a raspberryPi and Arduino to
            the On Board Diagnostics (OBD) Port in their car via serial cable.
            Nearly every car made after 1996 has an OBD2 port which can send
            parameter IDs, making it possible to extract human-readable data
            from your car such as speed, RPM, throttle position, and much more.
          </p>
          <i
            className="fas fa-arrow-circle-right"
            onClick={() => {
              setShowAbout2(true);
            }}
          ></i>
          <br></br>
          <br></br>
          <br></br>
          <p className="about-body">
            Ideally, this custom app will be robust enough to take in any cars
            serial data and parse it into meaningful signals and data displayed
            on a new digital touch screen no matter how old the car. With that
            being said, in order to narrow down the complexity and get a feel
            for the application in full I have "mimicked" some of the signals a
            car might emit using the Arduino Uno microcontroller. The hardware
            connected to the Arduino is reading serial data in real time and
            sending it to the current dashboard display. Want to give it a spin?
            Check out the wiring diagram found on the next page. Don't have the
            hardware? Don't worry I have created full-blown functionality
            through just the web-app itself.{" "}
          </p>
        </>
      )}
      {showAbout2 && (
        <>
          <Modal onClose={() => setShowAbout2(false)} name="about">
            <AboutTwo
              setShowAbout={setShowAbout}
              showAbout2={showAbout2}
              setShowAbout2={setShowAbout2}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default About;
