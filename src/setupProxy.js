/**
 * CRA Dev Server Proxy (local development only)
 * 
 * In production, Vercel handles /images/* rewrites to Supabase.
 * Locally, this proxies /images/:folder/:file to the backend which serves from Supabase.
 * 
 * IMPORTANT: Only proxy the exact Supabase-backed folders (2-segment paths).
 * Static public/ assets like /images/png/logo/* and /images/img/* must NOT
 * be proxied — the dev server serves those directly from the public/ folder.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

// Supabase-backed folders that go through the backend image proxy
const SUPABASE_FOLDERS = [
    '/images/products',
    '/images/banners',
    '/images/blogs',
    '/images/blog-categories',
    '/images/testimonials',
    '/images/categories',
    '/images/careers',
    '/images/documents',
];

module.exports = function(app) {
    SUPABASE_FOLDERS.forEach(folder => {
        app.use(
            folder,
            createProxyMiddleware({
                target: process.env.REACT_APP_SECRET_KEY || 'http://localhost:3000',
                changeOrigin: true,
            })
        );
    });
};
