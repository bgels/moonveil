import { TbEggCrackedFilled } from "react-icons/tb";
import "./globals.css"
import localFont from "next/font/local"
import PreloadScreen from "./preloadScreen";

const fontTegaki = localFont({
  src:"./fonts/tegaki.woff2",
  variable: "--font-tegaki"
});
const fontHandjet = localFont({
  src:"./fonts/handjet.woff2",
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
        <PreloadScreen />
        {children}
      </body>
    </html>
  );
}
