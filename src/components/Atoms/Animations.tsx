import React from "react";
import { TimelineMax, TweenMax } from "gsap";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

interface IAnimationProps {
  targetClass: string;
  animationType?: "fadeInLeft" | "fadeIn" | "fadeInRight" | string;
  duration?: number | string;
  offset?: number | string;
  triggerHook?: "onEnter" | "onLeave" | number;
  children: any;
  className?: string;
}

const Animations = ({
  targetClass,
  animationType,
  duration,
  offset,
  triggerHook,
  children,
  className,
}: IAnimationProps) => {
  React.useEffect(() => {
    let controller = new ScrollMagic.Controller();

    let tween = gsap.fromTo(
      `.${targetClass}`,
      { opacity: 0, x: -1000 },
      { opacity: 1, x: 0, duration: 1 }
    );

    new ScrollMagic.Scene({
      triggerElement: `.${targetClass}`, // selects which class to target
      duration: duration, // the scene should last for a scroll distance of 100px
      offset: offset, // start this scene after scrolling for 50px
      triggerHook: triggerHook, // start scene at triggerHook = 0 (the top)
    })
      .setTween(tween)
      .addTo(controller); // assign the scene to the controller

    //eslint-disable-next-line
  }, [targetClass]);

  return <div className={`${targetClass} ${className}`}>{children}</div>;
};

Animations.defaultProps = {
  animationType: "fadeInLeft",
  duration: "100",
  offset: "100",
  triggerHook: 1,
};

export default Animations;
