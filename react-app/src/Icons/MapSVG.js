import React from "react"
import './MapSVG.css';

const MapSVG= (props) => {
  return (
    <svg
      className="svg"
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
          fill="#F3F"
          d="M406.05-15.6l-.1.05L226.4 13.2h.05l-.35.05.3-.05-356.5-.45-82.25.45.3.05-.35-.05h.05L-392.4-15.55l-.1-.05-.05.2h.1l180 33.15H226.5L406-15.4h.1l-.05-.2z"
          id="prefix__c"
        />
        <path
          fill="#F3F"
          d="M376.35-32.75L401.8-46.9l-.1-.15-.05.05-26.55 11.75L215.7 38.7 38.75 37.05l-123.4.2-135.85 1.55-65.65-32-112.7-53.05-.05-.05-.1.15 97.8 54.9 76.6 41.65q1.1.6 2.55.7l109.95 1.4 164.55.4 164.85-1.7q1.35 0 2.55-.65l57.1-29.9 99.4-53.4z"
          id="prefix__e"
        />
        <path
          fill="#333"
          d="M151-5.25H24.2l-132.4-70.3-7.8 5.25-9.7 6.6h-.05l-29.2 19.7L-116-12.35l35.7 29.05 62.9 40.95L24.2 75.6H155l-4-80.85z"
          id="prefix__f"
        />
        <path
          fill="#FFF"
          fillOpacity={0.4}
          d="M-132.05-7.55l-.15.05 1.25 72.4.05.2 4.3 8.55.15-.05-.05-.1-3.4-8.75-.25-31.55-1.9-40.75m6.25-.25l-.15.05 1.25 72.45.05.15 5 8.95.15-.1-.05-.05-4.1-9.15.05-11.2-2.2-61.1m-23.35.2l-.15-.05-1.3 71.7.05.2 4.7 9.1.15-.05-.05-.1-3.8-9.3v.15l-.05-.25.05.1.35-8.8.05-62.7m5 .15l-.15-.05-1.3 71.8.05.2 4.85 8.65.15-.1-.05-.05-3.95-8.85v.15l-.05-.25.05.1.8-26.75-.4-44.85m-16.5-.55l-.15-.05-1.25 71.95.05.15 3.95 8.65v.1l.2-.05-.05-.1-3.1-8.8v.05l-.05-.2.05.15.35-71.85m6.3.2l-.15-.05-1.3 71.7.05.2 4.65 9.1.15-.05-.05-.1-3.75-9.3.35-8.8.05-62.7m-19.95.55l-.15-.05-2.2 44.55-.3 26.75.05.2 4.65 8.75.15-.1-.05-.05-3.75-8.95 1.6-71.1M16.75 31.1l-.05-.05-7.55-5.8-13.6-18.4-27.5-34.1-.05-.05-.15.1.05.1 1.2 1.7q.15.25.6.85L-2.1 13 8.35 25.95V26l.1.05 8.1 5.15.1.05.1-.15M6.25-48.95l.05.1L18.55-35.8l28.3 27.25h.05l.05.05.65.35h-.05l6 3.25.1-.15-.05-.05L48.1-9h-.05l-.1-.05-.45-.3.1.05-27.85-27.75L6.45-49l-.1-.05-.1.1m46.7-25.4l.05.05 36.25 27.65 9.6 6.6.05.05 3.7 1.75.35.2 1.9.85.05.05.1-.15-.1-.05-5.55-3.5.05.05-9.1-7.2-37.15-26.45-.1-.05-.1.15M-50.75-16.3l-.05-.05-.15.1L-41.8.3l25.05 41.1.05.05.1.15 8.35 5.05.1.05.1-.15-.05-.05-7.8-5.8.1.15-.15-.2.05.05-34.85-57m-3.85 1.1l-.05-.1-.15.1.05.05 11.5 22.95 20.7 37.45h.05q.24.36.55.25l6.45 5.55.1.05.1-.15-6.4-6.6q-.062-.062-.15-.1L-42.7 5.05-54.6-15.2m8.6-5l-.15.1 33.75 56.65h.05l.1.1 8.8 7.05.1.05.1-.15-8.25-7.8.15.1-20-33.6-14.6-22.45-.05-.05M-68.3-7.65v-.1l-.2.05.05.1L-57 25l12.65 32.2.15.2 8.7 6.7.1.05.1-.15-8.05-7.35.05.1-.15-.2.1.1-5.75-16.15-19.2-48.15m2.3-1.6l-.15.1.05.05 29.85 63.95.05.05.1.15 8.5 6.55.1.05.1-.15-7.85-7.2.05.1-.15-.2.1.1-5.35-12L-66-9.25m-7 1.9v-.1l-.2.05.05.1 21.65 68.45.1.15 6.1 6.85.15-.1-.05-.1-5.35-7.2v.05l-.1-.15.1.1-7.8-25.7L-73-7.35m-4.3-.35l.05.1 12.4 58.25 3.4 13.35.05.15 5.5 7.2.05.05.15-.1-.05-.1-4.8-7.55.05.1-.05-.15v.05l-6.55-31.3-10-40v-.1l-.2.05m-9.85.5v-.1l-.2.05.05.1 2.5 45.1 2.5 27V65l.05.2 5.4 8.55.05.1.15-.1-.05-.05-4.55-9v.2l-.05-.25.05.05-.55-11.1-5.35-60.8m-6.2.1v-.1l-.2.05.05.1 4.3 59.35 1.5 13.65V66l4.15 9.1v.1l.2-.05-.05-.1-3.25-9.15-1.9-27.45-4.8-45.55m-5.45-.2v-.1l-.2.05.05.1 2.05 32.85 4.3 42.2v.05l3.4 7.5v.1l.2-.05-.05-.1-2.6-7.55L-98.8-7.3m-5.1-.2l.05.1L-99 69v.05l4.05 7.95.15-.05-.05-.1-3.2-7.95v.05l-.05-.15.05.1-5.65-76.35v-.1l-.2.05m-16.65-.3l-.15.05 1.25 72.45.05.15 5 8.95.15-.1-.05-.05-4.1-9.15.05-11.2-2.2-61.1m5 .15l-.15.05.6 58.85.65 13.6.05.15 5 8.95.15-.1-.05-.05-4.1-9.15-2.15-72.3m-63.9.35l-.1.4-2.35 57.3-.05 13.3.05.2 4.5 9.15.15-.05-.05-.1-3.6-9.3v.1l-.05-.25.05.15 1.2-26.35.4-44.5.05-.1-.2-.05v.1m-11.5-.3v.1l-.35 4.45q-.15 1.45-.3 4.35l-1.8 53.15v8.9l.05.15 3.8 8.7v.1l.2-.05-.05-.1-2.95-8.85v.05l-.05-.2.05.15 1.35-30.95.2-39.9-.15-.05m6.25.3v.1l-.35 4.45q-.05.25-.3 4.35l-1.8 52.95v8.85l.05.2 4.45 9.15.15-.05-.05-.1-3.55-9.3v.1l-.05-.25.05.15.5-8.75 1.05-61.8-.15-.05M4.7 39.3l.1.05.1-.15-.05-.05-8.1-6.5.05.1-.15-.15.1.05-18.4-27.85-19.55-27.2-.05-.05-.15.1L-25.6 2.4l21.45 31h.05l.1.15 8.7 5.75m10.75-17.85l.05.05 8.15 4.7.1-.15-.05-.05-7.4-5.2L-2.25-1.75l-25.1-28.1-.15.1.05.1L-1.05 2.7l16.5 18.75m18.85-3.8l.1-.15-.05-.05-8.9-6L-.05-16.3-18.4-34.7l-.15.1.05.1 15.75 18 27.55 29 9.5 5.15m-13.8-.55v.05l10.3 4.2.1.05.05-.15-9.7-5-22.6-26.35-21-22.65-.15.1.05.1 21 25.25L20.5 17.1m5.6-24.9q-1.8-1.9-2.75-2.8l-25.4-24.55-5.9-5.25-.1-.05-.1.1.05.1L-1.45-33 20.6-10.65l15.75 14.8h.05l.05.05 5.5 2.95.1-.15-.05-.05-5.1-3.5.1.05L26.1-7.8m11.25 6.05h.05q.093.093.2.1l7.65 4.55.1.05.1-.15-.05-.05-7.25-5.4-40.75-40.7-.1-.05-.1.1.05.1 2.4 2.7Q0-40.05 2-37.8L37.35-1.75M4.8-42.55q.1.15.6.65l18.55 19.7L42.1-4.6v.05l6.15 2.9.05.05.1-.15-.1-.05-5.65-3.55-27.5-28.45-13.2-12.3-.1-.05-.1.1.05.1 3 3.4M26.6-59.9l-.1-.05-.1.15.05.05 6.9 5.9q.5.35 1.4 1.15L54.7-37.05l17.6 12.8v.05l6.3 3.3.1-.15-.05-.05-5.8-3.95v.05l-14.1-11.4-14.4-10.95L26.6-59.9m-4.75 2.2l-.1-.05-.1.15 45.2 36.3.05.05 5.95 3.2.1-.15-.05-.05-1.4-1-.35-.2-3.8-2.65-16.6-13.85-28.9-21.75m9.45-4.8l.05.05 16.95 13.5L77.6-27.9v.05h.05l6.45 2.55.1.05.05-.15-6.15-3.3q-.865-.76-1.35-1.1l-21.5-16.4L31.5-62.6l-.1-.05-.1.15m-14.15 7.65l-.1.15L41.2-32.95 60.7-17h.05l.1.1.4.1h-.05l6 2.5.05.05.1-.15-1.5-.85-.35-.25-3.85-2.15h-.05l-.3-.15.05.05-.15-.1.1.05-18.8-16.7-25.25-20.3-.1-.05m30.8-17.25l.05.05 37.45 28.5 8.95 6.15v.05h.05l6.35 3.1.05.05.1-.15-.1-.05-1.45-1-.4-.2-2.2-1.45-.4-.2-1.5-.95.05.05-8.5-6.75-38.3-27.3-.1-.05-.1.15m-4.55 2.65l-.1-.05-.1.15.05.05 25.5 19.9 20.7 14.6.1.1h.05q.049.049 0 .05h.1l.2.15 5.65 3.25.1-.15-.05-.05-5.4-4h-.05v-.05l-.1-.05-15.3-11.9-31.35-22m14.25-8l-.1-.05-.1.15.05.05 24.9 19.5 21.4 15.05.05.05.1.05 5.45 1.35.1.05.05-.2h-.1l-5.2-2.05.1.1-.15-.1h.05l-5.55-4.45-41.05-29.5z"
          id="prefix__h"
        />
        <path
          fill="#FFF"
          d="M-60.25-12.5l.05.05 19.45 40.75 12.65 24 .05.05.15.2 11.75 8.8.1.05.1-.15-10.75-9.85-15.95-32.25L-60.1-12.6l-.15.1m-77.35 4.7l-.15.05.7 77.9.05.2 5.4 10.3.15-.05-.05-.1-4.2-10.6v.15l-.05-.25.05.1.15-12-2.05-65.7m-58.7.15l-.15-.05-3.35 75.95.05.3 6.4 11.75.15-.1-.05-.05-.9-2.35-.2-.35-4-9.4 1.45-25.85.6-49.85M-166-3.3l-.2-4.9-.15-.05-2 77.15.05.25 5.05 10.45.15-.05-.05-.1-3.85-10.7v.15l-.05-.3.05.15 1.15-67.3Q-165.9-.1-166-3.3M2.85 31.45l.2.2 12.8 7.55.1.05.1-.15-.05-.05L4.1 30.4l.1.1-.2-.2.1.1-9.7-14.05-31.25-41.05-.05-.05-.15.1.05.1 39.85 56m35.6-96.8l-1.55-.95-.1-.05-.1.15.05.05 21.45 16.7L83.45-31.9l.05.05h.05l.2.1.05.05h.05l.3.1-.05-.05 11.25 4.45.1.05.05-.15-10.75-5.8-.05-.05-.3-.1L69.9-44.1 38.85-65.15l-.4-.2m23.75-15.3l5.3 4.45.25.25 21.1 15.7.15.15.2.1.05.05 12.8 7.5.05.05h.05l7.25 2.5.1.05.05-.15-.1-.05-.8-.5-.45-.2-5.4-2.85L90.5-62h.05l-.05-.05-.1-.05-28.15-18.75-.1.15.05.05M-109.35-7.2v-.1l-.15.05 3.4 77.8.05.25 5.75 10.05.15-.1-.05-.05-4.55-10.45-.35-14.4-4.25-63.05m27-.4v-.1l-.2.05.05.1 1.35 16.2 5.4 43.85 2.15 13.8.05.1.05.2 7.7 11.45.05.05.15-.1-6.5-12-10.25-73.6M43.8 16.15l-.05-.05-9.85-6.55-7.1-7.7-30.95-31.1-9.3-8.5-.1-.05-.1.1.05.1L-1-23.55l33.9 34.2 10.8 5.65.1-.15m-31.7-68.1L12-52l-.1.1.05.1 1.5 1.7.35.3 1.2 1.35L53.35-11.6l.3.35.05.05.15.1 10.6 5.45.1-.15-.05-.05-9.65-6.5.05.05-.2-.15.15.1-.3-.35v-.05h-.05l-10.25-10.2-32.15-29z"
          id="prefix__i"
        />
        <path
          fill="#333"
          d="M151-5.25H24.2l-132.4-70.3-7.8 5.25-9.7 6.6h-.05l-29.2 19.7L-116-12.35l35.7 29.05 62.9 40.95L24.2 75.6H155l-4-80.85z"
          id="prefix__q"
        />
        <filter
          id="prefix__a"
          x="-20%"
          y="-70.183%"
          width="140%"
          height="240.367%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#000" floodOpacity={1} result="result1" />
          <feComposite
            in2="SourceGraphic"
            in="result1"
            operator="in"
            result="result2"
          />
          <feGaussianBlur in="result2" stdDeviation="3,3" result="result3" />
          <feOffset dx={2.828} dy={2.828} in="result3" result="result4" />
          <feComposite in2="result4" in="SourceGraphic" result="result5" />
          <feFlood floodColor="#F3F" floodOpacity={1} result="result6" />
          <feGaussianBlur
            in="result5"
            stdDeviation="1.3333333333333333,1.3333333333333333"
            result="result7"
          />
          <feComposite
            in2="result7"
            in="result6"
            operator="in"
            result="result8"
          />
          <feComposite in2="result8" in="result5" result="result9" />
          <feColorMatrix
            in="result9"
            values="0.9861719999999999 0.012188000000000011 0.0016400000000000015 0 0 0.006172000000000006 0.992188 0.0016400000000000015 0 0 0.006172000000000006 0.012188000000000011 0.98164 0 0 0 0 0 1 0"
            result="result10"
          />
        </filter>
        <filter
          id="prefix__b"
          x="-20%"
          y="-41.705%"
          width="140%"
          height="183.409%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2.3333333333333335,2.3333333333333335"
            result="result1"
          />
        </filter>
        <filter
          id="prefix__d"
          x="-20%"
          y="-38.485%"
          width="140%"
          height="176.971%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="4.333333333333333,4.333333333333333"
            result="result1"
          />
          <feFlood floodColor="#000" floodOpacity={1} result="result2" />
          <feComposite
            in2="result1"
            in="result2"
            operator="in"
            result="result3"
          />
          <feGaussianBlur
            in="result3"
            stdDeviation="1.3333333333333333,1.3333333333333333"
            result="result4"
          />
          <feOffset dx={6.364} dy={6.364} in="result4" result="result5" />
          <feComposite in2="result5" in="result1" result="result6" />
        </filter>
        <filter
          id="prefix__g"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#FFF" floodOpacity={1} result="result1" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="1.3333333333333333,1.3333333333333333"
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
          id="prefix__r"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#FFF" floodOpacity={1} result="result1" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="1.3333333333333333,1.3333333333333333"
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
      </defs>
      <g filter="url(#prefix__a)">
        <g filter="url(#prefix__b)">
          <use xlinkHref="#prefix__c" transform="translate(393.5 49.55)" />
        </g>
      </g>
      <g filter="url(#prefix__d)">
        <use xlinkHref="#prefix__e" transform="translate(399.95 316.55)" />
      </g>
      <use xlinkHref="#prefix__f" transform="translate(154.8 375.6)" />
      <g filter="url(#prefix__g)">
        <g transform="matrix(-1 0 0 1 109.6 380.1)">
          <use xlinkHref="#prefix__h" />
          <use xlinkHref="#prefix__i" />
        </g>
        <g transform="matrix(-1 0 0 .99998 311.65 460.35)">
          <clipPath id="prefix__j">
            <path fill="#FFF" d="M-2-2h12.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__j)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"0"}
            </tspan>
          </text>
        </g>
        <g transform="matrix(-1 0 0 1 266.65 451.4)">
          <clipPath id="prefix__k">
            <path fill="#FFF" d="M-2-2H8.2v20H-2z" />
          </clipPath>
        </g>
        <g transform="translate(233.95 461)">
          <clipPath id="prefix__l">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__l)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"20"}
            </tspan>
          </text>
        </g>
        <g transform="translate(32.9 375.05)">
          <clipPath id="prefix__m">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__m)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"80"}
            </tspan>
          </text>
        </g>
        <g transform="translate(81.9 421.1)">
          <clipPath id="prefix__n">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__n)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"60"}
            </tspan>
          </text>
        </g>
        <g transform="translate(165.95 459)">
          <clipPath id="prefix__o">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__o)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"40"}
            </tspan>
          </text>
        </g>
        <g transform="matrix(.9063 -.4226 0 1 3.8 300.1)">
          <clipPath id="prefix__p">
            <path fill="#FFF" d="M-2-2h28.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__p)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"100"}
            </tspan>
          </text>
        </g>
      </g>
      <use xlinkHref="#prefix__q" transform="matrix(-1 0 0 1 644.85 376)" />
      <g filter="url(#prefix__r)">
        <g transform="translate(691.25 380.55)">
          <use xlinkHref="#prefix__h" />
          <use xlinkHref="#prefix__i" />
        </g>
        <g transform="matrix(1 0 0 .99998 489.2 460.8)">
          <clipPath id="prefix__s">
            <path fill="#FFF" d="M-2-2h12.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__s)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"0"}
            </tspan>
          </text>
        </g>
        <g transform="translate(534.2 451.85)">
          <clipPath id="prefix__t">
            <path fill="#FFF" d="M-2-2H8.2v20H-2z" />
          </clipPath>
        </g>
        <g transform="translate(553.55 459.55)">
          <clipPath id="prefix__u">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__u)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"20"}
            </tspan>
          </text>
        </g>
        <g transform="translate(621.9 458.2)">
          <clipPath id="prefix__v">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__v)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"40"}
            </tspan>
          </text>
        </g>
        <g transform="translate(705.55 421.25)">
          <clipPath id="prefix__w">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__w)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"60"}
            </tspan>
          </text>
        </g>
        <g transform="translate(755.55 374.25)">
          <clipPath id="prefix__x">
            <path fill="#FFF" d="M-2-2h20.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__x)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"80"}
            </tspan>
          </text>
        </g>
        <g transform="matrix(.90631 .4226 0 .99998 772.45 289.65)">
          <clipPath id="prefix__y">
            <path fill="#FFF" d="M-2-2h28.2v20H-2z" />
          </clipPath>
          <text clipPath="url(#prefix__y)" writingMode="lr">
            <tspan
              x={0}
              y={13.75}
              baselineShift="0%"
              fontFamily="SimHei"
              fontSize={16}
              fill="#FFF"
            >
              {"100"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default MapSVG;
