# AirNav Invoice App (WITT)

Fullstack web app untuk Bandara Sultan Iskandar Muda (WITT) yang menangani input layanan navigasi penerbangan (Advance/Extend), perhitungan otomatis, dan pembuatan PDF invoice sesuai template.

## Fitur Utama
- Login akun + RBAC (ADMIN/OPERATOR/VIEWER).
- Input layanan Advance/Extend dengan unit APP/TWR/AFIS dan perhitungan otomatis.
- Autonumbering receipt WITT per bucket (DOM/INT, tahun, bulan).
- Dashboard KPI dan tabel rekap sortable/filterable.
- Import/Export CSV format input dan output.
- Generate PDF Receipt + Breakdown + Combined.

## Prasyarat
- Node.js 18+
- PostgreSQL

## Setup
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run dev
```

## Catatan Template PDF
Template PDF berada di `public/templates/receipt_template.pdf` dan `public/templates/breakdown_template.pdf`.
Pada repo ini file PDF asli tidak disertakan karena keterbatasan binary pada PR.
Silakan tempatkan template resmi Lampiran 1 dan Lampiran 2 sesuai README di folder `public/templates/`.

## Struktur Direktori
```
airnav-invoice-app/
├─ README.md
├─ package.json
├─ next.config.js
├─ tsconfig.json
├─ .env.example
├─ .gitignore
├─ prisma/
│  ├─ schema.prisma
│  ├─ migrations/
│  └─ seed.ts
├─ public/
│  ├─ templates/
│  │  ├─ receipt_template.placeholder.txt
│  │  ├─ breakdown_template.placeholder.txt
│  │  ├─ combined_template_notes.txt
│  │  └─ README.txt
│  ├─ logos/
│  │  └─ README.txt
│  ├─ favicon.README.txt
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  │  ├─ page.tsx
│  │  ├─ (auth)/
│  │  │  ├─ login/
│  │  │  │  └─ page.tsx
│  │  │  ├─ register/
│  │  │  │  └─ page.tsx
│  │  │  └─ forgot-password/
│  │  │     └─ page.tsx
│  │  ├─ (app)/
│  │  │  ├─ dashboard/
│  │  │  │  └─ page.tsx
│  │  │  ├─ services/
│  │  │  │  ├─ page.tsx
│  │  │  │  ├─ new/
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ import/
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ [id]/
│  │  │  │     ├─ page.tsx
│  │  │  │     └─ edit/
│  │  │  │        └─ page.tsx
│  │  │  ├─ invoices/
│  │  │  │  └─ [id]/
│  │  │  │     ├─ receipt/
│  │  │  │     │  └─ page.tsx
│  │  │  │     ├─ breakdown/
│  │  │  │     │  └─ page.tsx
│  │  │  │     └─ combined/
│  │  │  │        └─ page.tsx
│  │  │  ├─ users/
│  │  │  │  └─ page.tsx
│  │  │  └─ settings/
│  │  │     └─ page.tsx
│  │  ├─ api/
│  │  │  ├─ auth/
│  │  │  │  ├─ login/route.ts
│  │  │  │  ├─ logout/route.ts
│  │  │  │  └─ me/route.ts
│  │  │  ├─ users/
│  │  │  │  ├─ route.ts
│  │  │  │  └─ [id]/route.ts
│  │  │  ├─ services/
│  │  │  │  ├─ route.ts
│  │  │  │  ├─ import-csv/route.ts
│  │  │  │  └─ [id]/
│  │  │  │     ├─ route.ts
│  │  │  │     ├─ generate-pdf/route.ts
│  │  │  │     ├─ pdf/
│  │  │  │     │  ├─ receipt/route.ts
│  │  │  │     │  ├─ breakdown/route.ts
│  │  │  │     │  └─ combined/route.ts
│  │  │  │     └─ mark-paid/route.ts
│  │  │  └─ dashboard/
│  │  │     └─ route.ts
│  │  └─ middleware.ts
│  ├─ components/
│  │  ├─ ui/
│  │  ├─ layout/
│  │  │  ├─ AppShell.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  └─ Topbar.tsx
│  │  ├─ services/
│  │  │  ├─ ServiceForm.tsx
│  │  │  ├─ ServicesTable.tsx
│  │  │  ├─ ServiceDetail.tsx
│  │  │  ├─ PdfActions.tsx
│  │  │  └─ ImportCsvWizard.tsx
│  │  ├─ dashboard/
│  │  │  ├─ KpiCards.tsx
│  │  │  ├─ TrendChart.tsx
│  │  │  ├─ TopAirlinesTable.tsx
│  │  │  └─ OverdueList.tsx
│  │  └─ auth/
│  │     ├─ LoginForm.tsx
│  │     └─ RequireRole.tsx
│  ├─ lib/
│  │  ├─ db/
│  │  │  ├─ prisma.ts
│  │  │  └─ transactions.ts
│  │  ├─ auth/
│  │  │  ├─ session.ts
│  │  │  ├─ password.ts
│  │  │  └─ rbac.ts
│  │  ├─ config/
│  │  │  ├─ rates.ts
│  │  │  └─ constants.ts
│  │  ├─ time/
│  │  │  ├─ tz.ts
│  │  │  └─ format.ts
│  │  ├─ calc/
│  │  │  ├─ billing.ts
│  │  │  └─ receiptNo.ts
│  │  ├─ csv/
│  │  │  ├─ parse.ts
│  │  │  ├─ validate.ts
│  │  │  └─ mapping.ts
│  │  ├─ pdf/
│  │  │  ├─ generateReceipt.ts
│  │  │  ├─ generateBreakdown.ts
│  │  │  ├─ mergeCombined.ts
│  │  │  └─ storage.ts
│  │  ├─ export/
│  │  │  └─ toCsv.ts
│  │  └─ logger.ts
│  ├─ types/
│  │  ├─ service.ts
│  │  ├─ auth.ts
│  │  └─ pdf.ts
│  └─ validators/
│     ├─ service.schema.ts
│     ├─ import.schema.ts
│     └─ user.schema.ts
├─ storage/
│  ├─ pdf/
│  │  ├─ receipt/
│  │  ├─ breakdown/
│  │  └─ combined/
│  └─ imports/
│     └─ csv/
└─ scripts/
   ├─ create-admin.ts
   └─ backfill-receipt-counter.ts
```
