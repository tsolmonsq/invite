// ApNavbar компонентыг импортлох.
import ApNavbar from "@/components/ApNavbar";

// RootLayout компонент нь бүх хуудсуудын үндсэн layout үүргийг гүйцэтгэнэ.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ApNavbar компонентыг бүх хуудсууд дээр давхар ашиглах
    <ApNavbar>
      {children}  {/* Хуудасны агуулгыг энд харуулах */}
    </ApNavbar>
  );
}