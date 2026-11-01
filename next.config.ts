import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un sitio 100% estático en la carpeta `out/` para subirlo a cualquier hosting.
  output: "export",
  // Crea carpetas con index.html (/platillo/x/index.html) para que funcione en Apache/cPanel.
  trailingSlash: true,
  images: {
    // La optimización de imágenes requiere un servidor Node; en hosting estático se desactiva.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
