import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("\n🔍 ============ MIDDLEWARE START ============");
  console.log("📍 Path:", req.nextUrl.pathname);
  console.log(
    "🍪 Cookies:",
    req.cookies.getAll().map((c) => c.name),
  );

  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const value = req.cookies.get(name)?.value;
          console.log(`🍪 GET cookie [${name}]:`, value ? "exists" : "missing");
          return value;
        },
        set(name: string, value: string, options: CookieOptions) {
          console.log(`🍪 SET cookie [${name}]`);
          req.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          console.log(`🍪 REMOVE cookie [${name}]`);
          req.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  // Get user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("👤 User:", user?.email || "Not authenticated");
  console.log("❌ Error:", error?.message || "None");

  const url = req.nextUrl;
  const isLoginPage = url.pathname === "/auth/login";
  const isAdminRoute = url.pathname.startsWith("/admin");

  console.log("🎯 Is Login Page:", isLoginPage);
  console.log("🎯 Is Admin Route:", isAdminRoute);

  // Login page logic
  if (isLoginPage) {
    if (user) {
      console.log("↗️  REDIRECT: /auth/login → /admin (user logged in)");
      console.log("🔍 ============ MIDDLEWARE END ============\n");
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    console.log("✅ ALLOW: Show login page");
    console.log("🔍 ============ MIDDLEWARE END ============\n");
    return response;
  }

  // Admin routes logic
  if (isAdminRoute) {
    if (!user) {
      console.log("↗️  REDIRECT: /admin → /auth/login (no user)");
      console.log("🔍 ============ MIDDLEWARE END ============\n");
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    console.log("✅ ALLOW: Show admin page");
    console.log("🔍 ============ MIDDLEWARE END ============\n");
    return response;
  }

  console.log("✅ ALLOW: Public route");
  console.log("🔍 ============ MIDDLEWARE END ============\n");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
