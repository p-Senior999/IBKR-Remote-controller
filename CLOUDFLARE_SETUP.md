# Cloudflare Pages Configuration

To fix the build error on Cloudflare Pages, you need to configure the following settings:

## In Cloudflare Pages Dashboard:

1. **Go to your project settings** → **Builds & deployments** → **Build configuration**

2. **Set the following:**
   - **Root directory:** `client`
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Node.js version:** `18` or `20` (recommended)

3. **Environment variables (if needed):**
   - Add any required environment variables in the **Environment variables** section

## Important Notes:

- Make sure `client/package-lock.json` is committed to git
- The `_redirects` file in `client/public/` is needed for React Router to work properly
- Cloudflare Pages uses `npm ci` which requires a valid `package-lock.json`

## After Configuration:

1. Commit and push the `package-lock.json` file:
   ```bash
   git add client/package-lock.json
   git commit -m "Add package-lock.json for Cloudflare build"
   git push
   ```

2. Cloudflare will automatically trigger a new build

