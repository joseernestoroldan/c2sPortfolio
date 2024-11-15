import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


export default function SectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <Navbar/>
            <div className="w-full">{children}</div>
            
        </div>
      

  );
}
