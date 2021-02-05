import * as React from "react"

function SpeedometerLoadBar({props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="none"
      width={800}
      height={480}
      viewBox="0 0 800 480"
    >
      <defs>
        <path
          fill="#0B92FF"
          d="M352.65 177.65q5.7-47.8-20.4-88.65-26-40.8-72-56-46-15.1-91.15 2.45Q124 53 100.1 95.1q-23.9 42.15-15.7 89.55 8.25 47.5 44.65 79.35L146 244.55q-29.55-25.8-36.2-64.25-6.65-38.4 12.7-72.55 19.4-34.1 55.95-48.3 36.55-14.25 73.75-2 37.3 12.3 58.4 45.4 21.1 33.1 16.5 71.75-4.6 38.75-32.8 66.05l17.9 18.55q34.75-33.7 40.45-81.55z"
          id="prefix__a"
        />
      </defs>
      <use xlinkHref="#prefix__a" transform="translate(-5.95)" />
    </svg>
  )
}

export default SpeedometerLoadBar
