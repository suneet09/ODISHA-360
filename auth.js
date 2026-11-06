"use strict";

(function initializeOdisha360Auth() {
  const config = window.ODISHA360_SUPABASE_CONFIG || {};
  const url = typeof config.url === "string" ? config.url.trim() : "";
  const anonKey = typeof config.anonKey === "string" ? config.anonKey.trim() : "";

  if (!url || !anonKey || typeof window.supabase?.createClient !== "function") {
    console.error("Authentication is unavailable: check the Supabase URL, publishable key, and client library.");
    window.odisha360Auth = null;
    return;
  }

  const client = window.odisha360Supabase || window.supabase.createClient(url, anonKey, {
    auth: {
      flowType: "pkce",
      autoRefreshToken: true,
      detectSessionInUrl: true,
      persistSession: true
    }
  });
  window.odisha360Supabase = client;

  window.odisha360Auth = {
    client,

    async signInWithGoogle(redirectTo) {
      if (!/^https?:$/.test(window.location.protocol)) {
        return { error: new Error("Open this site through HTTP or HTTPS to use Google sign-in.") };
      }

      return client.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          queryParams: { prompt: "select_account" }
        }
      });
    },

    async getSession() {
      return client.auth.getSession();
    },

    async signOut() {
      return client.auth.signOut();
    }
  };
})();
