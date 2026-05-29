import { FahhhEasterEgg } from "@/components/FahhhEasterEgg";
import { FahhhProvider } from "@/components/FahhhProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FahhhProvider>
      <div className="site-shell">
        <div className="site-container">
          <SiteHeader />
          <div className="site-main">{children}</div>
          <SiteFooter />
        </div>
      </div>
      <FahhhEasterEgg />
    </FahhhProvider>
  );
}
