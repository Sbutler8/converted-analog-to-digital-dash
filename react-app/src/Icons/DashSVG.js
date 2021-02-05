import React from "react";
import './DashSVG.css';

const DashSVG = ({...props}) => {
    return (
   <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      width={800}
      height={480}
      viewBox="0 0 800 480"
      {...props}
    >
      <defs>
        <path
          fill="url(#prefix__a)"
          d="M241.25 90.25q-18.2-18.2-44-18.2t-44.05 18.2Q135 108.5 135 134.3q0 25.8 18.2 44 18.25 18.25 44.05 18.25 25.8 0 44-18.25 18.25-18.2 18.25-44t-18.25-44.05m-44-8.85q21.9 0 37.4 15.5t15.5 37.4q0 21.9-15.5 37.4t-37.4 15.5q-21.9 0-37.4-15.5t-15.5-37.4q0-21.9 15.5-37.4t37.4-15.5z"
          id="prefix__h"
        />
        <path
          fill="#0D6C8D"
          d="M241.25 90.25q-18.2-18.2-44-18.2t-44.05 18.2Q135 108.5 135 134.3q0 25.8 18.2 44 18.25 18.25 44.05 18.25 25.8 0 44-18.25 18.25-18.2 18.25-44t-18.25-44.05m-44-8.85q21.9 0 37.4 15.5t15.5 37.4q0 21.9-15.5 37.4t-37.4 15.5q-21.9 0-37.4-15.5t-15.5-37.4q0-21.9 15.5-37.4t37.4-15.5z"
          id="prefix__k"
        />
        <path
          fill="url(#prefix__d)"
          d="M-34.75 76.5h14.35q1.25 0 1.8.25.15.05.2.15 1.35-1.7 2.65-3.4H-33.6q-.55 1.5-1.15 3m-2.05 8.75q-.95 0-1.4-.15h-.05q-.8 2-1.7 4.05h9.85q.85 0 1.3.1 1.8-1.95 3.55-4H-36.8m12.2-2.75q1 0 1.55.2 1.4-1.7 2.8-3.45h-14.6q-.55 0-.95-.05-.65 1.65-1.35 3.35.25-.05.55-.05h12m19.1-23.65q1.35-2.05 2.6-4.1h-24.25q-.65 2.05-1.35 4.1h23m-4.2 5.75v.05q.15.05.3.05 1-1.45 2-2.95h-21.4q-.3-.1-.55-.15h-.05l-1 3h20.7m-4.5 6v.05l.5.1q1.15-1.6 2.3-3.25h-19.4q-.3-.1-.55-.15-.6 1.6-1.2 3.25h18.35m-26.9 21.15q-.446 1.02-.9 2.05-3.465 7.77-7.4 15.55 3.77-3.218 7.4-6.65 5.565-5.171 10.8-10.8l-9.25-.05q-.35-.05-.65-.1M-24.8 48q-.15-.05-.35-.1-.55 2-1.15 3.95h25.2Q.05 49.95 1.2 48h-26M23.35 1.15q1.15-2.9 2.2-5.9H-14.8q-.3 3-.7 6l38.85-.1M6.3 38.9q1.15-2.1 2.2-4.25-15.05 0-30.15-.05-.5 2.15-1.05 4.25h29v.05m3.75-7.25q1.05-2.05 2.05-4.15H-20q-.45 2.15-.95 4.25l30.7-.1h.3M2.85 45.1q.95-1.65 1.9-3.35h-28.2q-.4 1.7-.9 3.35h27.2m10.6-20.5q.9-1.9 1.8-3.85H-18.6q-.4 1.95-.8 3.85h32.85m3.1-6.75q1.05-2.35 2.05-4.75h-35.85q-.35 2.4-.8 4.75h34.6m3.2-7.7h.05q1.25-3 2.45-6.05h-38.1q-.4 3.1-.9 6.15l36.5-.1m18.2-56.3q1.05-4.2 2-8.45-26.75 0-53.55-.05.25 4.25.4 8.5h51.15m-11.4 38.5q1.05-2.9 2-5.85-21-.1-42-.15l-.5-.1q-.25 3.05-.55 6.1h41.05m3.05-8.95l1.8-5.7-.1-.1-44.7-.1q-.15 3.05-.35 6.05.1 0 .25-.05l43.1-.1m5.7-19.3q1-3.65 1.95-7.35h-50.4q.1 3.7.1 7.45l.3-.1H35.3m-3 10.55q1.15-3.8 2.2-7.65h-47.2l-.4-.1q-.05 3.85-.2 7.7h45.15q.2.05.4.05h.05m8.35-32.25q1.1-5.1 2.15-10.3h-57.45q.55 5.2.9 10.4l54.4-.1M45-87.8h1.35q1.7-10.55 3.05-21.55h-71.05q2.55 10.8 4.3 21.55H45m-1.65 17q.866-4.46 1.65-9 .438-2.538.85-5.1h-62.7q1.1 7.05 1.9 14.15.05-.05.1-.05h58.2z"
          id="prefix__u"
        />
        <path
          id="speedometer-fill"
          fill="#333"
          d="M352.65 177.65q5.7-47.8-20.4-88.65-26-40.8-72-56-46-15.1-91.15 2.45Q124 53 100.1 95.1q-23.9 42.15-15.7 89.55 8.25 47.5 44.65 79.35L146 244.55q-29.55-25.8-36.2-64.25-6.65-38.4 12.7-72.55 19.4-34.1 55.95-48.3 36.55-14.25 73.75-2 37.3 12.3 58.4 45.4 21.1 33.1 16.5 71.75-4.6 38.75-32.8 66.05l17.9 18.55q34.75-33.7 40.45-81.55z"
          id="prefix__v"
        />
        <path
          fill="#FFF"
          d="M466.45 314.7l-4.7 4.2 36.85 41.55 4.75-4.2-36.9-41.55z"
          id="prefix__w"
        />
        <path
          fill="#FFF"
          d="M466.45 314.7l-4.7 4.2 36.85 41.55 4.75-4.2-36.9-41.55z"
          id="prefix__x"
        />
        <path
          fill="#FFF"
          d="M544.05 233.55l-.55-4.95-43.7 5.05.55 5 43.7-5.1z"
          id="prefix__y"
        />
        <path
          fill="#FFF"
          d="M544.05 233.55l-.55-4.95-43.7 5.05.55 5 43.7-5.1z"
          id="prefix__z"
        />
        <path
          fill="#FFF"
          d="M471.95 122.9l-4.4-2.35-20.95 38.7 4.4 2.4 20.95-38.75z"
          id="prefix__A"
        />
        <path
          fill="#FFF"
          d="M471.95 122.9l-4.4-2.35-20.95 38.7 4.4 2.4 20.95-38.75z"
          id="prefix__B"
        />
        <path
          fill="#FFF"
          d="M339.95 118.55l-4.5 2.2 19.7 39.35 4.5-2.2-19.7-39.35z"
          id="prefix__C"
        />
        <path
          fill="#FFF"
          d="M339.95 118.55l-4.5 2.2 19.7 39.35 4.5-2.2-19.7-39.35z"
          id="prefix__D"
        />
        <path
          fill="#FFF"
          d="M303.4 235.5l.75-4.9-43.55-6.45-.7 4.95 43.5 6.4z"
          id="prefix__E"
        />
        <path
          fill="#FFF"
          d="M303.4 235.5l.75-4.9-43.55-6.45-.7 4.95 43.5 6.4z"
          id="prefix__F"
        />
        <path
          fill="#FFF"
          d="M480.25 318.75l-1.35 1.45 20.55 19 1.35-1.45-20.55-19z"
          id="prefix__G"
        />
        <path
          fill="#FFF"
          d="M480.25 318.75l-1.35 1.45 20.55 19 1.35-1.45-20.55-19z"
          id="prefix__H"
        />
        <path
          fill="#FFF"
          d="M483.65 314.75l-1.25 1.55 21.45 17.95 1.3-1.5-21.5-18z"
          id="prefix__I"
        />
        <path
          fill="#FFF"
          d="M483.65 314.75l-1.25 1.55 21.45 17.95 1.3-1.5-21.5-18z"
          id="prefix__J"
        />
        <path
          fill="#FFF"
          d="M508 329.1l1.2-1.6-22.3-16.85-1.2 1.6L508 329.1z"
          id="prefix__K"
        />
        <path
          fill="#FFF"
          d="M509.2 327.5l-22.3-16.85-1.2 1.6L508 329.1l1.2-1.6z"
          id="prefix__L"
        />
        <path
          fill="#FFF"
          d="M488.75 308l23.15 15.75 1.15-1.65-23.15-15.75-1.15 1.65z"
          id="prefix__M"
        />
        <path
          fill="#FFF"
          d="M513.05 322.1l-23.15-15.75-1.15 1.65 23.15 15.75 1.15-1.65z"
          id="prefix__N"
        />
        <path
          fill="#FFF"
          d="M491.65 303.65l23.9 14.6 1.05-1.7-23.9-14.6-1.05 1.7z"
          id="prefix__O"
        />
        <path
          fill="#FFF"
          d="M516.6 316.55l-23.9-14.6-1.05 1.7 23.9 14.6 1.05-1.7z"
          id="prefix__P"
        />
        <path
          fill="#FFF"
          d="M494.3 299.15l24.6 13.4.95-1.8-24.6-13.4-.95 1.8z"
          id="prefix__Q"
        />
        <path
          fill="#FFF"
          d="M519.85 310.75l-24.6-13.4-.95 1.8 24.6 13.4.95-1.8z"
          id="prefix__R"
        />
        <path
          fill="#FFF"
          d="M497.6 292.7l-.85 1.8 25.2 12.15.9-1.8-25.25-12.15z"
          id="prefix__S"
        />
        <path
          fill="#FFF"
          d="M497.6 292.7l-.85 1.8 25.2 12.15.9-1.8-25.25-12.15z"
          id="prefix__T"
        />
        <path
          fill="#FFF"
          d="M499.75 287.9l-.8 1.85 25.8 10.9.75-1.85-25.75-10.9z"
          id="prefix__U"
        />
        <path
          fill="#FFF"
          d="M499.75 287.9l-.8 1.85 25.8 10.9.75-1.85-25.75-10.9z"
          id="prefix__V"
        />
        <path
          fill="#FFF"
          d="M501.6 283l-.7 1.9 26.3 9.6.7-1.85-26.3-9.65z"
          id="prefix__W"
        />
        <path
          fill="#FFF"
          d="M501.6 283l-.7 1.9 26.3 9.6.7-1.85-26.3-9.65z"
          id="prefix__X"
        />
        <path
          fill="#FFF"
          d="M503.25 278.05l-.6 1.9 26.75 8.3.55-1.9-26.7-8.3z"
          id="prefix__Y"
        />
        <path
          fill="#FFF"
          d="M503.25 278.05l-.6 1.9 26.75 8.3.55-1.9-26.7-8.3z"
          id="prefix__Z"
        />
        <path
          fill="#FFF"
          d="M504.6 273l-.5 1.95 27.15 6.95.5-1.95L504.6 273z"
          id="prefix__aa"
        />
        <path
          fill="#FFF"
          d="M504.6 273l-.5 1.95 27.15 6.95.5-1.95L504.6 273z"
          id="prefix__ab"
        />
        <path
          fill="#FFF"
          d="M505.75 267.9l-.4 1.95 27.45 5.6.4-1.95-27.45-5.6z"
          id="prefix__ac"
        />
        <path
          fill="#FFF"
          d="M505.75 267.9l-.4 1.95 27.45 5.6.4-1.95-27.45-5.6z"
          id="prefix__ad"
        />
        <path
          fill="#FFF"
          d="M506.65 262.7l-.35 2 27.7 4.25.3-1.95-27.65-4.3z"
          id="prefix__ae"
        />
        <path
          fill="#FFF"
          d="M506.65 262.7l-.35 2 27.7 4.25.3-1.95-27.65-4.3z"
          id="prefix__af"
        />
        <path
          fill="#FFF"
          d="M507.25 257.5l-.2 2 27.85 2.9.2-2-27.85-2.9z"
          id="prefix__ag"
        />
        <path
          fill="#FFF"
          d="M507.25 257.5l-.2 2 27.85 2.9.2-2-27.85-2.9z"
          id="prefix__ah"
        />
        <path
          fill="#FFF"
          d="M507.6 252.3l-.1 2 27.95 1.5.15-2-28-1.5z"
          id="prefix__ai"
        />
        <path
          fill="#FFF"
          d="M507.6 252.3l-.1 2 27.95 1.5.15-2-28-1.5z"
          id="prefix__aj"
        />
        <path
          fill="#FFF"
          d="M508 248.85l27.95.15.05-1.9-28-.1v1.85z"
          id="prefix__ak"
        />
        <path
          fill="#FFF"
          d="M536 247.1l-28-.1v1.85l27.95.15.05-1.9z"
          id="prefix__al"
        />
        <path
          fill="#FFF"
          d="M535.65 242.6l-.1-2-28 1.25.1 2 28-1.25z"
          id="prefix__am"
        />
        <path
          fill="#FFF"
          d="M535.65 242.6l-.1-2-28 1.25.1 2 28-1.25z"
          id="prefix__an"
        />
        <path
          fill="#FFF"
          d="M533.45 222.85l-.4-1.95-27.5 5.35.4 2 27.5-5.4z"
          id="prefix__ao"
        />
        <path
          fill="#FFF"
          d="M533.45 222.85l-.4-1.95-27.5 5.35.4 2 27.5-5.4z"
          id="prefix__ap"
        />
        <path
          fill="#FFF"
          d="M532.05 216.4l-.45-1.95-27.2 6.7.45 1.95 27.2-6.7z"
          id="prefix__aq"
        />
        <path
          fill="#FFF"
          d="M532.05 216.4l-.45-1.95-27.2 6.7.45 1.95 27.2-6.7z"
          id="prefix__ar"
        />
        <path
          fill="#FFF"
          d="M530.35 210l-.55-1.9-26.85 8 .6 1.95 26.8-8.05z"
          id="prefix__as"
        />
        <path
          fill="#FFF"
          d="M530.35 210l-.55-1.9-26.85 8 .6 1.95 26.8-8.05z"
          id="prefix__at"
        />
        <path
          fill="#FFF"
          d="M528.35 203.7l-.65-1.9-26.4 9.35.65 1.9 26.4-9.35z"
          id="prefix__au"
        />
        <path
          fill="#FFF"
          d="M528.35 203.7l-.65-1.9-26.4 9.35.65 1.9 26.4-9.35z"
          id="prefix__av"
        />
        <path
          fill="#FFF"
          d="M526.05 197.5l-.75-1.85-25.9 10.65.75 1.85 25.9-10.65z"
          id="prefix__aw"
        />
        <path
          fill="#FFF"
          d="M526.05 197.5l-.75-1.85-25.9 10.65.75 1.85 25.9-10.65z"
          id="prefix__ax"
        />
        <path
          fill="#FFF"
          d="M523.4 191.4l-.85-1.8-25.35 11.9.9 1.85 25.3-11.95z"
          id="prefix__ay"
        />
        <path
          fill="#FFF"
          d="M523.4 191.4l-.85-1.8-25.35 11.9.9 1.85 25.3-11.95z"
          id="prefix__az"
        />
        <path
          fill="#FFF"
          d="M520.5 185.5l-.95-1.8-24.7 13.15.95 1.8 24.7-13.15z"
          id="prefix__aA"
        />
        <path
          fill="#FFF"
          d="M520.5 185.5l-.95-1.8-24.7 13.15.95 1.8 24.7-13.15z"
          id="prefix__aB"
        />
        <path
          fill="#FFF"
          d="M493.25 194.05l24.05-14.35-1.05-1.75-24.05 14.4 1.05 1.7z"
          id="prefix__aC"
        />
        <path
          fill="#FFF"
          d="M517.3 179.7l-1.05-1.75-24.05 14.4 1.05 1.7 24.05-14.35z"
          id="prefix__aD"
        />
        <path
          fill="#FFF"
          d="M490.5 189.6l23.3-15.55-1.1-1.65-23.3 15.5 1.1 1.7z"
          id="prefix__aE"
        />
        <path
          fill="#FFF"
          d="M513.8 174.05l-1.1-1.65-23.3 15.5 1.1 1.7 23.3-15.55z"
          id="prefix__aF"
        />
        <path
          fill="#FFF"
          d="M487.55 185.3l22.5-16.7-1.2-1.6-22.5 16.65 1.2 1.65z"
          id="prefix__aG"
        />
        <path
          fill="#FFF"
          d="M510.05 168.6l-1.2-1.6-22.5 16.65 1.2 1.65 22.5-16.7z"
          id="prefix__aH"
        />
        <path
          fill="#FFF"
          d="M506 163.35l-1.25-1.55-21.65 17.75 1.25 1.55L506 163.35z"
          id="prefix__aI"
        />
        <path
          fill="#FFF"
          d="M506 163.35l-1.25-1.55-21.65 17.75 1.25 1.55L506 163.35z"
          id="prefix__aJ"
        />
        <path
          fill="#FFF"
          d="M501.75 158.3l-1.35-1.45-20.75 18.8 1.3 1.45 20.8-18.8z"
          id="prefix__aK"
        />
        <path
          fill="#FFF"
          d="M501.75 158.3l-1.35-1.45-20.75 18.8 1.3 1.45 20.8-18.8z"
          id="prefix__aL"
        />
        <path
          fill="#FFF"
          d="M497.2 153.5l-1.4-1.4-19.8 19.8 1.4 1.4 19.8-19.8z"
          id="prefix__aM"
        />
        <path
          fill="#FFF"
          d="M497.2 153.5l-1.4-1.4-19.8 19.8 1.4 1.4 19.8-19.8z"
          id="prefix__aN"
        />
        <path
          fill="#FFF"
          d="M492.45 148.9l-1.5-1.35-18.8 20.75 1.5 1.35 18.8-20.75z"
          id="prefix__aO"
        />
        <path
          fill="#FFF"
          d="M492.45 148.9l-1.5-1.35-18.8 20.75 1.5 1.35 18.8-20.75z"
          id="prefix__aP"
        />
        <path
          fill="#FFF"
          d="M468.15 164.9l1.55 1.3 17.75-21.65-1.55-1.3-17.75 21.65z"
          id="prefix__aQ"
        />
        <path
          fill="#FFF"
          d="M468.15 164.9l1.55 1.3 17.75-21.65-1.55-1.3-17.75 21.65z"
          id="prefix__aR"
        />
        <path
          fill="#FFF"
          d="M482.25 140.45l-1.6-1.2-16.65 22.5 1.6 1.2 16.65-22.5z"
          id="prefix__aS"
        />
        <path
          fill="#FFF"
          d="M482.25 140.45l-1.6-1.2-16.65 22.5 1.6 1.2 16.65-22.5z"
          id="prefix__aT"
        />
        <path
          fill="#FFF"
          d="M476.9 136.6l-1.7-1.15-15.5 23.3 1.65 1.15 15.55-23.3z"
          id="prefix__aU"
        />
        <path
          fill="#FFF"
          d="M476.9 136.6l-1.7-1.15-15.5 23.3 1.65 1.15 15.55-23.3z"
          id="prefix__aV"
        />
        <path
          fill="#FFF"
          d="M453.65 124l-1.85-.75-10.65 25.85 1.85.8 10.65-25.9z"
          id="prefix__aW"
        />
        <path
          fill="#FFF"
          d="M453.65 124l-1.85-.75-10.65 25.85 1.85.8 10.65-25.9z"
          id="prefix__aX"
        />
        <path
          fill="#FFF"
          d="M447.5 121.55l-1.9-.65-9.35 26.4 1.85.65 9.4-26.4z"
          id="prefix__aY"
        />
        <path
          fill="#FFF"
          d="M447.5 121.55l-1.9-.65-9.35 26.4 1.85.65 9.4-26.4z"
          id="prefix__aZ"
        />
        <path
          fill="#FFF"
          d="M433.15 146.3l8.05-26.85-1.9-.55-8.05 26.8 1.9.6z"
          id="prefix__ba"
        />
        <path
          fill="#FFF"
          d="M441.2 119.45l-1.9-.55-8.05 26.8 1.9.6 8.05-26.85z"
          id="prefix__bb"
        />
        <path
          fill="#FFF"
          d="M428.1 144.85l6.75-27.2-1.95-.45-6.7 27.2 1.9.45z"
          id="prefix__bc"
        />
        <path
          fill="#FFF"
          d="M434.85 117.65l-1.95-.45-6.7 27.2 1.9.45 6.75-27.2z"
          id="prefix__bd"
        />
        <path
          fill="#FFF"
          d="M423 143.7l5.4-27.5-1.95-.4-5.4 27.5 1.95.4z"
          id="prefix__be"
        />
        <path
          fill="#FFF"
          d="M428.4 116.2l-1.95-.4-5.4 27.5 1.95.4 5.4-27.5z"
          id="prefix__bf"
        />
        <path
          fill="#FFF"
          d="M417.85 142.75l4.05-27.7-2-.3-4 27.7 1.95.3z"
          id="prefix__bg"
        />
        <path
          fill="#FFF"
          d="M421.9 115.05l-2-.3-4 27.7 1.95.3 4.05-27.7z"
          id="prefix__bh"
        />
        <path
          fill="#FFF"
          d="M412.7 142.1l2.6-27.9-2-.2-2.6 27.9 2 .2z"
          id="prefix__bi"
        />
        <path
          fill="#FFF"
          d="M415.3 114.2l-2-.2-2.6 27.9 2 .2 2.6-27.9z"
          id="prefix__bj"
        />
        <path
          fill="#FFF"
          d="M407.45 141.65l1.25-27.95-2-.1-1.25 28 2 .05z"
          id="prefix__bk"
        />
        <path
          fill="#FFF"
          d="M408.7 113.7l-2-.1-1.25 28 2 .05 1.25-27.95z"
          id="prefix__bl"
        />
        <path
          fill="#FFF"
          d="M402 141.95l-.15-27.95H400l.1 28 1.9-.05z"
          id="prefix__bm"
        />
        <path
          fill="#FFF"
          d="M402 141.95l-.15-27.95H400l.1 28 1.9-.05z"
          id="prefix__bn"
        />
        <path
          fill="#FFF"
          d="M397 141.6l-1.5-27.95-2 .1 1.5 28 2-.15z"
          id="prefix__bo"
        />
        <path
          fill="#FFF"
          d="M397 141.6l-1.5-27.95-2 .1 1.5 28 2-.15z"
          id="prefix__bp"
        />
        <path
          fill="#FFF"
          d="M391.75 142l-2.85-27.85-2 .2 2.9 27.85 1.95-.2z"
          id="prefix__bq"
        />
        <path
          fill="#FFF"
          d="M391.75 142l-2.85-27.85-2 .2 2.9 27.85 1.95-.2z"
          id="prefix__br"
        />
        <path
          fill="#FFF"
          d="M386.55 142.6l-4.25-27.65-1.95.3 4.25 27.65 1.95-.3z"
          id="prefix__bs"
        />
        <path
          fill="#FFF"
          d="M386.55 142.6l-4.25-27.65-1.95.3 4.25 27.65 1.95-.3z"
          id="prefix__bt"
        />
        <path
          fill="#FFF"
          d="M381.4 143.5l-5.6-27.45-1.95.4 5.6 27.45 1.95-.4z"
          id="prefix__bu"
        />
        <path
          fill="#FFF"
          d="M381.4 143.5l-5.6-27.45-1.95.4 5.6 27.45 1.95-.4z"
          id="prefix__bv"
        />
        <path
          fill="#FFF"
          d="M376.3 144.6l-6.95-27.1-1.95.5 6.95 27.1 1.95-.5z"
          id="prefix__bw"
        />
        <path
          fill="#FFF"
          d="M376.3 144.6l-6.95-27.1-1.95.5 6.95 27.1 1.95-.5z"
          id="prefix__bx"
        />
        <path
          fill="#FFF"
          d="M369.35 146.6l1.9-.6-8.3-26.75-1.9.6 8.3 26.75z"
          id="prefix__by"
        />
        <path
          fill="#FFF"
          d="M369.35 146.6l1.9-.6-8.3-26.75-1.9.6 8.3 26.75z"
          id="prefix__bz"
        />
        <path
          fill="#FFF"
          d="M356.65 121.3l-1.85.7 9.6 26.3 1.85-.7-9.6-26.3z"
          id="prefix__bA"
        />
        <path
          fill="#FFF"
          d="M354.8 122l9.6 26.3 1.85-.7-9.6-26.3-1.85.7z"
          id="prefix__bB"
        />
        <path
          fill="#FFF"
          d="M350.5 123.7l-1.85.8 10.9 25.75 1.85-.75-10.9-25.8z"
          id="prefix__bC"
        />
        <path
          fill="#FFF"
          d="M350.5 123.7l-1.85.8 10.9 25.75 1.85-.75-10.9-25.8z"
          id="prefix__bD"
        />
        <path
          fill="#FFF"
          d="M332.75 132.6l-1.7 1.05 14.6 23.9 1.7-1.05-14.6-23.9z"
          id="prefix__bE"
        />
        <path
          fill="#FFF"
          d="M332.75 132.6l-1.7 1.05 14.6 23.9 1.7-1.05-14.6-23.9z"
          id="prefix__bF"
        />
        <path
          fill="#FFF"
          d="M327.2 136.15l-1.7 1.15 15.75 23.15 1.65-1.15-15.7-23.15z"
          id="prefix__bG"
        />
        <path
          fill="#FFF"
          d="M327.2 136.15l-1.7 1.15 15.75 23.15 1.65-1.15-15.7-23.15z"
          id="prefix__bH"
        />
        <path
          fill="#FFF"
          d="M337.05 163.55l1.6-1.25-16.9-22.3-1.6 1.2 16.9 22.35z"
          id="prefix__bI"
        />
        <path
          fill="#FFF"
          d="M337.05 163.55l1.6-1.25-16.9-22.3-1.6 1.2 16.9 22.35z"
          id="prefix__bJ"
        />
        <path
          fill="#FFF"
          d="M333 166.8l1.5-1.25-17.95-21.5-1.55 1.3 18 21.45z"
          id="prefix__bK"
        />
        <path
          fill="#FFF"
          d="M333 166.8l1.5-1.25-17.95-21.5-1.55 1.3 18 21.45z"
          id="prefix__bL"
        />
        <path
          fill="#FFF"
          d="M329.1 170.3l1.45-1.35-19-20.55-1.45 1.35 19 20.55z"
          id="prefix__bM"
        />
        <path
          fill="#FFF"
          d="M329.1 170.3l1.45-1.35-19-20.55-1.45 1.35 19 20.55z"
          id="prefix__bN"
        />
        <path
          fill="#FFF"
          d="M325.35 174l1.4-1.45-20-19.6-1.4 1.45 20 19.6z"
          id="prefix__bO"
        />
        <path
          fill="#FFF"
          d="M325.35 174l1.4-1.45-20-19.6-1.4 1.45 20 19.6z"
          id="prefix__bP"
        />
        <path
          fill="#FFF"
          d="M323.15 176.35l-20.95-18.6-1.3 1.5 20.9 18.6 1.35-1.5z"
          id="prefix__bQ"
        />
        <path
          fill="#FFF"
          d="M323.15 176.35l-20.95-18.6-1.3 1.5 20.9 18.6 1.35-1.5z"
          id="prefix__bR"
        />
        <path
          fill="#FFF"
          d="M319.75 180.35L297.9 162.8l-1.25 1.55 21.85 17.55 1.25-1.55z"
          id="prefix__bS"
        />
        <path
          fill="#FFF"
          d="M319.75 180.35L297.9 162.8l-1.25 1.55 21.85 17.55 1.25-1.55z"
          id="prefix__bT"
        />
        <path
          fill="#FFF"
          d="M316.5 184.45L293.85 168l-1.2 1.65 22.7 16.45 1.15-1.65z"
          id="prefix__bU"
        />
        <path
          fill="#FFF"
          d="M316.5 184.45L293.85 168l-1.2 1.65 22.7 16.45 1.15-1.65z"
          id="prefix__bV"
        />
        <path
          fill="#FFF"
          d="M313.5 188.75l-23.45-15.3-1.1 1.65 23.45 15.3 1.1-1.65z"
          id="prefix__bW"
        />
        <path
          fill="#FFF"
          d="M313.5 188.75l-23.45-15.3-1.1 1.65 23.45 15.3 1.1-1.65z"
          id="prefix__bX"
        />
        <path
          fill="#FFF"
          d="M310.7 193.15l-24.15-14.1-1.05 1.7 24.2 14.15 1-1.75z"
          id="prefix__bY"
        />
        <path
          fill="#FFF"
          d="M310.7 193.15l-24.15-14.1-1.05 1.7 24.2 14.15 1-1.75z"
          id="prefix__bZ"
        />
        <path
          fill="#FFF"
          d="M283.3 184.8l-.95 1.8 24.85 12.9.95-1.75-24.85-12.95z"
          id="prefix__ca"
        />
        <path
          fill="#FFF"
          d="M283.3 184.8l-.95 1.8 24.85 12.9.95-1.75-24.85-12.95z"
          id="prefix__cb"
        />
        <path
          fill="#FFF"
          d="M280.35 190.75l-.85 1.8 25.45 11.7.85-1.85-25.45-11.65z"
          id="prefix__cc"
        />
        <path
          fill="#FFF"
          d="M280.35 190.75l-.85 1.8 25.45 11.7.85-1.85-25.45-11.65z"
          id="prefix__cd"
        />
        <path
          fill="#FFF"
          d="M302.95 209.05l.75-1.85-26-10.4-.75 1.85 26 10.4z"
          id="prefix__ce"
        />
        <path
          fill="#FFF"
          d="M302.95 209.05l.75-1.85-26-10.4-.75 1.85 26 10.4z"
          id="prefix__cf"
        />
        <path
          fill="#FFF"
          d="M301.15 214l.65-1.9-26.45-9.1-.65 1.9 26.45 9.1z"
          id="prefix__cg"
        />
        <path
          fill="#FFF"
          d="M301.15 214l.65-1.9-26.45-9.1-.65 1.9 26.45 9.1z"
          id="prefix__ch"
        />
        <path
          fill="#FFF"
          d="M299.65 219l.55-1.95-26.9-7.75-.55 1.9 26.9 7.8z"
          id="prefix__ci"
        />
        <path
          fill="#FFF"
          d="M299.65 219l.55-1.95-26.9-7.75-.55 1.9 26.9 7.8z"
          id="prefix__cj"
        />
        <path
          fill="#FFF"
          d="M298.35 224.05l.45-1.95-27.25-6.45-.45 1.95 27.25 6.45z"
          id="prefix__ck"
        />
        <path
          fill="#FFF"
          d="M298.35 224.05l.45-1.95-27.25-6.45-.45 1.95 27.25 6.45z"
          id="prefix__cl"
        />
        <path
          fill="#FFF"
          d="M296 239.6l.2-2-27.9-2.35-.2 2 27.9 2.35z"
          id="prefix__cm"
        />
        <path
          fill="#FFF"
          d="M296 239.6l.2-2-27.9-2.35-.2 2 27.9 2.35z"
          id="prefix__cn"
        />
        <path
          fill="#FFF"
          d="M295.75 244.8l.05-2-27.95-.95-.1 2 28 .95z"
          id="prefix__co"
        />
        <path
          fill="#FFF"
          d="M295.75 244.8l.05-2-27.95-.95-.1 2 28 .95z"
          id="prefix__cp"
        />
        <path
          fill="#FFF"
          d="M268 248.3v1.7l28-.35-.05-1.65-27.95.3z"
          id="prefix__cq"
        />
        <path
          fill="#FFF"
          d="M268 248.3v1.7l28-.35-.05-1.65-27.95.3z"
          id="prefix__cr"
        />
        <path
          fill="#FFF"
          d="M267.95 255.05l.1 2L296 255.3l-.15-2-27.9 1.75z"
          id="prefix__cs"
        />
        <path
          fill="#FFF"
          d="M267.95 255.05l.1 2L296 255.3l-.15-2-27.9 1.75z"
          id="prefix__ct"
        />
        <path
          fill="#FFF"
          d="M268.45 261.65l.25 2 27.8-3.15-.2-2-27.85 3.15z"
          id="prefix__cu"
        />
        <path
          fill="#FFF"
          d="M268.45 261.65l.25 2 27.8-3.15-.2-2-27.85 3.15z"
          id="prefix__cv"
        />
        <path
          fill="#FFF"
          d="M269.35 268.25l.3 1.95 27.65-4.55-.35-1.95-27.6 4.55z"
          id="prefix__cw"
        />
        <path
          fill="#FFF"
          d="M269.35 268.25l.3 1.95 27.65-4.55-.35-1.95-27.6 4.55z"
          id="prefix__cx"
        />
        <path
          fill="#FFF"
          d="M270.5 274.75l.45 1.95 27.35-5.9-.4-1.95-27.4 5.9z"
          id="prefix__cy"
        />
        <path
          fill="#FFF"
          d="M270.5 274.75l.45 1.95 27.35-5.9-.4-1.95-27.4 5.9z"
          id="prefix__cz"
        />
        <path
          fill="#FFF"
          d="M272 281.2l.55 1.9 27.05-7.2-.55-1.95L272 281.2z"
          id="prefix__cA"
        />
        <path
          fill="#FFF"
          d="M272 281.2l.55 1.9 27.05-7.2-.55-1.95L272 281.2z"
          id="prefix__cB"
        />
        <path
          fill="#FFF"
          d="M273.85 287.55l.6 1.9 26.65-8.55-.6-1.9-26.65 8.55z"
          id="prefix__cC"
        />
        <path
          fill="#FFF"
          d="M273.85 287.55l.6 1.9 26.65-8.55-.6-1.9-26.65 8.55z"
          id="prefix__cD"
        />
        <path
          fill="#FFF"
          d="M275.95 293.8l.7 1.9 26.2-9.9-.7-1.85-26.2 9.85z"
          id="prefix__cE"
        />
        <path
          fill="#FFF"
          d="M275.95 293.8l.7 1.9 26.2-9.9-.7-1.85-26.2 9.85z"
          id="prefix__cF"
        />
        <path
          fill="#FFF"
          d="M304.9 290.65l-.8-1.85-25.7 11.15.8 1.85 25.7-11.15z"
          id="prefix__cG"
        />
        <path
          fill="#FFF"
          d="M304.9 290.65l-.8-1.85-25.7 11.15.8 1.85 25.7-11.15z"
          id="prefix__cH"
        />
        <path
          fill="#FFF"
          d="M307.15 295.4l-.9-1.8-25.1 12.4.9 1.8 25.1-12.4z"
          id="prefix__cI"
        />
        <path
          fill="#FFF"
          d="M307.15 295.4l-.9-1.8-25.1 12.4.9 1.8 25.1-12.4z"
          id="prefix__cJ"
        />
        <path
          fill="#FFF"
          d="M308.65 298.25l-24.45 13.6.95 1.75L309.6 300l-.95-1.75z"
          id="prefix__cK"
        />
        <path
          fill="#FFF"
          d="M309.6 300l-.95-1.75-24.45 13.6.95 1.75L309.6 300z"
          id="prefix__cL"
        />
        <path
          fill="#FFF"
          d="M311.25 302.75L287.5 317.6l1.05 1.7 23.75-14.85-1.05-1.7z"
          id="prefix__cM"
        />
        <path
          fill="#FFF"
          d="M312.3 304.45l-1.05-1.7-23.75 14.85 1.05 1.7 23.75-14.85z"
          id="prefix__cN"
        />
        <path
          fill="#FFF"
          d="M314.1 307.15l-23 16 1.15 1.65 23-16-1.15-1.65z"
          id="prefix__cO"
        />
        <path
          fill="#FFF"
          d="M315.25 308.8l-1.15-1.65-23 16 1.15 1.65 23-16z"
          id="prefix__cP"
        />
        <path
          fill="#FFF"
          d="M317.15 311.45l-22.2 17.05 1.25 1.6 22.15-17.1-1.2-1.55z"
          id="prefix__cQ"
        />
        <path
          fill="#FFF"
          d="M318.35 313l-1.2-1.55-22.2 17.05 1.25 1.6 22.15-17.1z"
          id="prefix__cR"
        />
        <path
          fill="#FFF"
          d="M320.4 315.5l-21.3 18.2 1.3 1.5 21.3-18.15-1.3-1.55z"
          id="prefix__cS"
        />
        <path
          fill="#FFF"
          d="M321.7 317.05l-1.3-1.55-21.3 18.2 1.3 1.5 21.3-18.15z"
          id="prefix__cT"
        />
        <path
          fill="#FFF"
          d="M323.85 319.45l-20.35 19.2 1.35 1.45 20.4-19.2-1.4-1.45z"
          id="prefix__cU"
        />
        <path
          fill="#FFF"
          d="M303.5 338.65l1.35 1.45 20.4-19.2-1.4-1.45-20.35 19.2z"
          id="prefix__cV"
        />
        <path
          fill="#FFF"
          d="M341.75 318.3l-4.7-4.2-36.85 41.55 4.7 4.2 36.85-41.55z"
          id="prefix__cW"
        />
        <path
          fill="#FFF"
          d="M341.75 318.3l-4.7-4.2-36.85 41.55 4.7 4.2 36.85-41.55z"
          id="prefix__cX"
        />
        <path
          id="prefix__i"
          stroke="url(#prefix__e)"
          strokeWidth={0.1}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
          fill="none"
          d="M316.014 170.014q0 62.169-43.97 106.024-43.85 43.976-106.01 43.976-62.16 0-106.129-43.976-43.85-43.855-43.85-106.024 0-62.168 43.85-106.144 43.97-43.856 106.13-43.856T272.044 63.87q43.97 43.976 43.97 106.144zm-22.527 0q0 52.771-37.344 90.12-37.345 37.35-90.108 37.35-52.764 0-90.108-37.35-37.344-37.349-37.344-90.12 0-52.77 37.344-90.12t90.108-37.35q52.763 0 90.108 37.35 37.344 37.35 37.344 90.12z"
        />
        <path
          id="prefix__l"
          stroke="url(#prefix__e)"
          strokeWidth={0.05}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
          fill="none"
          d="M349.989 175.003q0 72.53-51.307 123.695-51.166 51.306-123.698 51.306T51.145 298.698Q-.021 247.533-.021 175.003T51.145 51.167Q102.452.002 174.984.002t123.698 51.165q51.307 51.305 51.307 123.836zm-26.286 0q0 61.566-43.576 105.141-43.575 43.575-105.143 43.575T69.84 280.144q-43.575-43.575-43.575-105.141 0-61.567 43.575-105.142 43.576-43.574 105.144-43.574 61.568 0 105.143 43.574 43.576 43.575 43.576 105.142z"
        />
        <path
          id="prefix__n"
          stroke="url(#prefix__f)"
          strokeWidth={7}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
          fill="none"
          d="M0 0h90.75q-35.1 102.7 21.9 224.25l12.1 24.15Q18.85 181.85 0 0z"
        />
        <path
          id="prefix__cY"
          stroke="#333"
          strokeWidth={1}
          strokeLinejoin="round"
          strokeLinecap="square"
          fill="none"
          d="M-81.6 103.85q-8.75-8.95-18.25-22.7-9.5-13.8-14.5-30.15-5.05-16.35-5.3-48.25-.25-31.95 30.4-68.9 30.65-37 80.55-40.25 21.05-2.85 48.1 5.4.15.05.35.1 20.05 7.35 37.5 22.7 17.6 15.5 27.55 33.15 9.95 17.6 13.8 47 3.85 29.35-6.1 59.75-.7 2.2-29.25 45.45"
        />
        <linearGradient
          id="prefix__f"
          gradientUnits="userSpaceOnUse"
          x1={-0.025}
          y1={124.2}
          x2={124.725}
          y2={124.2}
          spreadMethod="pad"
        >
          <stop offset="0%" />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={49.4}
          x2={0}
          y2={-49.4}
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#2AA5E7" />
          <stop offset="100%" stopColor="#700" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          x1={100}
          y1={49.4}
          x2={100}
          y2={-49.4}
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#2AA5E7" />
          <stop offset="100%" stopColor="#700" />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={49.4}
          x2={0}
          y2={-49.4}
          spreadMethod="pad"
        >
          <stop offset="7.451%" stopColor="#14C0EA" />
          <stop offset="100%" stopColor="#8339D8" />
        </linearGradient>
        <filter
          id="prefix__g"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#0E7A83" floodOpacity={1} result="result1" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0,0"
            result="result2"
          />
          <feComposite
            in2="result2"
            in="result1"
            operator="in"
            result="result3"
          />
          <feComposite in2="result3" in="SourceGraphic" result="result4" />
        </filter>
        <filter
          id="prefix__j"
          x="-21.242%"
          y="-21.283%"
          width="142.483%"
          height="142.567%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="13.333333333333334,13.333333333333334"
            result="result1"
          />
        </filter>
        <filter
          id="prefix__m"
          x="-20.283%"
          y="-20%"
          width="140.567%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#FFF" floodOpacity={1} result="result1" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="3.3333333333333335,3.3333333333333335"
            result="result2"
          />
          <feComposite
            in2="result2"
            in="result1"
            operator="in"
            result="result3"
          />
          <feComposite in2="result3" in="SourceGraphic" result="result4" />
          <feColorMatrix
            in="result4"
            values="0.42 0 0 0 0.03529411764705882 0 0.42 0 0 0.27450980392156865 0 0 0.42 0 0.30196078431372547 0 0 0 1 0"
            result="result5"
          />
        </filter>
        <filter
          id="prefix__s"
          x="-20.283%"
          y="-20%"
          width="140.567%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#FFF" floodOpacity={1} result="result1" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="3.3333333333333335,3.3333333333333335"
            result="result2"
          />
          <feComposite
            in2="result2"
            in="result1"
            operator="in"
            result="result3"
          />
          <feComposite in2="result3" in="SourceGraphic" result="result4" />
          <feColorMatrix
            in="result4"
            values="0.42 0 0 0 0.03529411764705882 0 0.42 0 0 0.27450980392156865 0 0 0.42 0 0.30196078431372547 0 0 0 1 0"
            result="result5"
          />
        </filter>
        <radialGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          cx={0}
          cy={0}
          r={63.45}
          fx={0}
          fy={0}
          gradientTransform="translate(197.25 134.3)"
          spreadMethod="pad"
        >
          <stop offset="86.667%" stopColor="#0DEE32" />
          <stop offset="100%" stopColor="#0D6C8D" />
        </radialGradient>
        <radialGradient
          id="prefix__e"
          gradientUnits="userSpaceOnUse"
          cx={0}
          cy={0}
          r={63.5}
          fx={0}
          fy={0}
          gradientTransform="translate(197.25 134.3)"
          spreadMethod="pad"
        >
          <stop offset="0%" />
          <stop offset="100%" stopColor="#FFF" />
        </radialGradient>
        <g id="prefix__t">
          <path
            fill="url(#prefix__b)"
            d="M15.5 1.25q-.4-3-.7-6h-40.35q1.05 3 2.2 5.9l38.85.1m24.95 90.6l-9.25.05q8.65 9.3 18.2 17.45-4.45-8.8-8.3-17.6-.3.05-.65.1m-2.2-6.75h-.05q-.45.15-1.4.15H25.25q1.75 2.05 3.55 4 .45-.1 1.3-.1h9.85q-.9-2.05-1.7-4.05m-2.45-5.9q-.4.05-.95.05h-14.6q1.4 1.75 2.8 3.45.55-.2 1.55-.2h12q.3 0 .55.05-.7-1.7-1.35-3.35m-17.4-2.3q.05-.1.2-.15.55-.25 1.8-.25h14.35q-.6-1.5-1.15-3H15.75q1.3 1.7 2.65 3.4m14.15-6.3q-.6-1.65-1.2-3.25-.25.05-.55.15H11.4q1.15 1.65 2.3 3.25l.5-.1v-.05h18.35m-3.2-9q-.25.05-.55.15H7.4q1 1.5 2 2.95.15 0 .3-.05v-.05h20.7l-1-3h-.05m-.85-2.75q-.7-2.05-1.35-4.1H2.9q1.25 2.05 2.6 4.1h23m-11.75-48.6q-.5-3.05-.9-6.15h-38.1q1.2 3.05 2.45 6.05h.05l36.5.1m1.3 7.6q-.45-2.35-.8-4.75H-18.6q1 2.4 2.05 4.75h34.6m1.35 6.75q-.4-1.9-.8-3.85h-33.85q.9 1.95 1.8 3.85H19.4m4.95 20.5q-.5-1.65-.9-3.35h-28.2q.95 1.7 1.9 3.35h27.2m-3.4-13.35q-.5-2.1-.95-4.25h-32.1q1 2.1 2.05 4.15h.3l30.7.1m1.75 7.1q-.55-2.1-1.05-4.25-15.1.05-30.15.05 1.05 2.15 2.2 4.25v-.05h29m2.45 9.05q-.2.05-.35.1h-26q1.15 1.95 2.3 3.85h25.2q-.6-1.95-1.15-3.95m-7.8-135.7q1.75-10.75 4.3-21.55H-49.4q1.35 11 3.05 21.55h63.7M13.2-46.15q.15-4.25.4-8.5-26.8.05-53.55.05.95 4.25 2 8.45H13.2m-.1 13.05l-.4.1h-47.2q1.05 3.85 2.2 7.65h.05q.2 0 .4-.05H13.3q-.15-3.85-.2-7.7m-.05-2.7q0-3.75.1-7.45h-50.4q.95 3.7 1.95 7.35h48.05l.3.1M14.5-7.65q-.3-3.05-.55-6.1l-.5.1q-21 .05-42 .15.95 2.95 2 5.85H14.5m-.75-8.8q-.2-3-.35-6.05l-44.7.1-.1.1 1.8 5.7 43.1.1q.15.05.25.05m1.2-54.3q.8-7.1 1.9-14.15h-62.7q1.15 7.15 2.5 14.1h58.2q.05 0 .1.05m-1.2 13.25q.35-5.2.9-10.4H-42.8q1.05 5.2 2.15 10.3l54.4.1z"
          />
          <path
            fill="url(#prefix__c)"
            d="M50.6-109.35q.196 1.6.4 3.2v-3.2h-.4z"
          />
        </g>
      </defs>
      <g filter="url(#prefix__g)">
        <g transform="matrix(2.7815 0 0 2.77158 -147.465 -133.322)">
          <use xlinkHref="#prefix__h" />
          <use
            xlinkHref="#prefix__i"
            transform="matrix(.41505 0 0 .415 128.3 63.7)"
          />
        </g>
        <g
          filter="url(#prefix__j)"
          transform="matrix(.99999 0 0 .99999 .02 .045)"
        >
          <g transform="matrix(3.06013 0 0 3.0487 -203.64 -169.407)">
            <use xlinkHref="#prefix__k" />
            <use
              xlinkHref="#prefix__l"
              transform="matrix(.3557 0 0 .3557 135 72)"
            />
          </g>
        </g>
      </g>
      <g filter="url(#prefix__m)">
        <use xlinkHref="#prefix__n" transform="translate(90.2 137.6)" />
      </g>
      <g transform="translate(232 199.3)">
        <clipPath id="prefix__o">
          <path fill="#FFF" d="M-2-2h26.2v26H-2z" />
        </clipPath>
        <text clipPath="url(#prefix__o)" writingMode="lr">
          <tspan
            x={0}
            y={18.9}
            baselineShift="0%"
            fontFamily="SimHei"
            fontSize={22}
            fill="#FFF"
          >
            {"20"}
          </tspan>
        </text>
      </g>
      <g transform="translate(548.9 202.85)">
        <clipPath id="prefix__p">
          <path fill="#FFF" d="M-2-2h26.2v26H-2z" />
        </clipPath>
        <text clipPath="url(#prefix__p)" writingMode="lr">
          <tspan
            x={0}
            y={18.9}
            baselineShift="0%"
            fontFamily="SimHei"
            fontSize={22}
            fill="#FFF"
          >
            {"80"}
          </tspan>
        </text>
      </g>
      <g transform="translate(466.9 85.6)">
        <clipPath id="prefix__q">
          <path fill="#FFF" d="M-2-2h26.2v26H-2z" />
        </clipPath>
        <text clipPath="url(#prefix__q)" writingMode="lr">
          <tspan
            x={0}
            y={18.9}
            baselineShift="0%"
            fontFamily="SimHei"
            fontSize={22}
            fill="#FFF"
          >
            {"60"}
          </tspan>
        </text>
      </g>
      <g transform="translate(315.9 84.85)">
        <clipPath id="prefix__r">
          <path fill="#FFF" d="M-2-2h26.2v26H-2z" />
        </clipPath>
        <text clipPath="url(#prefix__r)" writingMode="lr">
          <tspan
            x={0}
            y={18.9}
            baselineShift="0%"
            fontFamily="SimHei"
            fontSize={22}
            fill="#FFF"
          >
            {"40"}
          </tspan>
        </text>
      </g>
      <g filter="url(#prefix__s)">
        <use xlinkHref="#prefix__n" transform="matrix(-1 0 0 1 718.35 137.6)" />
      </g>
      <use xlinkHref="#prefix__t" transform="translate(147 254.05)" />
      <use xlinkHref="#prefix__u" transform="translate(661.95 254.05)" />
      <use xlinkHref="#prefix__v" transform="translate(184.3 74.85)" />
      <use xlinkHref="#prefix__w" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__x" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__y" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__z" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__A" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__B" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__C" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__D" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__E" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__F" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__G" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__H" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__I" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__J" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__K" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__L" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__M" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__N" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__O" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__P" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__Q" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__R" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__S" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__T" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__U" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__V" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__W" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__X" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__Y" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__Z" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aa" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ab" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ac" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ad" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ae" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__af" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ag" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ah" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ai" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aj" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ak" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__al" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__am" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__an" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ao" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ap" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aq" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ar" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__as" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__at" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__au" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__av" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aw" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ax" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ay" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__az" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aA" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aB" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aC" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aD" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aE" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aF" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aG" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aH" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aI" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aJ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aK" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aL" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aM" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aN" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aO" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aP" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aQ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aR" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aS" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aT" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aU" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aV" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aW" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aX" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aY" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__aZ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ba" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bb" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bc" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bd" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__be" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bf" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bg" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bh" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bi" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bj" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bk" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bl" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bm" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bn" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bo" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bp" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bq" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__br" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bs" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bt" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bu" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bv" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bw" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bx" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__by" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bz" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bA" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bB" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bC" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bD" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bE" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bF" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bG" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bH" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bI" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bJ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bK" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bL" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bM" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bN" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bO" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bP" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bQ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bR" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bS" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bT" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bU" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bV" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bW" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bX" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bY" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__bZ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ca" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cb" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cc" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cd" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ce" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cf" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cg" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ch" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ci" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cj" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ck" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cl" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cm" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cn" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__co" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cp" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cq" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cr" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cs" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__ct" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cu" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cv" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cw" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cx" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cy" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cz" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cA" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cB" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cC" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cD" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cE" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cF" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cG" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cH" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cI" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cJ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cK" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cL" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cM" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cN" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cO" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cP" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cQ" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cR" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cS" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cT" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cU" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cV" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cW" transform="translate(.3 -13.75)" />
      <use xlinkHref="#prefix__cX" transform="translate(.3 -13.75)" />
      <g>

 <use xlinkHref="#prefix__cY" transform="translate(400 221.05)" />
      </g>
    </svg>
   </>
    )
}

export default DashSVG;
