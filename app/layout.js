import { Geist, Geist_Mono } from "next/font/google";
import { ClientLayout } from "./components/ClientLayout";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "FOCI - Faculty of Instrumentation | University of Lagos",
  description: "Faculty of Instrumentation at University of Lagos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideDown {
            from { 
              opacity: 0;
              transform: translateY(-20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from { 
              opacity: 0;
              transform: translateX(-50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from { 
              opacity: 0;
              transform: translateX(50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
          .animate-slideUp {
            animation: slideUp 0.8s ease-out;
            animation-fill-mode: both;
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.6s ease-out;
            animation-fill-mode: both;
          }
          .animate-slideInRight {
            animation: slideInRight 0.6s ease-out;
            animation-fill-mode: both;
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}