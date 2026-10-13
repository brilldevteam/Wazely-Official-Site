type HeroClipartProps = { kind: "crm" | "erp" | "color" | "reach" };

export function HeroClipart({ kind }: HeroClipartProps) {
  if (kind === "crm") {
    return <svg viewBox="0 0 144 144" fill="none" role="presentation">
      <defs><linearGradient id="hero-crm-a" x1="17" y1="12" x2="112" y2="107" gradientUnits="userSpaceOnUse"><stop stopColor="#DBFCFF" /><stop offset="1" stopColor="#82D6EF" /></linearGradient><linearGradient id="hero-crm-b" x1="77" y1="55" x2="126" y2="126" gradientUnits="userSpaceOnUse"><stop stopColor="#E5AEFF" /><stop offset="1" stopColor="#825DE1" /></linearGradient></defs>
      <path d="M21 32c0-9 7-16 16-16h62c9 0 16 7 16 16v46c0 9-7 16-16 16H60l-22 19V94h-1c-9 0-16-7-16-16V32Z" fill="#739EC8" opacity=".24" />
      <path d="M17 27c0-9 7-16 16-16h62c9 0 16 7 16 16v46c0 9-7 16-16 16H56l-22 19V89h-1c-9 0-16-7-16-16V27Z" fill="url(#hero-crm-a)" stroke="#7AC7DB" strokeWidth="1.5" />
      <path d="M17 27c0-9 7-16 16-16h62c9 0 16 7 16 16v6H17v-6Z" fill="white" opacity=".7" /><circle cx="30" cy="22" r="3" fill="#9575E6" /><circle cx="42" cy="22" r="3" fill="#35D1DE" />
      <rect x="30" y="45" width="55" height="8" rx="4" fill="white" opacity=".95" /><rect x="30" y="61" width="39" height="7" rx="3.5" fill="white" opacity=".7" />
      <path d="M81 72c0-7 6-13 13-13h23c7 0 13 6 13 13v32c0 7-6 13-13 13h-8l-13 13v-13h-2c-7 0-13-6-13-13V72Z" fill="#493283" opacity=".2" />
      <path d="M77 68c0-7 6-13 13-13h23c7 0 13 6 13 13v32c0 7-6 13-13 13h-8l-13 13v-13h-2c-7 0-13-6-13-13V68Z" fill="url(#hero-crm-b)" stroke="#9565CF" strokeWidth="1.5" />
      <path d="M91 78h21M91 90h15" stroke="white" strokeWidth="5" strokeLinecap="round" />
      <circle cx="111" cy="43" r="10" fill="#FF9A8E" /><path d="m111 37 1.5 4.5L117 43l-4.5 1.5L111 49l-1.5-4.5L105 43l4.5-1.5L111 37Z" fill="white" />
    </svg>;
  }

  if (kind === "erp") {
    return <svg viewBox="0 0 144 144" fill="none" role="presentation">
      <defs><linearGradient id="hero-erp-a" x1="19" y1="19" x2="122" y2="116" gradientUnits="userSpaceOnUse"><stop stopColor="#FBF8FF" /><stop offset="1" stopColor="#D9C9FC" /></linearGradient><linearGradient id="hero-erp-b" x1="36" y1="101" x2="103" y2="84" gradientUnits="userSpaceOnUse"><stop stopColor="#46DCE1" /><stop offset="1" stopColor="#7959E4" /></linearGradient></defs>
      <rect x="21" y="26" width="106" height="98" rx="18" fill="#59499B" opacity=".16" />
      <rect x="17" y="19" width="106" height="98" rx="18" fill="url(#hero-erp-a)" stroke="#C2B4E8" strokeWidth="1.5" />
      <path d="M17 37c0-10 8-18 18-18h70c10 0 18 8 18 18v5H17v-5Z" fill="#34275C" />
      <circle cx="34" cy="31" r="3" fill="#FD8D9F" /><circle cx="45" cy="31" r="3" fill="#FBD78A" /><circle cx="56" cy="31" r="3" fill="#6EDDC6" />
      <rect x="29" y="53" width="34" height="29" rx="7" fill="white" opacity=".93" /><rect x="70" y="53" width="40" height="29" rx="7" fill="white" opacity=".93" />
      <rect x="36" y="61" width="15" height="4" rx="2" fill="#B9A1EE" /><rect x="36" y="69" width="21" height="6" rx="3" fill="#7254CB" />
      <rect x="77" y="61" width="18" height="4" rx="2" fill="#9EDEF0" /><rect x="77" y="69" width="26" height="6" rx="3" fill="#36C1D2" />
      <rect x="29" y="89" width="81" height="17" rx="6" fill="white" opacity=".84" />
      <path d="m36 100 17-5 12 4 11-6 10 2 15-8" stroke="url(#hero-erp-b)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="94" y="103" width="33" height="23" rx="8" fill="#29C8B7" stroke="#1EA998" strokeWidth="1.5" /><path d="m103 115 5 4 10-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
  }

  if (kind === "reach") {
    return <svg viewBox="0 0 144 144" fill="none" role="presentation">
      <defs><linearGradient id="hero-reach-a" x1="24" y1="27" x2="108" y2="114" gradientUnits="userSpaceOnUse"><stop stopColor="#D4F9EF" /><stop offset="1" stopColor="#55CFC6" /></linearGradient><linearGradient id="hero-reach-b" x1="76" y1="13" x2="126" y2="84" gradientUnits="userSpaceOnUse"><stop stopColor="#E5B7FF" /><stop offset="1" stopColor="#8160DF" /></linearGradient></defs>
      <circle cx="65" cy="71" r="43" fill="url(#hero-reach-a)" stroke="#81D7CF" strokeWidth="1.5" />
      <path d="M23 71h85M65 28c-12 12-19 27-19 43s7 31 19 43M65 28c12 12 19 27 19 43s-7 31-19 43M33 48h64M33 94h64" stroke="#228E99" strokeWidth="2.3" opacity=".72" />
      <path d="M105 17c-14 0-25 11-25 25 0 18 25 46 25 46s25-28 25-46c0-14-11-25-25-25Z" fill="#4D3588" opacity=".18" />
      <path d="M101 13c-14 0-25 11-25 25 0 18 25 46 25 46s25-28 25-46c0-14-11-25-25-25Z" fill="url(#hero-reach-b)" stroke="#A27CE8" strokeWidth="1.5" />
      <circle cx="101" cy="38" r="10" fill="white" opacity=".95" /><circle cx="101" cy="38" r="4" fill="#8D6BE6" />
      <path d="m20 105-6 4m13 4-3 7m11-13 7 2" stroke="#39CDB8" strokeWidth="3" strokeLinecap="round" />
    </svg>;
  }

  return <svg viewBox="0 0 144 144" fill="none" role="presentation">
    <defs><linearGradient id="hero-color-a" x1="28" y1="18" x2="105" y2="114" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#F0E8FF" /></linearGradient><linearGradient id="hero-color-b" x1="65" y1="69" x2="112" y2="117" gradientUnits="userSpaceOnUse"><stop stopColor="#C7A5FF" /><stop offset="1" stopColor="#6A4BD5" /></linearGradient></defs>
    <rect x="31" y="25" width="78" height="96" rx="15" transform="rotate(15 31 25)" fill="#5F4A9E" opacity=".18" />
    <rect x="26" y="19" width="78" height="96" rx="15" transform="rotate(15 26 19)" fill="url(#hero-color-a)" stroke="#D4C9EF" strokeWidth="1.5" />
    <rect x="43" y="31" width="55" height="18" rx="7" transform="rotate(15 43 31)" fill="#39D0DC" />
    <rect x="38" y="55" width="55" height="18" rx="7" transform="rotate(15 38 55)" fill="#FC8E9D" />
    <rect x="32" y="78" width="55" height="18" rx="7" transform="rotate(15 32 78)" fill="#F8C66F" />
    <circle cx="99" cy="96" r="27" fill="#6245BE" opacity=".19" />
    <circle cx="94" cy="91" r="27" fill="url(#hero-color-b)" stroke="#9677E3" strokeWidth="1.5" />
    <path d="m94 76 3.8 11.2L109 91l-11.2 3.8L94 106l-3.8-11.2L79 91l11.2-3.8L94 76Z" fill="white" />
    <circle cx="24" cy="39" r="5" fill="#45D8E4" /><circle cx="117" cy="51" r="4" fill="#FF9D90" />
  </svg>;
}
