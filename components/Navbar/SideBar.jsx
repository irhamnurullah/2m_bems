import React from 'react';

export default function SideBar() {
  return (
    <aside>
      <ul className="space-y-8">
        <li>home</li>
        <li>pricing</li>
        <li>faq</li>
        <li>contact</li>
      </ul>

      <div className="z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="151" height="150" fill="none" viewBox="0 0 151 150">
          <g clipPath="url(#clip0_46_779)" filter="url(#filter0_d_46_779)">
            <mask id="mask0_46_779" style={{ maskType: 'luminance' }} width="100" height="115" x="26" y="14" maskUnits="userSpaceOnUse">
              <path
                fill="#fff"
                d="M26 14v114.756h100V14H26zm77.227 69.793c-.056.07-.118.139-.174.208-1.542 1.87-12.72 15.764-12.86 25.442H61.827c-.132-9.685-11.317-23.573-12.86-25.442-.055-.07-.117-.139-.173-.208-4.217-5.266-6.71-11.797-6.71-18.869 0-17.459 15.193-31.61 33.93-31.61 18.737 0 33.931 14.151 33.931 31.61 0 7.072-2.494 13.603-6.711 18.869h-.007z"
              ></path>
            </mask>
            <g mask="url(#mask0_46_779)">
              <path
                fill="url(#paint0_linear_46_779)"
                d="M73.221 40.532V21.899a2.778 2.778 0 115.558 0v18.633a2.778 2.778 0 11-5.558 0zm37.502-6.496a2.784 2.784 0 00-3.932 0L93.618 47.208a2.784 2.784 0 000 3.932c.542.542 1.25.813 1.967.813.715 0 1.424-.27 1.966-.813l13.172-13.172a2.784 2.784 0 000-3.932zm11.407 30.332a2.778 2.778 0 00-2.779-2.779h-18.632a2.778 2.778 0 00-1.966 4.745c.5.5 1.195.813 1.966.813h18.632a2.778 2.778 0 002.779-2.779zM29.8 63.194a2.778 2.778 0 002.78 2.779h18.632a2.778 2.778 0 001.966-4.745 2.743 2.743 0 00-1.966-.813H32.579a2.778 2.778 0 00-2.779 2.779zm28.206-16.903L44.834 33.12a2.784 2.784 0 00-3.932 0 2.784 2.784 0 000 3.932l13.172 13.172c.542.542 1.25.813 1.966.813s1.425-.27 1.966-.813a2.784 2.784 0 000-3.932zm37.113 59.567c-.18 1.862-2.946 1.591-3.133 3.452-.18 1.862 2.584 2.133 2.404 3.995-.181 1.862-2.946 1.591-3.134 3.453-.18 1.862 2.585 2.133 2.404 3.988H58.34c-.18-1.862 2.584-2.133 2.404-3.988-.181-1.862-2.946-1.591-3.134-3.453-.18-1.862 2.585-2.133 2.404-3.995-.18-1.861-2.946-1.59-3.133-3.452h38.238z"
              ></path>
              <g style={{ mixBlendMode: 'multiply' }} fill="#8E65F9" opacity="0.7">
                <path d="M63.168 107.455h25.907c.882 0 1.605-.715 1.605-1.604H61.57c0 .882.716 1.604 1.605 1.604h-.007zM89.075 111.36H63.168a1.605 1.605 0 000 3.21h25.907a1.606 1.606 0 000-3.21zM89.075 119.141H63.168c-.882 0-1.605.716-1.605 1.605h29.11c0-.882-.716-1.605-1.605-1.605h.007z"></path>
              </g>
            </g>
            <path
              fill="url(#paint1_linear_46_779)"
              d="M103.227 83.793c4.217-5.266 6.711-11.797 6.711-18.869 0-17.459-15.194-31.61-33.931-31.61-18.737 0-33.93 14.151-33.93 31.61 0 7.072 2.493 13.603 6.71 18.87.056.069.118.138.174.207 1.542 1.87 12.72 15.764 12.86 25.442h28.365c.132-9.685 11.318-23.573 12.86-25.442.056-.069.118-.138.174-.208h.007z"
            ></path>
            <path
              fill="url(#paint2_linear_46_779)"
              d="M76 33.307c18.737 0 33.931 14.151 33.931 31.61 0 7.072-2.494 13.603-6.711 18.869-.056.07-.118.139-.174.208-1.542 1.87-12.72 15.764-12.86 25.442H61.82c-.132-9.685-11.317-23.573-12.86-25.442-.055-.069-.117-.138-.173-.208-4.217-5.266-6.71-11.797-6.71-18.869 0-17.459 15.193-31.61 33.93-31.61M76 32.612c-19.091 0-34.626 14.492-34.626 32.305 0 7.017 2.37 13.686 6.857 19.3l.014.014c.035.041.07.09.111.132l.07.083c1.285 1.563 12.568 15.513 12.7 25.01a.69.69 0 00.695.688h28.365a.695.695 0 00.695-.688c.132-9.497 11.415-23.447 12.7-25.01l.076-.09.112-.132c4.494-5.62 6.863-12.29 6.863-19.314 0-17.813-15.534-32.305-34.625-32.305l-.007.007z"
            ></path>
            <path
              fill="url(#paint3_linear_46_779)"
              d="M76 35.217c18.431 0 33.424 13.693 33.91 30.756.014-.347.021-.702.021-1.056 0-17.459-15.194-31.61-33.931-31.61-18.737 0-33.93 14.151-33.93 31.61 0 .354.013.702.02 1.056C42.576 48.91 57.57 35.217 76 35.217z"
            ></path>
            <path
              fill="#fff"
              d="M86.768 83.668a1.604 1.604 0 00-1.91 1.222l-.153.688c-1.077.355-1.695 1.41-2.195 2.3-.612 1.077-1.043 1.737-1.772 1.737-.73 0-1.153-.653-1.772-1.737-.618-1.084-1.389-2.432-2.98-2.432-1.59 0-2.355 1.348-2.973 2.439-.612 1.077-1.043 1.73-1.765 1.73-.723 0-1.153-.653-1.765-1.73-.507-.89-1.118-1.946-2.195-2.3l-.153-.688a1.606 1.606 0 00-1.91-1.222 1.606 1.606 0 00-1.223 1.91l4.453 20.272h3.28l-3.981-18.132c.166.243.333.521.514.848.618 1.083 1.382 2.438 2.973 2.438s2.355-1.348 2.974-2.438c.61-1.077 1.042-1.73 1.764-1.73.723 0 1.153.653 1.772 1.736.618 1.084 1.39 2.432 2.98 2.432 1.591 0 2.362-1.348 2.98-2.431.188-.327.355-.612.522-.855l-3.988 18.139h3.279l4.453-20.272a1.604 1.604 0 00-1.223-1.91l.014-.014z"
            ></path>
            <g style={{ mixBlendMode: 'overlay' }}>
              <g opacity="0.6">
                <path
                  style={{ mixBlendMode: 'hard-light' }}
                  fill="url(#paint4_radial_46_779)"
                  d="M68.997 18.85c2.543 1.792-3.543 14.776-13.589 28.997C45.362 62.07 35.163 72.142 32.621 70.35c-2.543-1.792 3.543-14.777 13.589-28.998C56.256 27.13 66.454 17.057 68.997 18.849z"
                ></path>
                <path
                  fill="url(#paint5_radial_46_779)"
                  d="M65.67 23.567c1.27.896-4.35 11.039-12.555 22.655-8.204 11.616-15.881 20.307-17.153 19.404-1.27-.896 4.35-11.04 12.554-22.655 8.205-11.616 15.882-20.307 17.153-19.404z"
                ></path>
              </g>
              <path
                fill="url(#paint6_radial_46_779)"
                d="M45.974 51.446c-5.461-3.855-9.574-7.433-9.178-7.996.396-.556 5.141 2.119 10.602 5.975 5.46 3.856 9.573 7.433 9.177 7.996-.396.556-5.14-2.119-10.601-5.975z"
              ></path>
              <path
                style={{ mixBlendMode: 'hard-light' }}
                fill="url(#paint7_radial_46_779)"
                d="M46.44 50.786c-1.022-.722-1.738-1.465-1.606-1.653.14-.195 1.077.236 2.098.959 1.022.722 1.737 1.465 1.605 1.653-.139.195-1.077-.236-2.098-.959z"
              ></path>
              <path
                fill="url(#paint8_radial_46_779)"
                d="M47.815 51.231c-3.78 5.35-7.344 9.323-7.962 8.886-.625-.438 1.931-5.127 5.71-10.477 3.78-5.35 7.344-9.323 7.962-8.886.626.438-1.931 5.128-5.71 10.477z"
              ></path>
              <path
                style={{ mixBlendMode: 'hard-light' }}
                fill="url(#paint9_radial_46_779)"
                d="M47.078 50.717c-.722 1.021-1.48 1.73-1.695 1.577-.215-.153.195-1.105.917-2.126.723-1.021 1.48-1.73 1.695-1.577.216.153-.194 1.105-.917 2.126z"
              ></path>
              <g opacity="0.5">
                <path
                  fill="url(#paint10_radial_46_779)"
                  d="M45.974 51.446c-5.461-3.855-9.574-7.433-9.178-7.996.396-.556 5.141 2.119 10.602 5.975 5.46 3.856 9.573 7.433 9.177 7.996-.396.556-5.14-2.119-10.601-5.975z"
                ></path>
                <path
                  style={{ mixBlendMode: 'hard-light' }}
                  fill="url(#paint11_radial_46_779)"
                  d="M46.44 50.786c-1.022-.722-1.738-1.465-1.606-1.653.14-.195 1.077.236 2.098.959 1.022.722 1.737 1.465 1.605 1.653-.139.195-1.077-.236-2.098-.959z"
                ></path>
                <path
                  fill="url(#paint12_radial_46_779)"
                  d="M47.815 51.231c-3.78 5.35-7.344 9.323-7.962 8.886-.625-.438 1.931-5.127 5.71-10.477 3.78-5.35 7.344-9.323 7.962-8.886.626.438-1.931 5.128-5.71 10.477z"
                ></path>
                <path
                  style={{ mixBlendMode: 'hard-light' }}
                  fill="url(#paint13_radial_46_779)"
                  d="M47.078 50.717c-.722 1.021-1.48 1.73-1.695 1.577-.215-.153.195-1.105.917-2.126.723-1.021 1.48-1.73 1.695-1.577.216.153-.194 1.105-.917 2.126z"
                ></path>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_46_779"
              width="147.909"
              height="157.682"
              x="-8.41"
              y="4.748"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
              <feOffset dx="-10.421" dy="13.895"></feOffset>
              <feGaussianBlur stdDeviation="13.895"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0 0.0509804 0 0 0 0.75 0"></feColorMatrix>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_46_779"></feBlend>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_46_779" result="shape"></feBlend>
            </filter>
            <linearGradient id="paint0_linear_46_779" x1="75.965" x2="75.965" y1="14.063" y2="147.729" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F265F4"></stop>
              <stop offset="1" stopColor="#7F65FA"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_46_779" x1="76" x2="76" y1="33.307" y2="109.45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.9"></stop>
              <stop offset="0.03" stopColor="#fff" stopOpacity="0.79"></stop>
              <stop offset="0.07" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.11" stopColor="#fff" stopOpacity="0.6"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.55"></stop>
              <stop offset="0.2" stopColor="#fff" stopOpacity="0.51"></stop>
              <stop offset="0.28" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.46" stopColor="#FDFDFD" stopOpacity="0.48"></stop>
              <stop offset="0.67" stopColor="#F9F9F9" stopOpacity="0.43"></stop>
              <stop offset="0.89" stopColor="#F3F3F3" stopOpacity="0.35"></stop>
              <stop offset="1" stopColor="#EFEFEF" stopOpacity="0.3"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear_46_779" x1="76" x2="76" y1="110.144" y2="32.612" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.9"></stop>
              <stop offset="0.03" stopColor="#fff" stopOpacity="0.83"></stop>
              <stop offset="0.11" stopColor="#fff" stopOpacity="0.68"></stop>
              <stop offset="0.17" stopColor="#fff" stopOpacity="0.58"></stop>
              <stop offset="0.23" stopColor="#fff" stopOpacity="0.52"></stop>
              <stop offset="0.28" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.46" stopColor="#FDFDFD" stopOpacity="0.48"></stop>
              <stop offset="0.67" stopColor="#F9F9F9" stopOpacity="0.43"></stop>
              <stop offset="0.89" stopColor="#F3F3F3" stopOpacity="0.35"></stop>
              <stop offset="1" stopColor="#EFEFEF" stopOpacity="0.3"></stop>
            </linearGradient>
            <linearGradient id="paint3_linear_46_779" x1="76" x2="76" y1="-13.914" y2="65.973" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.9"></stop>
              <stop offset="0.03" stopColor="#fff" stopOpacity="0.79"></stop>
              <stop offset="0.07" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.11" stopColor="#fff" stopOpacity="0.6"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.55"></stop>
              <stop offset="0.2" stopColor="#fff" stopOpacity="0.51"></stop>
              <stop offset="0.28" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.46" stopColor="#FDFDFD" stopOpacity="0.48"></stop>
              <stop offset="0.67" stopColor="#F9F9F9" stopOpacity="0.43"></stop>
              <stop offset="0.89" stopColor="#F3F3F3" stopOpacity="0.35"></stop>
              <stop offset="1" stopColor="#EFEFEF" stopOpacity="0.3"></stop>
            </linearGradient>
            <radialGradient
              id="paint4_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(-54.77 50.154 -17.744) scale(31.5119 5.65236)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.6"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.45"></stop>
              <stop offset="0.33" stopColor="#fff" stopOpacity="0.29"></stop>
              <stop offset="0.52" stopColor="#fff" stopOpacity="0.16"></stop>
              <stop offset="0.69" stopColor="#fff" stopOpacity="0.07"></stop>
              <stop offset="0.86" stopColor="#fff" stopOpacity="0.02"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint5_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(-54.77 56.254 -17.299) scale(25.726 2.81867)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.96"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.78"></stop>
              <stop offset="0.09" stopColor="#fff" stopOpacity="0.61"></stop>
              <stop offset="0.14" stopColor="#fff" stopOpacity="0.47"></stop>
              <stop offset="0.2" stopColor="#fff" stopOpacity="0.34"></stop>
              <stop offset="0.25" stopColor="#fff" stopOpacity="0.23"></stop>
              <stop offset="0.32" stopColor="#fff" stopOpacity="0.15"></stop>
              <stop offset="0.4" stopColor="#fff" stopOpacity="0.08"></stop>
              <stop offset="0.49" stopColor="#fff" stopOpacity="0.03"></stop>
              <stop offset="0.63" stopColor="#fff" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint6_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(125.22 -7.975 48.519) scale(1.24211 12.0943)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint7_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(125.22 -8.471 47.22) scale(.43032 2.26482)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint8_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(1.12141 .79195 -6.82587 9.66554 31.066 36.322)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint9_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(.3885 .27436 -1.30649 1.85001 29.809 38.07)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint10_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(125.22 -7.975 48.519) scale(1.24211 12.0943)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint11_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(125.22 -8.471 47.22) scale(.43032 2.26482)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint12_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(1.12141 .79195 -6.82587 9.66554 31.066 36.322)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint13_radial_46_779"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(.3885 .27436 -1.30649 1.85001 29.809 38.07)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.05" stopColor="#fff" stopOpacity="0.89"></stop>
              <stop offset="0.15" stopColor="#fff" stopOpacity="0.69"></stop>
              <stop offset="0.26" stopColor="#fff" stopOpacity="0.5"></stop>
              <stop offset="0.37" stopColor="#fff" stopOpacity="0.35"></stop>
              <stop offset="0.48" stopColor="#fff" stopOpacity="0.22"></stop>
              <stop offset="0.6" stopColor="#fff" stopOpacity="0.12"></stop>
              <stop offset="0.72" stopColor="#fff" stopOpacity="0.05"></stop>
              <stop offset="0.85" stopColor="#fff" stopOpacity="0.01"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <clipPath id="clip0_46_779">
              <path fill="#fff" d="M0 0H150V150H0z" transform="translate(.5)"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </aside>
  );
}
