import ApNavbar from "@/components/ApNavbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
          <div>
            {children}
          </div>
    );
  }