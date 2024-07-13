
import React, { useCallback, useEffect, useState, useRef } from "react";
import "./slyder.css";

export type RangeProps = {
  title: string,
  config: {
    min: number,
    max: number,
    type: string,
  }
  ref?: React.RefObject<[number, number]>
}

export function Range({title, config, ref}: RangeProps) {
  return (
    <div>
      <span className="font-bold uppercase text-sm">{title}</span>
      <MultiRangeSlider {...config} onChange={() => {}}/>
     </div>
  );
}


type MultiRangeSliderProps = { 
  min: number,
  max: number,
  type: string,
  onChange: (value: { min: number, max: number }) => void
}
function MultiRangeSlider({ type,min, max, onChange }: MultiRangeSliderProps) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="slider mt-5">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className="thumb z-[3] "
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb z-[4]"
      />
      <div className="relative bg-app-sec-blue w-full h-1"/>

      <div className="input">
        <input value={`От ${minVal} ${type}`} 
        onInput={(e) => {
          e.preventDefault()   
          if(e.nativeEvent['inputType'] === 'deleteContentBackward') {
            setMinVal((prev) => {
              if(prev < 10) return 0
              return Number.parseInt(`${prev}`[0])
            })
          } else {
            const inp = Number.parseInt(e.nativeEvent['data'])
            if(Object.is(inp, NaN)) return
  
            setMinVal((prev) => { 
              const next = Number.parseInt(`${prev}${inp}`)
              if(next > max) return max 
              return next
            })
          }

        }}
        onBlur={(e) => {
          e.preventDefault()
          if(minVal <= min) setMinVal(min)
        }}
        className="bordered"
        />
        <input value={`До ${maxVal} ${type}`}
         onInput={(e) => {
          e.preventDefault()   
          if(e.nativeEvent['inputType'] === 'deleteContentBackward') {
            setMaxVal((prev) => {
              if(prev < 10) return 0
              return Number.parseInt(`${prev}`[0])
            })
          } else {
            const inp = Number.parseInt(e.nativeEvent['data'])
            if(Object.is(inp, NaN)) return
  
            setMaxVal((prev) => { 
              const next = Number.parseInt(`${prev}${inp}`)
              if(next > max) return max 
              return next
            })
          }

        }}
        onBlur={(e) => {
          e.preventDefault()
          if(maxVal <= min) setMaxVal(min)
        }}
        className="bordered"

        />
      </div>
    </div>
  );
};
