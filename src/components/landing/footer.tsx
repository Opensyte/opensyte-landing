import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "@/components/logo";

export default function Footer() {
  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="border-border/40 bg-background/95 border-t backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Opensyte. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Opensyte/opensyte"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border/50 bg-background/50 text-muted-foreground hover:border-border hover:bg-background hover:text-foreground flex items-center justify-center rounded-lg border p-2 transition-all"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-border/20 mt-8 border-t pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            Open source business management platform • Built with transparency
            and community collaboration
          </p>
        </div>
      </div>
    </footer>
  );
}
