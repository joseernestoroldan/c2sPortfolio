import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


export default function SectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="w-full">
            <Navbar/>
            <div className="w-full">{children}</div>
            
        </div>
      

  );
}
