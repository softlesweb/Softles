// Shopify: a storefront, stock going out, and a mobile checkout completing.
export default function ShopifyArt() {
  return (
    <svg className="eh-illo w-full h-auto" viewBox="0 0 560 430" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a shop storefront with packed orders and a mobile checkout">
      <defs>
        <radialGradient id="eh-sg-shop" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4D57" stopOpacity=".28" />
          <stop offset="100%" stopColor="#FF4D57" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* glow behind the phone + ground shadows */}
      <ellipse className="eh-glowp" cx="452" cy="220" rx="120" ry="92" fill="url(#eh-sg-shop)" />
      <ellipse cx="150" cy="392" rx="112" ry="7" fill="#000" opacity=".3" />
      <ellipse cx="330" cy="416" rx="40" ry="5" fill="#000" opacity=".3" />
      <ellipse cx="452" cy="404" rx="66" ry="6" fill="#000" opacity=".28" />

      {/* ── storefront ── */}
      <rect x="46" y="120" width="210" height="270" rx="6" fill="#151A25" stroke="#E8EAF0" strokeWidth="3" />
      {/* awning */}
      <path d="M38 120 h226 l-14 40 h-198 z" fill="#0E1219" stroke="#E8EAF0" strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 120 l-8 40 M100 120 l-6 40 M138 120 l-3 40 M176 120 l0 40 M214 120 l3 40" stroke="#FF4D57" strokeWidth="3" />
      {/* sign board */}
      <rect x="86" y="80" width="130" height="30" rx="4" fill="#0b0d12" stroke="#E8EAF0" strokeWidth="3" />
      <path d="M100 95 h44 M154 95 h20" stroke="#FF6A3D" strokeWidth="4" strokeLinecap="round" />
      {/* window with product cards */}
      <rect x="64" y="180" width="106" height="120" rx="4" fill="#0b0d12" stroke="#8b93a5" strokeWidth="2" />
      <g className="eh-stick">
        <rect x="76" y="192" width="38" height="34" rx="3" fill="#FF4D57" />
        <rect x="76" y="232" width="38" height="6" rx="3" fill="#2E3446" />
      </g>
      <g className="eh-stick eh-stick2">
        <rect x="122" y="192" width="38" height="34" rx="3" fill="#FF6A3D" />
        <rect x="122" y="232" width="38" height="6" rx="3" fill="#2E3446" />
      </g>
      <rect x="76" y="252" width="38" height="34" rx="3" fill="#2E3446" stroke="#8b93a5" strokeWidth="1.5" />
      <rect x="122" y="252" width="38" height="34" rx="3" fill="#2E3446" stroke="#8b93a5" strokeWidth="1.5" />
      {/* door */}
      <rect x="188" y="200" width="56" height="190" rx="3" fill="#0b0d12" stroke="#E8EAF0" strokeWidth="3" />
      <circle cx="198" cy="300" r="3.5" fill="#E8EAF0" />
      {/* open sign */}
      <rect x="198" y="222" width="36" height="16" rx="3" fill="#0E1219" stroke="#FF4D57" strokeWidth="2" />
      <path d="M205 230 h22" stroke="#FF4D57" strokeWidth="2.5" strokeLinecap="round" />
      {/* pavement */}
      <line x1="16" y1="390" x2="286" y2="390" stroke="#2E3446" strokeWidth="2" />

      {/* ── order flying to the buyer ── */}
      <path className="eh-flow" d="M264 208 C312 168 366 178 408 214" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />

      {/* ── shopping bag, floating ── */}
      <g className="eh-bob eh-bob2">
        <rect x="300" y="132" width="56" height="62" rx="6" fill="#0E1219" stroke="#FF4D57" strokeWidth="3" />
        <path d="M314 132 v-8 a14 14 0 0 1 28 0 v8" stroke="#FF4D57" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="316" cy="150" r="2.6" fill="#FF6A3D" />
        <circle cx="340" cy="150" r="2.6" fill="#FF6A3D" />
      </g>

      {/* ── phone: mobile checkout ── */}
      <g className="eh-bob eh-bob3">
        <rect x="404" y="128" width="112" height="216" rx="18" fill="#0b0d12" stroke="#E8EAF0" strokeWidth="3" />
        <rect x="446" y="138" width="28" height="5" rx="2.5" fill="#2E3446" />
        {/* product image */}
        <rect x="416" y="156" width="88" height="56" rx="5" fill="#151A25" stroke="#2E3446" strokeWidth="2" />
        <path d="M424 200 l16 -18 12 12 10 -14 22 20" stroke="#FF4D57" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="486" cy="170" r="5" fill="#FF6A3D" />
        {/* title + price rows */}
        <rect className="eh-type" x="416" y="222" width="62" height="7" rx="3.5" fill="#2E3446" />
        <rect className="eh-type eh-t2" x="416" y="236" width="42" height="7" rx="3.5" fill="#2E3446" />
        <rect className="eh-type eh-t3" x="416" y="250" width="34" height="8" rx="4" fill="#FF4D57" opacity=".8" />
        {/* checkout button, filling */}
        <rect x="416" y="276" width="88" height="24" rx="12" fill="#2E3446" opacity=".5" />
        <rect className="eh-fillbar" x="416" y="276" width="88" height="24" rx="12" fill="#FF4D57" />
        <path d="M446 288 h28" stroke="#0E1219" strokeWidth="3" strokeLinecap="round" />
        {/* trust row */}
        <circle className="eh-pop" cx="424" cy="316" r="4" fill="#FF6A3D" />
        <circle className="eh-pop eh-pop2" cx="440" cy="316" r="4" fill="#8b93a5" />
        <circle className="eh-pop eh-pop3" cx="456" cy="316" r="4" fill="#8b93a5" />
      </g>

      {/* ── shopkeeper handing over a parcel ── */}
      <g>
        <line x1="322" y1="318" x2="318" y2="392" stroke="#FF4D57" strokeWidth="11" />
        <line x1="340" y1="318" x2="344" y2="392" stroke="#FF4D57" strokeWidth="11" />
        <rect x="306" y="392" width="22" height="10" rx="5" fill="#E8EAF0" />
        <rect x="334" y="392" width="22" height="10" rx="5" fill="#E8EAF0" />
        <path d="M312 324 v-56 q0 -19 19 -19 q19 0 19 19 v56 z" fill="#262E3E" />
        <g className="eh-arm" style={{ transformOrigin: "336px 262px" }}>
          <line x1="330" y1="262" x2="300" y2="228" stroke="#262E3E" strokeWidth="10" strokeLinecap="round" />
          <circle cx="297" cy="225" r="6" fill="#EFC3A0" />
          {/* parcel being handed over */}
          <rect x="266" y="192" width="42" height="34" rx="4" fill="#151A25" stroke="#E8EAF0" strokeWidth="3" />
          <path d="M266 204 h42" stroke="#E8EAF0" strokeWidth="2.5" />
          <path d="M282 192 v12 M294 192 v12" stroke="#FF6A3D" strokeWidth="3" />
        </g>
        <circle cx="331" cy="234" r="14" fill="#EFC3A0" />
        <path d="M316 232 q-2 -16 15 -16 q16 0 15 14 q-8 -8 -30 2z" fill="#1a2029" />
      </g>

      {/* price tags twinkling */}
      <g strokeWidth="2" strokeLinecap="round">
        <path className="eh-twk" d="M28 96 v10 M23 101 h10" stroke="#FF4D57" />
        <path className="eh-twk eh-twk2" d="M282 96 v8 M278 100 h8" stroke="#FF6A3D" />
        <path className="eh-twk eh-twk3" d="M540 108 v8 M536 112 h8" stroke="#6D5EF6" />
      </g>

      <line x1="290" y1="412" x2="550" y2="412" stroke="#2E3446" strokeWidth="2" />
    </svg>
  );
}
