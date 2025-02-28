import { Familjen_Grotesk } from "next/font/google";

const firaCode = Familjen_Grotesk({ subsets: ["latin"], weight: "700" });

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={firaCode.className}>
      <h1>About Sahifasi Layout</h1>
      {children}
    </div>
  );
}
