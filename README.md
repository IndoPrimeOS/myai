# AI Pribadiku

Chat AI pribadi berbasis Next.js yang manggil API dari `gate.joingonka.ai`.
API key disimpan aman di environment variable server (tidak pernah terlihat di browser).

## Struktur

```
my-ai/
├── app/
│   ├── layout.js
│   ├── page.js                    ← UI chat
│   └── api/chat/
│       ├── route.js               ← backend, manggil gate.joingonka.ai
│       └── personality.js         ← atur nama & gaya bicara AI di sini
├── package.json
├── .env.local.example
└── .gitignore
```

## 1. Coba jalan lokal (opsional)

```bash
npm install
cp .env.local.example .env.local
# edit .env.local, isi GONKA_API_KEY dengan key asli kamu
npm run dev
```

Buka http://localhost:3000

## 2. Upload ke GitHub

```bash
cd my-ai
git init
git add .
git commit -m "AI pribadi pertama"
```

Buat repo baru di https://github.com/new (jangan centang "Add README", karena sudah ada),
lalu:

```bash
git remote add origin https://github.com/USERNAME/my-ai.git
git branch -M main
git push -u origin main
```

⚠️ Karena ada `.gitignore`, file `.env.local` (yang berisi key asli) TIDAK ikut ter-upload.
Itu sengaja, supaya key kamu tidak bocor ke publik.

## 3. Deploy ke Vercel

1. Buka https://vercel.com, login pakai akun GitHub.
2. Klik "Add New Project", pilih repo `my-ai` yang barusan di-push.
3. Sebelum klik Deploy, buka bagian **Environment Variables**, tambahkan:
   - `GONKA_API_KEY` → isi dengan key asli kamu (`jg-...`)
   - `GONKA_MODEL` → (opsional) misalnya `MiniMaxAI/MiniMax-M2`
4. Klik **Deploy**. Setelah selesai, kamu dapat URL seperti `https://my-ai-xxxx.vercel.app`.

Sekarang AI pribadimu bisa dibuka dari HP/laptop mana saja, dan key API-nya
tetap aman tersimpan di server Vercel — bukan di kode yang publik di GitHub.

## Mengatur kepribadian AI ✅ (sudah ada)

Buka `app/api/chat/personality.js`, edit isi `SYSTEM_PROMPT` sesuka hati:
nama panggilan AI, gaya bicara (formal/santai), bahasa, aturan khusus,
topik yang boleh/tidak boleh dibahas, dll. Tidak perlu sentuh kode lain.
Setelah edit, `git add . && git commit -m "ubah kepribadian" && git push`
— Vercel otomatis deploy ulang.

## Ide personalisasi lainnya

Beberapa ide lanjutan (bisa aku bantu tambahin satu-satu):
- Simpan riwayat chat per user (pakai database seperti Supabase/Vercel KV).
- Tambahkan login sederhana supaya hanya kamu yang bisa akses.
- Ganti tampilan (warna, font, logo) sesuai selera.
- Streaming jawaban kata-per-kata (biar kayak ChatGPT beneran mengetik).

Tinggal bilang mau yang mana, nanti aku tambahkan ke kode.
