import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/auth/", "/api/"],
      },
    ],
    sitemap: "https://bantuancode.com/sitemap.xml",
    host: "https://bantuancode.com",
  };
}
