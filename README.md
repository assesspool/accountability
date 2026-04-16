# Drug Accountability Log — PWA

A mobile-installable Progressive Web App for participant dosing, 
compliance calculation, and eCRF reconciliation.

Works fully **offline** once installed.

---

## Files in this folder

```
index.html      ← the app (open this in a browser to use locally)
manifest.json   ← PWA install config
sw.js           ← service worker (offline support)
icons/
  icon-192.png
  icon-512.png
```

---

## Deployment: GitHub Pages (free, ~5 minutes)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** in the top right → **New repository**
2. Name it: `drug-accountability` (or anything you like)
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 3 — Upload the files
1. On the new repo page, click **uploading an existing file**
2. Drag ALL files from this folder into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. Then upload the icons folder:
   - Click the repo, create folder `icons/`
   - Upload `icon-192.png` and `icon-512.png` into it
4. Click **Commit changes** after each upload

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

### Step 5 — Get your URL
After ~1 minute, your app will be live at:
```
https://YOUR-USERNAME.github.io/drug-accountability/
```
GitHub will show this URL on the Pages settings page.

---

## Installing on your iPhone

1. Open the URL above in **Safari** (must be Safari for iOS install)
2. Tap the **Share** button (box with arrow at bottom of screen)
3. Scroll down and tap **Add to Home Screen**
4. Name it (e.g. "Drug Acct") → tap **Add**

It will appear on your home screen like a native app.
Opens full-screen with no browser chrome.
Works offline after first load.

---

## Installing on Android

1. Open the URL in **Chrome**
2. Tap the three-dot menu → **Add to Home screen** (or a banner may appear automatically)
3. Tap **Install**

---

## Updating the app

When you make changes to `index.html`:
1. Go to your GitHub repo
2. Click on `index.html` → pencil icon (Edit) → paste updated content → Commit
3. Bump the cache version in `sw.js`: change `drug-acct-v1` to `drug-acct-v2`
   (this forces phones to pick up the new version)

---

## Privacy note

All data is entered and stays **on your device**.
Nothing is transmitted anywhere. No server, no database.
GitHub only hosts the static files — it never sees patient data.
---

## License

MIT License — free to use, modify, and share with attribution.

## Disclaimer

This tool is intended as a reference aid only. It does not replace 
institutional SOPs, protocol requirements, sponsor guidelines, or 
clinical judgment. All data entered remains on your device and is 
never transmitted or stored externally.