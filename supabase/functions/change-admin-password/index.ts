import { withSupabase } from "npm:@supabase/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export default {
  fetch: withSupabase({ auth: "user" }, async (req, ctx) => {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    if (req.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
    }

    if (ctx.userClaims?.app_metadata?.role !== "admin") {
      return Response.json({ error: "Admin access required" }, { status: 403, headers: corsHeaders });
    }

    let body: { password?: string };
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400, headers: corsHeaders });
    }

    const password = body.password?.trim() ?? "";
    if (password.length < 8) {
      return Response.json({ error: "Password must be at least 8 characters." }, { status: 400, headers: corsHeaders });
    }

    const userId = ctx.userClaims?.sub;
    if (!userId) {
      return Response.json({ error: "Authenticated user not found." }, { status: 401, headers: corsHeaders });
    }

    const { error } = await ctx.supabaseAdmin.auth.admin.updateUserById(userId, { password });

    if (error) {
      return Response.json({ error: error.message }, { status: 400, headers: corsHeaders });
    }

    return Response.json({ success: true }, { status: 200, headers: corsHeaders });
  }),
};
