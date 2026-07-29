# Sigma Frontend — Website

React (CRA) frontend for Sigma Technologies public website.

## Tech Stack
- **Framework**: React 18 (Create React App)
- **Routing**: React Router DOM v6
- **UI**: Bootstrap, MUI, Swiper
- **HTTP**: Axios
- **Deploy**: Vercel

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Setup environment
```bash
cp .env.example .env
# Fill in all values in .env
```

### 3. Run dev server
```bash
npm start
```

Website runs on `http://localhost:3001`

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_SECRET_KEY` | Backend API URL (e.g. `https://api.yourdomain.com`) |
| `REACT_APP_LOCAL_URL` | Backend URL (same as above, legacy var) |
| `REACT_APP_API_KEY` | API key for backend requests |
| `PORT` | Dev server port (default: 3001) |

---

## Vercel Deployment

### Steps
1. Push code to GitHub
2. Vercel → New Project → Import GitHub repo
3. Framework: **Create React App** (auto-detected)
4. Add Environment Variables in Vercel dashboard:
   - `REACT_APP_SECRET_KEY` = your Render backend URL
   - `REACT_APP_LOCAL_URL` = your Render backend URL
   - `REACT_APP_API_KEY` = your API key
5. Deploy ✅

### Build Settings (auto-detected)
| Setting | Value |
|---------|-------|
| **Framework** | Create React App |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |

> [!NOTE]
> Vercel auto-handles React Router redirects. If using a different host, add a `vercel.json` with rewrites.

---

## Key Pages
- `/` — Home
- `/products` — Products listing
- `/products/:slug` — Product detail
- `/blogs` — Blog listing
- `/blogs/:slug` — Blog detail
- `/careers` — Careers
- `/contact` — Contact form
- `/preview/:id` — Admin product preview (internal)
- `/preview/blog/:id` — Admin blog preview (internal)
- `/preview/career/:id` — Admin career preview (internal)
