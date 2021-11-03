import React from "react";
import { TimelineMax, TweenMax } from "gsap";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const App = () => {
  React.useEffect(() => {
    let controller = new ScrollMagic.Controller();

    let timeLine = gsap.timeline();

    timeLine.fromTo(
      ".anime1",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.inOut",
      }
    );
    
    timeLine.fromTo(
        ".anime2",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: "-=0.5",
          ease: "power2.inOut",
        }
      );

      
    timeLine.fromTo(
        ".anime3",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: "0",
          ease: "power2.inOut",
        }
      );

    new ScrollMagic.Scene({
      triggerElement: ".triggerOnMe",
      triggerHook: 1,
      duration: "50%",
    })
      .setTween(timeLine)
      .addTo(controller);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="triggerOnMe"
    >
      <div className="card anime1">
        <div className="card-body">
          <h1>Hello World</h1>
        </div>
      </div>

      <div className="card anime2">
        <div className="card-body">
          <h1>Hello World</h1>
        </div>
      </div>

      <div className="card anime3">
        <div className="card-body">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default App;

