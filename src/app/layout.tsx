"use client";

import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, CssBaseline } from "@mui/material";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Hacker News Clone",
//   description: "Hacker News Clone !!!",
// };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="ja">
      <body
        style={{
          backgroundColor: "#111827",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Header />
          <CssBaseline />
          <div
            style={{
              padding: "64px 0",
              zIndex: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

// TODO Interについては後回し、調べて
