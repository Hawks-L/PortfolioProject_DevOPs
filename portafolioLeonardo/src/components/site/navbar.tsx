"use client"

import { ThemeToggle } from "@/components/site/theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const links = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center font-bold text-xl">
          <Image
            src="/logo.png" // poner archivo en public/logo.png
            alt="Logo Hawks"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm mt-1">Hawks_L11</span>
        </Link>

        {/* Menú en desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2">
          <a
            href="/CV.pdf" // poner PDF en public/CV-HawksL11.pdf
            download
          >
            <Button>Descargar CV</Button>
          </a>
          <ThemeToggle />
        </div>
        </div>

        {/* Menú en móvil */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:underline"
                >
                  {link.label}
                </Link>
              ))}


          <a
            href="/CV.pdf" // poner PDF en public/CV-HawksL11.pdf
            download
          >
            <Button>Descargar CV</Button>
          </a>
          <ThemeToggle />            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
