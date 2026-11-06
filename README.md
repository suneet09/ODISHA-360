# ODISHA-360
Odisha 360° – Smart Tourism and Travel Planning Platform

## Run locally

Serve this folder over HTTP (OAuth does not work from a `file://` URL):

```powershell
python -m http.server 8766
```

Open `http://127.0.0.1:8766/index.html`. The trip planner and destination guide work from the local data file without Supabase; itineraries and favourites are saved in this browser.

## Supabase and Google sign-in setup

1. Create a Supabase project. In `supabase-config.js`, set its Project URL and publishable key (Project Settings → API). The publishable key is intended for browser use; never put a service-role/secret key in frontend code.
2. In Google Cloud Console, configure the OAuth consent screen (add test users if its publishing status is **Testing**) and create an OAuth client ID with application type **Web application**. Add this exact URI under **Authorized redirect URIs** (replace `<project-ref>` with your Supabase project reference):
   - `https://<project-ref>.supabase.co/auth/v1/callback`
3. In Supabase Dashboard → Authentication → Sign In / Providers → Google, enable Google and enter the Google OAuth **Client ID** and **Client secret** from Google Cloud Console. Keep the client secret in Supabase; it must not be added to this website's frontend files.
4. In Supabase Dashboard → Authentication → URL Configuration, set the Site URL to your deployed website origin and add exact redirect URLs for local development and production, including:
   - `http://localhost:8766/dashboard.html`
   - `http://127.0.0.1:8766/dashboard.html`
   - `http://localhost:8765/dashboard.html`
   - `http://127.0.0.1:8765/dashboard.html`
   - `https://<your-domain>/dashboard.html`
5. Run the complete `supabase-schema.sql` in the Supabase SQL Editor. It creates the public destination table and seeds sample entries, adds owner-scoped itinerary and favourite tables/policies, and removes the old anonymous itinerary insert policy. Re-run it when updating an existing project so the new columns and policies are applied.
6. Add the exact local redirect in Supabase → Authentication → URL Configuration:
   - `http://127.0.0.1:8766/dashboard.html`
7. Open `http://127.0.0.1:8766/login.html`. The sign-in redirects to Google's official account-selection flow, then returns to `dashboard.html`. Supabase creates a user on first sign-in and reuses their account on later sign-ins; the dashboard verifies the user with Supabase before displaying the Google profile and cloud-saved trips.

The Google password is entered only on Google. Supabase manages the OAuth exchange and persisted session; the website never receives or stores the Google password. The dashboard checks for a session and verifies the user with Supabase before showing profile details. The planner always builds and displays a route from `destinations.js`; it saves locally first and attempts account sync when signed in. If Supabase is unavailable, the local itinerary remains available in the same browser.

Destination daily costs and entry allowances are indicative planning estimates, not official quotes. Road distances and journey times are estimates; unknown starting places are approximated from Bhubaneswar. Check official opening hours, current fees, access restrictions, tide/forest notices and event dates before travel. Culture galleries use available local destination photos as regional context, not documentary images of every art or festival.

The login and profile UI are in `login.html` and `dashboard.html`; shared styles are in `auth.css`; Supabase setup and auth-page behavior are in `supabase-config.js`, `auth.js`, and `auth-pages.js`. Newsletter and contact forms currently show a status message but are not connected to storage or a delivery service.
