'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface ImageProps extends NextImageProps {
  fallbackSrc?: string;
}

export default function Image({ src, fallbackSrc = '/auth3/images/placeholder.jpg', ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src as string);
  
  useEffect(() => {
    // GitHub Pages 배포 환경에서 이미지 경로 조정
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const basePath = '/auth3';
      if (typeof src === 'string' && src.startsWith('/') && !src.startsWith(basePath)) {
        setImgSrc(`${basePath}${src}`);
      }
    }
  }, [src]);

  return (
    <NextImage
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
} 