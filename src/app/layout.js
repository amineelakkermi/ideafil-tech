import localFont from "next/font/local"
import { Tajawal } from "next/font/google"
import "./globals.css"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import Navbar from "./components/Navbar"

const handicrafts = localFont({
  src: "./fonts/TheYearofHandicrafts-Regular.otf",
  variable: "--font-handicrafts",
  weight: "400",
  display: "swap",
})


const tajwal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajwal",
  weight: ["400", "500", "700"],
  display: "swap",
})


export const metadata = {
  metadataBase: new URL("https://ideafil.sa/"),

  title: {
    default: "أيدفل تك | تصميم وتطوير المواقع وتطبيقات الجوال وخدمات الذكاء الاصطناعي",
    template: "%s | أيدفل تك للتقنية",
  },

  description:
    "أيدفل تك شركة تقنية متخصصة في تصميم وتطوير المواقع الإلكترونية، تطوير تطبيقات الجوال، وتقديم حلول الذكاء الاصطناعي للشركات في السعودية. نساعدك على بناء منتجات رقمية احترافية وتنمية أعمالك.",

  keywords: [
    "تصميم مواقع",
    "تطوير مواقع إلكترونية",
    "شركة تصميم مواقع في السعودية",
    "تطوير تطبيقات الجوال",
    "برمجة تطبيقات",
    "خدمات الذكاء الاصطناعي",
    "AI services",
    "Web Development Saudi Arabia",
    "Mobile App Development",
    "شركة برمجة",
    "تصميم مواقع احترافية",
    "شركة تقنية",
  ],

  authors: [{ name: "أيدفل تك" }],
  creator: "أيدفل تك",
  publisher: "أيدفل تك",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "أيدفل تك | تصميم مواقع وتطبيقات الجوال وخدمات الذكاء الاصطناعي",
    images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "أيدفل تك",
    },
  ],
    description:
      "شركة تقنية تقدم خدمات تصميم وتطوير المواقع الإلكترونية، برمجة تطبيقات الجوال، وتطوير حلول الذكاء الاصطناعي للشركات في السعودية.",
    url: "https://ideafil.sa/",
    siteName: "أيدفل تك",
    locale: "ar_SA",
    type: "website",
  },

  category: "Technology",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${handicrafts.variable} ${tajwal.variable} antialiased`}>
        <ScrollTop />
        {children}
        <Footer />

      </body>
    </html>
  )
}
