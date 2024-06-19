import Marquee from "react-fast-marquee";
import LogosTech from "./logos-tech";

export default function InfiniteLooper() {
  return (
    <Marquee speed={20} className="min-w-0">
      <LogosTech />
    </Marquee>
  )
}