import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "Ardent Construction",
  description: "Dependable construction services throughout North Idaho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vel6rpp.css" />
      </head>
      <body>{children}</body>
      <Footer />
    </html>
  );
}
