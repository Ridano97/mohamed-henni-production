import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mohamed Henni - Vidéaste",
  description: "Site officiel vidéaste professionnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {/* padding-top = hauteur navbar (80px) */}
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}