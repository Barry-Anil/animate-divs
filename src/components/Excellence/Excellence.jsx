/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Excellence = ({ focusArea, className, text = "01", text1 = "EXCELLENCE" }) => {
  const [state, dispatch] = useReducer(reducer, {
    focusArea: focusArea || "default",
  });

  return (
    <div
      className={`border-primary-100 flex items-center p-[10px] relative w-[350px] rounded-[300px] gap-[10px] border-[3px] border-solid h-[350px] justify-center ${
        state.focusArea === "hover" ? "[-webkit-backdrop-filter:blur(37px)_brightness(100%)]" : ""
      } ${state.focusArea === "hover" ? "backdrop-blur-[37px] backdrop-brightness-[100%]" : ""} ${
        state.focusArea === "hover" ? "bg-[#54614980]" : ""
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="inline-flex flex-col items-start flex-[0_0_auto] justify-center relative">
        <div className="font-secondary-body-2 w-fit mt-[-1.00px] tracking-[var(--secondary-body-2-letter-spacing)] text-[length:var(--secondary-body-2-font-size)] [font-style:var(--secondary-body-2-font-style)] text-primary-50 font-[number:var(--secondary-body-2-font-weight)] leading-[var(--secondary-body-2-line-height)] whitespace-nowrap relative">
          {text}
        </div>
        <div className="font-primary-h4 w-fit tracking-[var(--primary-h4-letter-spacing)] [font-style:var(--primary-h4-font-style)] text-[length:var(--primary-h4-font-size)] text-primary-50 font-[number:var(--primary-h4-font-weight)] leading-[var(--primary-h4-line-height)] whitespace-nowrap relative">
          {text1}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        focusArea: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        focusArea: "default",
      };
  }

  return state;
}
