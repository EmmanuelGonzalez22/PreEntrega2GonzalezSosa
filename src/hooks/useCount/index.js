import { useState } from "react";

const useCount = (initial, min, max) => {
  initial = Math.max(Math.min(initial, max), min);
  const [cantidad, setCantidad] = useState(initial);

  const resta = () => cantidad > min && setCantidad((prev) => prev - 1);

  const incrementa = () => cantidad < max && setCantidad((prev) => prev + 1);

  const reset = () => {
    if (max === 0) {
      setCantidad(undefined);
    } else {
      setCantidad(Math.max(Math.min(initial, max), min));
    }
  };
  return { cantidad, resta, incrementa, reset };
};

export { useCount };
