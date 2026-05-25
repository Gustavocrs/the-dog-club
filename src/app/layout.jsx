import "@/app/globals.css";
import {
  DM_Serif_Display,
  Fredoka,
  Inter,
  Lato,
  Montserrat,
  Open_Sans,
  Playfair_Display,
  Quicksand,
  Roboto,
} from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-lato" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dmserif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Dog Daycare and Dog Boarding in Central Auckland | The Dog Club",
  description:
    "Located in St Johns, Auckland, The Dog Club is a Doggie Daycare and Boarding facility featuring both indoor and outdoor play areas for puppies and dogs of all sizes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${fredoka.variable} 
        ${quicksand.variable} 
        ${playfair.variable} 
        ${lato.variable} 
        ${montserrat.variable} 
        ${roboto.variable} 
        ${openSans.variable} 
        ${dmSerif.variable} 
        ${inter.variable}
      `}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
