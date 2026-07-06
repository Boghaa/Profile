import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ContactCTA } from "./ContactCTA";

export function SiteLayout({ children, hideContact }: { children: ReactNode; hideContact?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1">{children}</main>
      {!hideContact && <ContactCTA />}
      <Footer />
    </div>
  );
}