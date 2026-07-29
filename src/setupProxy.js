/**
 * CRA Dev Server Proxy (local development only)
 * 
 * In production, Vercel handles /images/* rewrites to Supabase.
 * Locally, this proxies /images/* to the backend which serves from Supabase.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/images',
        createProxyMiddleware({
            target: process.env.REACT_APP_SECRET_KEY || 'http://localhost:3000',
            changeOrigin: true,
        })
    );
};
