import { supabaseAdmin } from "@/lib/supabase/admin";

/**
 * CREATE ADMIN USER (SERVER ONLY)
 */
export async function createAdminUser(email: string, password: string) {
  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error("Error creating admin user:", error);
    return { error };
  }

  return { data };
}
