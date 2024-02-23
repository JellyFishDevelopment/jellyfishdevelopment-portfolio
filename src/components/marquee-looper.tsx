import Marquee from "react-fast-marquee";
import LogosTech from "@/components/logos-tech";

export default function MarqueeLooper() {
  return (
    <Marquee autoFill gradient gradientColor="#09090b" className="min-w-0">
      <LogosTech />
    </Marquee>
  )
}