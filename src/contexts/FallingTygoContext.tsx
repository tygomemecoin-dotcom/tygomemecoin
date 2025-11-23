"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import FallingTygo from "@/components/FallingTygo";
import BoomEffect from "@/components/BoomEffect";

type AnimationType = "falling" | "zoom";

interface FallingTygoContextType {
  triggerFalling: (type?: AnimationType) => void;
}

const FallingTygoContext = createContext<FallingTygoContextType | undefined>(undefined);

export function FallingTygoProvider({ children }: { children: ReactNode }) {
  const [triggerKey, setTriggerKey] = useState(0);
  const [boomKey, setBoomKey] = useState(0);
  const [animationType, setAnimationType] = useState<AnimationType>("falling");

  const triggerFalling = (type: AnimationType = "falling") => {
    setAnimationType(type);
    
    if (type === "zoom") {
      // Trigger BOOM effect first, then zoom
      setBoomKey(prev => prev + 1);
      setTimeout(() => {
        setTriggerKey(prev => prev + 1);
      }, 2000); // Start zoom after BOOM
    } else {
      setTriggerKey(prev => prev + 1);
    }
  };

  return (
    <FallingTygoContext.Provider value={{ triggerFalling }}>
      {children}
      <BoomEffect key={boomKey} trigger={boomKey > 0} />
      <FallingTygo key={triggerKey} trigger={triggerKey > 0} animationType={animationType} />
    </FallingTygoContext.Provider>
  );
}

export function useFallingTygo() {
  const context = useContext(FallingTygoContext);
  if (context === undefined) {
    throw new Error("useFallingTygo must be used within FallingTygoProvider");
  }
  return context;
}

