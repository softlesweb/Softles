// Design & Prototyping: a designer seated at a tilted drafting board, with the
// screens they've drawn floating beside it as a linked flow. The seated pose
// and angled board keep it distinct from the WordPress and Shopify scenes.
export default function DesignArt() {
  return (
    <svg className="eh-illo w-full h-auto" viewBox="0 0 560 430" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a designer at a tilted drafting board with linked screens floating beside it">
      <defs>
        <radialGradient id="eh-sg-design" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4D57" stopOpacity=".28" />
          <stop offset="100%" stopColor="#FF4D57" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse className="eh-glowp" cx="262" cy="220" rx="160" ry="132" fill="url(#eh-sg-design)" />
      <ellipse cx="108" cy="378" rx="62" ry="6" fill="#000" opacity=".3" />
      <ellipse cx="266" cy="382" rx="92" ry="6" fill="#000" opacity=".28" />
      <ellipse cx="470" cy="374" rx="76" ry="6" fill="#000" opacity=".24" />

      {/* ── floating colour palette ── */}
      <g className="eh-bob">
        <rect x="24" y="96" width="46" height="132" rx="10" fill="#0E1219" stroke="#2E3446" strokeWidth="2.5" />
        <circle className="eh-pop" cx="47" cy="120" r="11" fill="#FF4D57" />
        <circle className="eh-pop eh-pop2" cx="47" cy="148" r="11" fill="#FF6A3D" />
        <circle className="eh-pop eh-pop3" cx="47" cy="176" r="11" fill="#6D5EF6" />
        <circle cx="47" cy="204" r="11" fill="#E8EAF0" />
      </g>

      {/* ── drafting board, tilted ── */}
      <g transform="rotate(-12 262 232)">
        <rect x="170" y="144" width="184" height="176" rx="7" fill="#151A25" stroke="#E8EAF0" strokeWidth="3" />
        <path d="M170 174 h184" stroke="#8b93a5" strokeWidth="2" />
        <circle cx="185" cy="159" r="3.5" fill="#FF4D57" />
        <path d="M312 159 h12 M332 159 h12" stroke="#556" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="190" y="194" width="82" height="11" rx="5.5" fill="#E8EAF0" />
        <rect x="190" y="214" width="58" height="7" rx="3.5" fill="#556" />
        <rect className="eh-fillbar" x="190" y="234" width="54" height="17" rx="8.5" fill="#FF4D57" />
        <rect x="286" y="194" width="54" height="57" rx="4" fill="#0b0d12" stroke="#2E3446" strokeWidth="2" />
        <path d="M294 242 l12 -15 9 11 8 -13 15 17" stroke="#FF6A3D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="190" y="268" width="46" height="34" rx="4" stroke="#8b93a5" strokeWidth="2" />
        <rect x="246" y="268" width="46" height="34" rx="4" stroke="#8b93a5" strokeWidth="2" />
        <rect x="302" y="268" width="38" height="34" rx="4" stroke="#556" strokeWidth="2" />
        <g fill="#0E1219" stroke="#FF6A3D" strokeWidth="2.5">
          <rect className="eh-pop" x="185" y="189" width="9" height="9" rx="2" />
          <rect className="eh-pop eh-pop2" x="268" y="189" width="9" height="9" rx="2" />
          <rect className="eh-pop eh-pop2" x="185" y="246" width="9" height="9" rx="2" />
          <rect className="eh-pop eh-pop3" x="268" y="246" width="9" height="9" rx="2" />
        </g>
      </g>

      {/* board stand */}
      <path d="M240 326 L220 382" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
      <path d="M300 314 L322 382" stroke="#E8EAF0" strokeWidth="6" strokeLinecap="round" />
      <path d="M234 354 h74" stroke="#8b93a5" strokeWidth="4" strokeLinecap="round" />

      {/* ── seated designer ── */}
      <g>
        <rect x="60" y="286" width="54" height="10" rx="5" fill="#E8EAF0" />
        <path d="M74 296 L64 372" stroke="#E8EAF0" strokeWidth="5" strokeLinecap="round" />
        <path d="M102 296 L112 372" stroke="#E8EAF0" strokeWidth="5" strokeLinecap="round" />
        {/* thigh then shin */}
        <line x1="90" y1="282" x2="140" y2="282" stroke="#FF4D57" strokeWidth="13" strokeLinecap="round" />
        <line x1="140" y1="282" x2="145" y2="346" stroke="#FF4D57" strokeWidth="13" strokeLinecap="round" />
        <rect x="134" y="346" width="26" height="11" rx="5.5" fill="#E8EAF0" />
        {/* torso leaning into the board */}
        <g transform="rotate(9 96 288)">
          <path d="M76 290 v-56 q0 -20 20 -20 q20 0 20 20 v56 z" fill="#262E3E" />
        </g>
        {/* drawing arm */}
        <g className="eh-arm" style={{ transformOrigin: "112px 234px" }}>
          <line x1="110" y1="236" x2="182" y2="226" stroke="#262E3E" strokeWidth="11" strokeLinecap="round" />
          <circle cx="187" cy="225" r="6.5" fill="#EFC3A0" />
          <line x1="191" y1="221" x2="205" y2="207" stroke="#FF6A3D" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        {/* head */}
        <circle cx="102" cy="202" r="15" fill="#EFC3A0" />
        <path d="M86 200 q-2 -17 16 -17 q17 0 16 15 q-9 -9 -32 2z" fill="#1a2029" />
      </g>

      {/* ── screens drawn from the board, linked ── */}
      <g className="eh-bob">
        <rect x="400" y="98" width="86" height="64" rx="6" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <rect x="412" y="112" width="36" height="5" rx="2.5" fill="#556" />
        <rect x="412" y="124" width="52" height="20" rx="3" fill="#2E3446" />
        <rect x="412" y="150" width="22" height="6" rx="3" fill="#FF4D57" />
      </g>
      <g className="eh-bob eh-bob2">
        <rect x="466" y="196" width="86" height="64" rx="6" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <rect x="478" y="210" width="42" height="5" rx="2.5" fill="#556" />
        <rect x="478" y="222" width="52" height="9" rx="3" fill="#2E3446" />
        <rect x="478" y="235" width="52" height="9" rx="3" fill="#2E3446" />
        <rect x="478" y="249" width="22" height="6" rx="3" fill="#FF6A3D" />
      </g>
      <g className="eh-bob eh-bob3">
        <rect x="400" y="294" width="86" height="64" rx="6" fill="#151A25" stroke="#E8EAF0" strokeWidth="2.5" />
        <path d="M430 328 l9 9 16 -18" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path className="eh-flow" d="M486 150 C514 158 520 174 520 196" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="eh-flow" d="M466 260 C462 282 462 288 452 294" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" style={{ animationDelay: "0.9s" }} />
      <circle className="eh-pop" cx="486" cy="150" r="4" fill="#FF6A3D" />
      <circle className="eh-pop eh-pop2" cx="466" cy="260" r="4" fill="#FF6A3D" />

      {/* the flow leaving the board */}
      <path className="eh-flow" d="M348 178 C368 148 380 122 398 114" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".55" style={{ animationDelay: "1.7s" }} />

      {/* sparks */}
      <g strokeWidth="2" strokeLinecap="round">
        <path className="eh-twk" d="M372 62 v10 M367 67 h10" stroke="#FF4D57" />
        <path className="eh-twk eh-twk2" d="M20 262 v8 M16 266 h8" stroke="#FF6A3D" />
        <path className="eh-twk eh-twk3" d="M544 300 v8 M540 304 h8" stroke="#6D5EF6" />
      </g>

      <line x1="10" y1="382" x2="550" y2="382" stroke="#2E3446" strokeWidth="2" />
    </svg>
  );
}
