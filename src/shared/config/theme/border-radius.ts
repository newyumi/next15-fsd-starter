// 디자인 시스템 가이드에서는 corner로 표기되어있으나 tailwindcss에서는 border-radius로 표기되어있음

const borderRadius = {
  "corner-0": "0px",
  "corner-50": "4px",
  "corner-100": "8px",
  "corner-150": "12px",
  "corner-200": "16px",
  "corner-250": "20px",
  "corner-300": "24px",
  "corner-350": "28px",
  "corner-400": "32px",
  "corner-500": "40px",
  "corner-600": "48px",
  "corner-700": "56px",
  "corner-800": "64px",
  "corner-900": "72px",
  "corner-1000": "80px",
  circle: "999px",
} as const;

export { borderRadius };
