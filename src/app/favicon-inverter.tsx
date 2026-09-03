"use client";

import { useEffect } from "react";

export function FaviconInverter() {
  useEffect(() => {
    const img = new Image();
    img.src = "/icon.PNG";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.filter = "brightness(0) invert(1)";
        ctx.drawImage(img, 0, 0);
        const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (link) {
          link.href = canvas.toDataURL("image/png");
        }
      }
    };
  }, []);

  return null;
}
