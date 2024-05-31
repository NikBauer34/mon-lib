import "./globals.css";
import { AuthProvider, ModeProvider } from "@/shared";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
        <html lang="en">
          <body>
            <ModeProvider>
              {children}
            </ModeProvider>  
          </body>
        </html>
    </AuthProvider>
  );
}
