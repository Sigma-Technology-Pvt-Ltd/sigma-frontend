import React, { useEffect, useRef } from "react";
import { VideoContainer } from "./styles";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import YoutubeVideo from "./YoutubeVideo";
import { Container } from "react-bootstrap";

const VideoBox = () => {
      useEffect(() => {
            const videoElement = document.getElementById("your-video-id");

            if (videoElement) {
                  gsap.to(videoElement, {
                        scrollTrigger: {
                              trigger: videoElement,
                              start: "top center", // Adjust this based on when you want the animation to start
                              end: "bottom center", // Adjust this based on when you want the animation to end
                              scrub: true,
                        },
                        width: "100%",
                        ease: "power2.out", // Choose an easing function for smooth transition
                  });
            }
      }, []);

      return (
            <>
                  <VideoContainer>
                        <YoutubeVideo />
                  </VideoContainer>
            </>
      );
};

export default VideoBox;
