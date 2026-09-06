import "./globals.css"
import localFont from "next/font/local"

const fontTegaki = localFont({
  src:"./assets/fonts/tegaki.woff2",
  variable: "--font-tegaki"
});
const fontHandjet = localFont({
  src:"./assets/fonts/handjet.woff2",
  variable: "--font-handjet-local"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontTegaki.variable} ${fontHandjet.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
