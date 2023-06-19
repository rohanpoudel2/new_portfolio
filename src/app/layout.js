import Navbar from '@/components/navbar/Navbar'
import './globals.scss'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rohan Poudel - 😎",
  description: "Personal Portfolio website of Rohan Poudel. Designed and Developed by yours truly",
  authors: [{ name: 'Rohan Poudel', url: 'https://rohanpoudel.com.np' }],
  creator: "Rohan Poudel",
  metadataBase: new URL(process.env.SITE_URL),
  openGraph: {
    title: "Rohan Poudel - 😎",
    type: "website",
    url: `${process.env.SITE_URL}`,
    description: "Personal Portfolio website of Rohan Poudel. Designed and Developed by yours truly",
  },
  themeColor: "#DFD1C1"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="apple-touch-icon" href="./icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />

        <Script strategy="lazyOnload">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
page_path: window.location.pathname,
});
`}
        </Script>
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
