import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // npm install lucide-react yapmalısın
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import HackerText from "./HackerText";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SYSTEM", href: "#hero" },
    { name: "MISSION", href: "#mission" },
    { name: "MODULES", href: "#modules" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "py-2 bg-black/80 backdrop-blur-md border-white/10"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="flex gap-0.5 h-4 items-end">
            <span className="w-0.5 bg-primary h-full animate-[pulse_0.5s_infinite]"></span>
            <span className="w-0.5 bg-primary h-1/2 animate-[pulse_0.7s_infinite]"></span>
          </div>
          <div className="font-tech text-2xl tracking-tighter text-white">
            NEXUS<span className="text-primary group-hover:text-white transition-colors">.OS</span>
          </div>
        </div>

        {/* DESKTOP MENU (SHADCN) */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <a 
                      href={link.href} 
                      className="bg-transparent hover:bg-white/5 text-gray-400 hover:text-primary font-mono tracking-widest data-[active]:bg-transparent focus:bg-transparent"
                    >
                      <span className="text-primary opacity-50 mr-1">[</span>
                      <HackerText text={link.name} />
                      <span className="text-primary opacity-50 ml-1">]</span>
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ACTION BUTTON & MOBILE MENU */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden md:flex border-primary/50 text-primary hover:bg-primary hover:text-black font-tech tracking-widest rounded-none relative overflow-hidden group"
          >
            <span className="relative z-10">LOGIN_INIT</span>
            {/* Hover Efekti */}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </Button>

          {/* MOBILE MENU (SHEET) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-white/10 w-[300px]">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-2xl font-tech text-white hover:text-primary transition-colors">
                    {link.name}
                  </a>
                ))}
                <Button className="w-full bg-primary text-black font-bold font-tech rounded-none">
                  INITIALIZE
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;