import { MotionValue } from "motion/react";


export type ScreenContextType = {
    isMobile:boolean;
    currentBreakpoint:string;
};


export interface ScrollContextType {
    windowHeight: number; // Represents a processed value for Y-axis scrolling
    setWindowHeight: (value: number) => void; // Function to update scrollYPro
    windowScrollHeight: number; // Represents a processed value for Y-axis scrolling
    setWindowScrollHeight: (value: number) => void; // Function to update scrollYPro
    dynamicIncrement: (value: number) => number; // Function to update scrollYPro
    halfCtn:number,
    qtrCtn:number,
    halfThirdCtn:number,
    twoThirdsCtn:number,
    eightyFiveHundredthsCtn:number,
    oneThirdCtn:number;
    threeQtrCtn:number,
    threeEighthsCtn:number,
    eighthCtn:number,
    fiveEightsCtn:number,
    sevenEightsCtn:number,
    scrollY:MotionValue,
    scrollYProgress:MotionValue,
}