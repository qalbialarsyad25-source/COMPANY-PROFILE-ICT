"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff, Sparkles } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
  containerClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackText,
  fill,
  width,
  height,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        fill ? "w-full h-full" : ""
      } ${containerClassName}`}
      style={!fill && width && height ? { width, height } : undefined}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={className}
          onError={() => {
            setHasError(true);
          }}
          {...props}
        />
      ) : (
        /* Graceful Fallback Placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-blue-950 to-gray-950 border border-blue-900/40">
          <div className="p-2 rounded-full bg-blue-900/30 text-blue-400 mb-1">
            <Sparkles className="w-5 h-5 animate-pulse text-blue-400" />
          </div>
          <span className="text-[11px] font-medium tracking-wide text-blue-300/80 uppercase">
            {fallbackText || alt || "Asset ICT"}
          </span>
        </div>
      )}
    </div>
  );
}
