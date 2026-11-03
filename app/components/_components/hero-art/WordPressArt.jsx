// WordPress: planning on the whiteboard, building on the monitor.
export default function WordPressArt() {
  return (
    <svg className="eh-illo w-full h-auto" viewBox="0 0 560 430" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a developer planning a WordPress site on a whiteboard and building it on a monitor">
      <defs>
        <radialGradient id="eh-sg-wp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4D57" stopOpacity=".28" />
          <stop offset="100%" stopColor="#FF4D57" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* screen glow + ground shadows */}
      <ellipse className="eh-glowp" cx="453" cy="206" rx="130" ry="86" fill={"url(#eh-sg-wp)"} />
      <ellipse cx="322" cy="419" rx="42" ry="5" fill="#000" opacity=".3" />
      <ellipse cx="440" cy="423" rx="105" ry="6" fill="#000" opacity=".28" />
      <ellipse cx="42" cy="416" rx="30" ry="4.5" fill="#000" opacity=".3" />
      <ellipse cx="160" cy="256" rx="40" ry="4" fill="#000" opacity=".22" />

      {/* whiteboard */}
      <rect x="40" y="30" width="260" height="170" rx="8" stroke="#E8EAF0" strokeWidth="3" fill="#151A25" />
      <line x1="150" y1="200" x2="128" y2="252" stroke="#E8EAF0" strokeWidth="3" />
      <line x1="170" y1="200" x2="192" y2="252" stroke="#E8EAF0" strokeWidth="3" />
      <rect x="62" y="52" width="90" height="58" rx="4" stroke="#8b93a5" strokeWidth="2" />
      <line x1="70" y1="66" x2="144" y2="66" stroke="#8b93a5" strokeWidth="2" />
      <line x1="70" y1="78" x2="130" y2="78" stroke="#556" strokeWidth="2" />
      <line x1="70" y1="90" x2="138" y2="90" stroke="#556" strokeWidth="2" />
      <rect x="62" y="122" width="90" height="52" rx="4" stroke="#8b93a5" strokeWidth="2" />
      <line x1="70" y1="136" x2="140" y2="136" stroke="#556" strokeWidth="2" />
      <line x1="70" y1="148" x2="126" y2="148" stroke="#556" strokeWidth="2" />
      <path d="M160 80 C190 70 200 90 220 84" stroke="#8b93a5" strokeWidth="2" fill="none" />
      <path d="M216 78 L222 84 L214 88" stroke="#8b93a5" strokeWidth="2" fill="none" />
      <rect className="eh-stick" x="232" y="58" width="26" height="26" rx="3" fill="#FF4D57" />
      <rect className="eh-stick eh-stick2" x="232" y="100" width="26" height="26" rx="3" fill="#FF6A3D" />
      <rect x="232" y="142" width="26" height="26" rx="3" fill="#2E3446" stroke="#8b93a5" strokeWidth="1.5" />
      <path d="M236 178 q8 -6 16 0 q8 6 16 0" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* idea flow: board se monitor tak travelling dots */}
      <path className="eh-flow" d="M308 96 C365 52 420 70 452 138" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />
      {/* twinkling sparks */}
      <g strokeWidth="2" strokeLinecap="round">
        <path className="eh-twk" d="M26 52 v10 M21 57 h10" stroke="#FF4D57" />
        <path className="eh-twk eh-twk2" d="M330 30 v8 M326 34 h8" stroke="#FF6A3D" />
        <path className="eh-twk eh-twk3" d="M552 130 v8 M548 134 h8" stroke="#6D5EF6" />
      </g>

      {/* desk */}
      <rect x="330" y="292" width="220" height="10" rx="5" fill="#E8EAF0" />
      <line x1="348" y1="302" x2="342" y2="420" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
      <line x1="532" y1="302" x2="538" y2="420" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
      <path d="M352 240 q0 -14 14 -14 h30 q14 0 14 14 v52 h-58 z" fill="#FF4D57" />
      <line x1="381" y1="302" x2="381" y2="368" stroke="#E8484F" strokeWidth="7" />
      <path d="M355 405 L381 372 L407 405" stroke="#E8484F" strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* monitor */}
      <rect x="368" y="150" width="170" height="118" rx="10" fill="#0b0d12" stroke="#E8EAF0" strokeWidth="3" />
      <circle cx="384" cy="166" r="3.5" fill="#FF5F57" />
      <circle cx="396" cy="166" r="3.5" fill="#FEBC2E" />
      <circle cx="408" cy="166" r="3.5" fill="#28C840" />
      <line x1="368" y1="178" x2="538" y2="178" stroke="#2E3446" strokeWidth="2" />

      {/* WordPress mark on the screen */}
                        <circle cx="424" cy="220" r="24" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
          <path d="M411 211 L418 231 L424 214 L430 231 L437 211" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                  
      {/* typing bars + caret */}
      <rect className="eh-type" x="458" y="202" width="52" height="8" rx="4" fill="#2E3446" />
      <rect className="eh-type eh-t2" x="458" y="218" width="40" height="8" rx="4" fill="#2E3446" />
      <rect className="eh-type eh-t3" x="458" y="234" width="48" height="8" rx="4" fill="#FF4D57" opacity=".75" />
      <rect className="eh-curs" x="512" y="231" width="2.5" height="13" fill="#FF6A3D" />

      {/* monitor stand + desk items */}
      <rect x="442" y="268" width="22" height="17" fill="#E8EAF0" />
      <rect x="424" y="285" width="58" height="7" rx="3.5" fill="#E8EAF0" />
      <rect x="386" y="283" width="64" height="7" rx="3.5" fill="#8b93a5" />
      <circle cx="466" cy="287" r="4" fill="#8b93a5" />
      <rect x="500" y="272" width="16" height="19" rx="2.5" fill="#E8EAF0" />
      <path d="M516 276 q9 4 0 11" stroke="#E8EAF0" strokeWidth="2.5" fill="none" />
      <path className="eh-steam" d="M506 266 q4 -6 0 -12 M512 266 q4 -6 0 -12" stroke="#8b93a5" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* wall frame + books */}
      <rect x="486" y="52" width="58" height="44" rx="4" stroke="#8b93a5" strokeWidth="2" fill="#151A25" />
      <path d="M492 88 l13 -15 9 9 8 -11 12 17" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="531" cy="63" r="4" fill="#FF6A3D" />
      <rect x="520" y="284" width="30" height="8" rx="2" fill="#FF6A3D" />
      <rect x="524" y="276" width="24" height="8" rx="2" fill="#6D5EF6" />

      {/* character writing at the board */}
      <g>
        <line x1="312" y1="316" x2="307" y2="404" stroke="#FF4D57" strokeWidth="11" />
        <line x1="330" y1="316" x2="335" y2="404" stroke="#FF4D57" strokeWidth="11" />
        <rect x="296" y="404" width="22" height="10" rx="5" fill="#E8EAF0" />
        <rect x="326" y="404" width="22" height="10" rx="5" fill="#E8EAF0" />
        <path d="M302 322 v-60 q0 -20 19 -20 q19 0 19 20 v60 z" fill="#262E3E" />
        <g className="eh-arm">
          <line x1="308" y1="256" x2="266" y2="192" stroke="#262E3E" strokeWidth="10" strokeLinecap="round" />
          <circle cx="264" cy="189" r="6" fill="#EFC3A0" />
          <line x1="262" y1="186" x2="255" y2="175" stroke="#E8EAF0" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        <circle cx="321" cy="228" r="14" fill="#EFC3A0" />
        <path d="M306 226 q-2 -16 15 -16 q16 0 15 14 q-8 -8 -30 2z" fill="#1a2029" />
      </g>

      {/* plant */}
      <path d="M36 330 q14 -46 -6 -74" stroke="#FF4D57" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M42 330 q2 -40 26 -60" stroke="#FF4D57" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M30 256 q14 4 12 22 q-16 -2 -12 -22z" fill="#FF4D57" />
      <path d="M68 270 q-2 16 -16 20 q0 -18 16 -20z" fill="#FF4D57" />
      <path d="M52 246 q10 10 2 26 q-12 -10 -2 -26z" fill="#FF6A3D" />
      <path d="M18 344 h48 l-6 56 q0 12 -18 12 t-18 -12 z" fill="#E8EAF0" />
      <line x1="10" y1="420" x2="550" y2="420" stroke="#2E3446" strokeWidth="2" />
    </svg>
  );
}
