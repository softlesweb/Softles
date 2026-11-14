// Integrations & Automation: an engineer patching a cable from a rack of live
// systems into the automation engine, which feeds the tools on the right. The
// tall rack and overhead cable runs keep it distinct from the other scenes.
export default function IntegrationsArt() {
  return (
    <svg className="eh-illo w-full h-auto" viewBox="0 0 560 430" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of an engineer patching a cable from a rack of systems into an automation engine that feeds other tools">
      <defs>
        <radialGradient id="eh-sg-int" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4D57" stopOpacity=".3" />
          <stop offset="100%" stopColor="#FF4D57" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse className="eh-glowp" cx="322" cy="228" rx="150" ry="126" fill="url(#eh-sg-int)" />
      <ellipse cx="82" cy="394" rx="62" ry="6" fill="#000" opacity=".3" />
      <ellipse cx="206" cy="400" rx="42" ry="5" fill="#000" opacity=".3" />
      <ellipse cx="482" cy="386" rx="72" ry="6" fill="#000" opacity=".24" />

      {/* ── rack of source systems ── */}
      <rect x="26" y="118" width="112" height="272" rx="9" fill="#151A25" stroke="#E8EAF0" strokeWidth="3" />
      <path d="M26 148 h112" stroke="#8b93a5" strokeWidth="2" />
      <rect x="44" y="128" width="42" height="6" rx="3" fill="#556" />
      <circle className="eh-pop" cx="120" cy="131" r="4" fill="#FF4D57" />

      <g>
        <rect x="40" y="162" width="84" height="30" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M52 177 h30" stroke="#556" strokeWidth="3" strokeLinecap="round" />
        <circle className="eh-pop" cx="110" cy="177" r="4" fill="#FF4D57" />

        <rect x="40" y="202" width="84" height="30" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M52 217 h38" stroke="#556" strokeWidth="3" strokeLinecap="round" />
        <circle className="eh-pop eh-pop2" cx="110" cy="217" r="4" fill="#FF6A3D" />

        <rect x="40" y="242" width="84" height="30" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M52 257 h26" stroke="#556" strokeWidth="3" strokeLinecap="round" />
        <circle className="eh-pop eh-pop3" cx="110" cy="257" r="4" fill="#FF4D57" />

        <rect x="40" y="282" width="84" height="30" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M52 297 h34" stroke="#556" strokeWidth="3" strokeLinecap="round" />
        <circle className="eh-pop eh-pop2" cx="110" cy="297" r="4" fill="#6D5EF6" />

        <rect x="40" y="322" width="84" height="30" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M52 337 h20" stroke="#556" strokeWidth="3" strokeLinecap="round" />
        <circle cx="110" cy="337" r="4" fill="#2E3446" />
      </g>

      {/* ── cable runs: rack → engine ── */}
      <g stroke="#2E3446" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M138 177 C196 168 226 190 268 202" />
        <path d="M138 217 C196 216 226 222 268 224" />
        <path d="M138 297 C200 296 232 264 268 248" />
      </g>
      <path className="eh-flow" d="M138 177 C196 168 226 190 268 202" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="eh-flow" d="M138 217 C196 216 226 222 268 224" stroke="#FF6A3D" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "0.8s" }} />
      <path className="eh-flow" d="M138 297 C200 296 232 264 268 248" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "1.6s" }} />

      {/* ── automation engine ── */}
      <rect x="268" y="164" width="132" height="120" rx="16" fill="#0E1219" stroke="#FF4D57" strokeWidth="3.5" />
      <rect className="eh-pop" x="258" y="154" width="152" height="140" rx="22" stroke="#FF4D57" strokeWidth="1.5" fill="none" opacity=".28" />
      <rect x="290" y="186" width="88" height="9" rx="4.5" fill="#2E3446" />
      <rect className="eh-fillbar" x="290" y="186" width="88" height="9" rx="4.5" fill="#FF6A3D" />
      <path d="M290 214 h30" stroke="#556" strokeWidth="3" strokeLinecap="round" />
      <path d="M330 209 l9 9 M339 209 l-9 9" stroke="#FF4D57" strokeWidth="3" strokeLinecap="round" />
      <path d="M350 214 h28" stroke="#556" strokeWidth="3" strokeLinecap="round" />
      <path d="M336 232 l-15 22 h12 l-4 18 l18 -24 h-12 z" fill="#FF4D57" />
      {/* ports */}
      <circle className="eh-pop" cx="268" cy="202" r="5" fill="#FF6A3D" />
      <circle className="eh-pop eh-pop2" cx="268" cy="224" r="5" fill="#FF6A3D" />
      <circle className="eh-pop eh-pop3" cx="268" cy="248" r="5" fill="#FF6A3D" />
      <circle className="eh-pop eh-pop2" cx="400" cy="196" r="5" fill="#FF6A3D" />
      <circle className="eh-pop eh-pop3" cx="400" cy="224" r="5" fill="#FF6A3D" />
      <circle className="eh-pop" cx="400" cy="252" r="5" fill="#FF6A3D" />
      {/* engine stand */}
      <path d="M334 284 v40" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
      <path d="M308 324 h52" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />

      {/* ── cable runs: engine → destination tools ── */}
      <g stroke="#2E3446" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M400 196 C428 190 432 168 452 156" />
        <path d="M400 224 h52" />
        <path d="M400 252 C428 258 432 282 452 292" />
      </g>
      <path className="eh-flow" d="M400 196 C428 190 432 168 452 156" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "0.4s" }} />
      <path className="eh-flow" d="M400 224 h52" stroke="#FF6A3D" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "1.2s" }} />
      <path className="eh-flow" d="M400 252 C428 258 432 282 452 292" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "2s" }} />

      {/* ── destination tools ── */}
      <g className="eh-bob">
        <rect x="452" y="128" width="92" height="54" rx="10" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <rect x="468" y="146" width="14" height="14" rx="4" fill="#FF4D57" />
        <rect x="492" y="148" width="36" height="6" rx="3" fill="#E8EAF0" />
        <rect x="492" y="160" width="24" height="5" rx="2.5" fill="#556" />
      </g>
      <g className="eh-bob eh-bob2">
        <rect x="452" y="198" width="92" height="54" rx="10" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <circle cx="475" cy="222" r="8" stroke="#FF6A3D" strokeWidth="2.5" fill="none" />
        <rect x="492" y="216" width="36" height="6" rx="3" fill="#E8EAF0" />
        <rect x="492" y="228" width="28" height="5" rx="2.5" fill="#556" />
      </g>
      <g className="eh-bob eh-bob3">
        <rect x="452" y="268" width="92" height="54" rx="10" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <path d="M468 300 l9 -11 7 8 6 -9 11 12" stroke="#6D5EF6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="506" y="286" width="24" height="6" rx="3" fill="#E8EAF0" />
        <rect x="506" y="298" width="18" height="5" rx="2.5" fill="#556" />
      </g>

      {/* ── engineer patching a cable in ── */}
      <g>
        <line x1="196" y1="308" x2="191" y2="392" stroke="#FF4D57" strokeWidth="11" />
        <line x1="216" y1="308" x2="221" y2="392" stroke="#FF4D57" strokeWidth="11" />
        <rect x="179" y="392" width="23" height="10" rx="5" fill="#E8EAF0" />
        <rect x="210" y="392" width="23" height="10" rx="5" fill="#E8EAF0" />
        <path d="M186 314 v-58 q0 -20 20 -20 q20 0 20 20 v58 z" fill="#262E3E" />
        {/* arm reaching up to the engine port, cable in hand */}
        <g className="eh-arm" style={{ transformOrigin: "222px 262px" }}>
          <line x1="218" y1="264" x2="252" y2="222" stroke="#262E3E" strokeWidth="10" strokeLinecap="round" />
          <circle cx="255" cy="219" r="6.5" fill="#EFC3A0" />
          {/* the patch cable, looping down from the hand */}
          <path d="M260 216 C268 208 264 200 268 202" stroke="#FF6A3D" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M252 226 C238 262 248 286 236 306" stroke="#FF6A3D" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" />
        </g>
        <circle cx="206" cy="228" r="14" fill="#EFC3A0" />
        <path d="M191 226 q-2 -16 15 -16 q16 0 15 14 q-8 -8 -30 2z" fill="#1a2029" />
      </g>

      {/* coiled spare cable on the floor */}
      <g className="eh-bob eh-bob2">
        <circle cx="272" cy="368" r="15" stroke="#8b93a5" strokeWidth="2.5" fill="none" />
        <circle cx="272" cy="368" r="8" stroke="#8b93a5" strokeWidth="2.5" fill="none" />
      </g>

      {/* sparks */}
      <g strokeWidth="2" strokeLinecap="round">
        <path className="eh-twk" d="M334 118 v10 M329 123 h10" stroke="#FF4D57" />
        <path className="eh-twk eh-twk2" d="M18 92 v8 M14 96 h8" stroke="#FF6A3D" />
        <path className="eh-twk eh-twk3" d="M544 348 v8 M540 352 h8" stroke="#6D5EF6" />
      </g>

      <line x1="10" y1="398" x2="550" y2="398" stroke="#2E3446" strokeWidth="2" />
    </svg>
  );
}
