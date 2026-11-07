import type { NextConfig } from "next";
import { RESENA_ANGELES, RESENA_MUGUERZA } from "./src/lib/contactos";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Destino de los QR impresos para pedir reseñas (temporales: el enlace de Google puede cambiar)
  async redirects() {
    return [
      { source: "/resena/angeles", destination: RESENA_ANGELES, permanent: false },
      { source: "/resena/muguerza", destination: RESENA_MUGUERZA, permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
