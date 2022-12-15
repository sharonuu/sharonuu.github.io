/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        baloo : 'baloo',
        somatic: 'Somatic',
        comfortaa: 'Comfortaa',
      }
      ,
    },
  },
  plugins: [
    // Components
    ({ addComponents }) => {
      addComponents({
          ".container": {
              "@apply max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto": {},
          },
          ".btn": {
              "@apply rounded-[30px] focus:opacity-80 cursor-pointer": {},
          },
      });
  },
  // Animations
  ({ matchUtilities }) => {
      matchUtilities(
          {
              "animate-duration": (value) => {
                  return { "animation-duration": value };
              },
              "animate-delay": (value) => {
                  return { "animation-delay": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );

      matchUtilities(
          {
              "animate-play": (value) => {
                  return { "animation-play-state": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
                  paused: "paused",
                  running: "running",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );

      matchUtilities(
          {
              "animate-iteration": (value) => {
                  return { "animation-iteration-count": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
                  infinite: "infinite",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );

      matchUtilities(
          {
              "animate-fill": (value) => {
                  return { "animation-fill-mode": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
                  none: "none",
                  forwards: "forwards",
                  backwards: "backwards",
                  both: "both",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );

      matchUtilities(
          {
              "animate-direction": (value) => {
                  return { "animation-direction": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
                  "alternate-reverse": "alternate-reverse",
                  alternate: "alternate",
                  reverse: "reverse",
                  normal: "normal",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );

      matchUtilities(
          {
              "animate-timing": (value) => {
                  return { "animation-timing-function": value };
              },
          },
          {
              values: {
                  initial: "initial",
                  inherit: "inherit",
                  "step-end": "step-end",
                  "step-start": "step-start",
                  "ease-in-out": "ease-in-out",
                  "ease-out": "ease-out",
                  "ease-in": "ease-in",
                  ease: "ease",
                  linear: "linear",
              },
              variants: ["responsive", "motion-safe", "motion-reduce"],
              type: "any",
          }
      );
  },
  ],
}