# Argus Trading Ops Dashboard

High-performance trading bot operations dashboard built with Next.js 14, Tailwind CSS, and Recharts. The UI provides a command-center experience for monitoring autonomous strategies, risk envelope utilization, execution quality, and real-time telemetry.

## ✨ Highlights

- Equity curve analytics with area visualizations
- KPI grid summarizing liquidity, PnL, and efficiency ratios
- Strategy, position, and order surfaces aligned to institutional workflows
- Live risk controls, latency watchboard, and alerts stream
- API route delivering synthetic live data with realistic jitter

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the dashboard.

## 🛠️ Scripts

- `npm run dev` – Launch the development server
- `npm run build` – Create a production build
- `npm start` – Start the production server
- `npm run lint` – Run Next.js linting

## 🧱 Architecture

- **Next.js App Router** for server components and API routes
- **Tailwind CSS** for theming and responsive layout
- **SWR** for continuous polling of the `/api/dashboard` endpoint
- **Recharts** for performance and allocation visualizations

## 📦 Deployment

The project is optimized for seamless deployment on Vercel. After building locally, deploy with:

```bash
npx vercel deploy --prod
```

---

Customize the mock data and data service to connect real trading infrastructure, risk engines, or message buses. The modular component architecture is designed to evolve with additional telemetry panels and controls.
