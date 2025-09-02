# OAuth Setup Guide for Adnexus

## 🔐 Setting Up Google & GitHub OAuth in Supabase

### Prerequisites
- Access to your Supabase project dashboard
- Google Cloud Console account
- GitHub account with ability to create OAuth apps

---

## 1. Google OAuth Setup

### Step 1: Enable Google Provider in Supabase
1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/uxuhclrodqpdyrhzypiv/auth/providers
2. Find **Google** in the providers list
3. Toggle it **ON**

### Step 2: Create Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **+ CREATE CREDENTIALS** > **OAuth client ID**
5. If prompted, configure OAuth consent screen first:
   - User Type: External
   - App name: Adnexus
   - Support email: Your email
   - Authorized domains: Add `supabase.co`
   - Add these scopes: `email`, `profile`, `openid`

### Step 3: Configure OAuth Client
1. Application type: **Web application**
2. Name: **Adnexus OAuth**
3. Authorized JavaScript origins:
   ```
   http://localhost:8082
   http://localhost:5173
   https://uxuhclrodqpdyrhzypiv.supabase.co
   ```
4. Authorized redirect URIs:
   ```
   https://uxuhclrodqpdyrhzypiv.supabase.co/auth/v1/callback
   ```
5. Click **CREATE**
6. Copy your **Client ID** and **Client Secret**

### Step 4: Add to Supabase
1. Back in Supabase Dashboard > Auth > Providers > Google
2. Paste your **Client ID** 
3. Paste your **Client Secret**
4. Click **Save**

---

## 2. GitHub OAuth Setup

### Step 1: Enable GitHub Provider in Supabase
1. In Supabase Dashboard > Auth > Providers
2. Find **GitHub** and toggle it **ON**

### Step 2: Create GitHub OAuth App
1. Go to GitHub Settings: https://github.com/settings/developers
2. Click **New OAuth App**
3. Fill in:
   - Application name: **Adnexus**
   - Homepage URL: **http://localhost:8082** (or your production URL)
   - Authorization callback URL: **https://uxuhclrodqpdyrhzypiv.supabase.co/auth/v1/callback**
4. Click **Register application**
5. Copy the **Client ID**
6. Generate a new **Client Secret** and copy it

### Step 3: Add to Supabase
1. Back in Supabase Dashboard > Auth > Providers > GitHub
2. Paste your **Client ID**
3. Paste your **Client Secret**
4. Click **Save**

---

## 3. Update Redirect URLs

### For Local Development
The Auth component already has the correct redirect URLs:
```javascript
redirectTo: `${window.location.origin}/dashboard`
```

### For Production
When deploying to production, make sure to:
1. Add your production domain to Google OAuth authorized origins
2. Add production callback URL to both Google and GitHub apps
3. Update Supabase Site URL in **Settings > General**

---

## 4. Test OAuth Login

### Test Google Login:
1. Go to http://localhost:8082/auth
2. Click "Continue with Google"
3. Select your Google account
4. Should redirect to Dashboard after successful auth

### Test GitHub Login:
1. Go to http://localhost:8082/auth
2. Click "Continue with GitHub"
3. Authorize the app
4. Should redirect to Dashboard after successful auth

---

## 5. Troubleshooting

### Common Issues:

**"Redirect URI mismatch" error:**
- Make sure the callback URL in your OAuth app matches exactly: 
  `https://uxuhclrodqpdyrhzypiv.supabase.co/auth/v1/callback`
- No trailing slashes!

**"Invalid client" error:**
- Double-check Client ID and Secret are correctly pasted in Supabase
- Make sure there are no extra spaces

**Login succeeds but doesn't redirect:**
- Check browser console for errors
- Verify your Supabase Site URL is set correctly
- Make sure `redirectTo` URL is on the allowed list in Supabase

**"This app is blocked" (Google):**
- For development, add test users in Google Console
- For production, submit app for verification

---

## 6. Environment Variables (Optional)

If you want to use different Supabase projects for dev/prod:

Create `.env.local`:
```env
VITE_SUPABASE_URL=https://uxuhclrodqpdyrhzypiv.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Update `client.ts`:
```typescript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://uxuhclrodqpdyrhzypiv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "existing_key";
```

---

## 📝 Quick Links

- **Supabase Dashboard**: https://supabase.com/dashboard/project/uxuhclrodqpdyrhzypiv
- **Auth Providers**: https://supabase.com/dashboard/project/uxuhclrodqpdyrhzypiv/auth/providers
- **Google Cloud Console**: https://console.cloud.google.com
- **GitHub OAuth Apps**: https://github.com/settings/developers

---

## ✅ Checklist

- [ ] Google OAuth enabled in Supabase
- [ ] Google Client ID & Secret added
- [ ] GitHub OAuth enabled in Supabase  
- [ ] GitHub Client ID & Secret added
- [ ] Callback URLs correctly configured
- [ ] Test login working for both providers
- [ ] Production URLs added when deploying

---

Last Updated: August 31, 2025