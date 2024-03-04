"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRangeSlider: React.FC = () => {
  const [sliderValues, setSliderValues] = useState<number[]>([300, 900]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values);
  };

  const handleFinalChange = () => {
    params.set("price", sliderValues.join(","));
    router.push(`${pathname}?${params.toString()}`);
  };

  const sliderStyle = {
    track: {
      background: getTrackBackground({
        values: sliderValues,
        colors: ["#BFE6FF", "#007BFF", "#BFE6FF"],
        min: 0,
        max: 1500,
      }),
      height: "10px",
      borderRadius: "5px",
    },
    thumb: {
      height: "20px",
      width: "20px",
      backgroundColor: "#007BFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "50%",
    },
  };

  return (
    <div className="mt-6">
      <Range
        values={sliderValues}
        step={10}
        min={0}
        max={1500}
        onChange={handleSliderChange}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={props.style}
          >
            <div
              ref={props.ref}
              style={{
                ...props.style,
                ...sliderStyle.track,
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              ...sliderStyle.thumb,
            }}
          />
        )}
      />
      <div className="flex justify-between mt-2">
        <span>${sliderValues[0]}</span>
        <span>${sliderValues[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
