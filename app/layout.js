export const metadata = {
  title: "AI Pribadiku",
  description: "Chat AI pribadi pakai API sendiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
