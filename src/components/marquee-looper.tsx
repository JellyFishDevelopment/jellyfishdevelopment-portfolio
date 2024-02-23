import Marquee from "react-fast-marquee";
import LogosTech from "@/components/logos-tech";

export default function MarqueeLooper() {
  return (
    <Marquee autoFill speed={20}>
      <LogosTech />
    </Marquee>
  )
}