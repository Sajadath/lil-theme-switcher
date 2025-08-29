# 🌗 Next.js + Tailwind 4 Theme Switcher

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwind-css)](https://tailwindcss.com/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

---

This project demonstrates a **no-flash light/dark theme switcher** using **Next.js 14, Tailwind 4, and TypeScript**.  
It avoids the common hydration flicker by applying `.light` / `.dark` classes to the `<body>` element **before hydration**.

✨ Smooth, simple, and ready to drop into your Next.js app!

---

## 📸 Preview

| Light ☀️                                                               | Dark 🌙                                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Light Mode](https://via.placeholder.com/300x150.png?text=Light+Mode) | ![Dark Mode](https://via.placeholder.com/300x150.png?text=Dark+Mode) |

---

## 🚀 Getting Started

Clone the repo and run locally:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open http://localhost:3000 in your browser.

🛠 Add to Your Project
If you want to use this theme-switcher in your own project:

1️⃣ Copy Components

Copy the components folder into your src (or if you already have components foolder just the Theme folder inside).

2️⃣ Install Dependencies

Install js-cookie:

```bash
npm install js-cookie@2.2.1
npm install --save-dev @types/js-cookie
```

👉 If you prefer, you can skip this and handle cookies manually (just update ThemeButton.tsx with the browser cookie API).

3️⃣ Wrap Layout with ThemeProvider

In RootLayout.tsx, wrap your app with the ThemeProvider.

4️⃣ Use the Theme Switcher

Add the ThemeContainer component (from components/Theme) wherever you want the toggle.

5️⃣ Done 🎉

You now have a smooth, flicker-free dark/light theme switcher.

📂 Project Structure

```bash
src/
    components/
        Theme/
            ThemeProvider.tsx
            ThemeContainer.tsx
            ThemeButton.tsx
            ThemeIcon.tsx
            ThemeCircle.tsx
```

✨ Features
✅ No flash before hydration
✅ Dark mode 🌙 + Light mode ☀️
✅ Persistent theme via cookies (or manual storage)
✅ Tailwind CSS v4 ready
✅ TypeScript support

📜 License
This project is licensed under the MIT License.

💡 Contributions and suggestions are welcome! Feel free to fork, improve, or open issues.
