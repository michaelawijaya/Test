"use client";

import NextImage from "next/image";
import type { ImageProps as NextImageProps } from "next/image";
import { cn } from "~/lib/utils";

interface ImageProps extends Omit<NextImageProps, "src" | "alt" | "className"> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  errorImage?: string;
  useLoader?: boolean;
}

const CDN_BASE = process.env.NEXT_PUBLIC_CDN_BASE || "";

export default function Image({
  src,
  alt,
  className,
  imageClassName,
  errorImage,
  style,
  ...props
}: ImageProps) {
  const normalizedSrc = src.replace(/^[/\\]+/, "");
  const isRemoteSrc = /^https?:\/\//.test(src);
  const isPublicAsset = src.startsWith("/") || src.startsWith("\\");
  const imgSrc =
    isRemoteSrc || isPublicAsset ? src : `${CDN_BASE}/${normalizedSrc}`;

  return (
    <div className={cn("relative", className)}>
      {/* biome-ignore lint/performance/noImgElement: This wrapper is the app's image primitive. */}
      <NextImage
        alt={alt}
        className={cn("h-full w-full", imageClassName)}
        draggable={false}
        fill
        loading="lazy"
        onError={(e) => {
          if (errorImage) {
            (e.target as HTMLImageElement).src = errorImage;
          }
        }}
        src={imgSrc}
        style={style}
        {...props}
      />
    </div>
  );
}
