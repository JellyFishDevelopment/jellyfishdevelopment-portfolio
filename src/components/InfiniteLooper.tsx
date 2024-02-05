import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [looperInstances, setLooperInstances] = useState(1);

  const calculateInstances = useCallback(() => {
    if (!innerRef.current || !outerRef.current) return;

    const innerWidth = innerRef.current.getBoundingClientRect().width;
    const outerWidth = outerRef.current.getBoundingClientRect().width;

    const instances = Math.ceil(outerWidth / innerWidth);
    setLooperInstances(instances > 0 ? instances : 1);
  }, []);

  useEffect(() => {
    calculateInstances();
    window.addEventListener("resize", calculateInstances);
    return () => {
      window.removeEventListener("resize", calculateInstances);
    };
  }, [calculateInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, index) => (
          <div
            key={index}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
