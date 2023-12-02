import { useEffect, useRef } from "react";


export function useAnimate(){
    const titleRef = useRef(null);
  const descripition = useRef(null);
  const btn = useRef(null);
  const figureRef = useRef(null);
  const bodyFigureFer = useRef(null);

    const title = titleRef.current;
    const descri = descripition.current;
    const button = btn.current;
    const figure = figureRef.current;
    const bodyFig = bodyFigureFer.current;
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    //Animation Gsap
    tl.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
      .fromTo(
        descri,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
      .fromTo(
        button,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .fromTo(
        figure,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .fromTo(
        bodyFig,
        {
          opacity: 0,
          width: 0,
        },
        {
          opacity: 1,
          width: 500,
          duration: 1,
        }
      );
 

    return{
         titleRef,
         button,
         figureRef,
         descripition,
         bodyFigureFer
    }
}