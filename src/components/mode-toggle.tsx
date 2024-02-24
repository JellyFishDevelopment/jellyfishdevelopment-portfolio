"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [isDark, setIsDark] = React.useState(theme === 'dark');

  // Observar mudanças no tema e atualizar o estado isDark
  React.useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    const overlay = document.querySelector('.rfm-overlay') as HTMLDivElement;
    if (newTheme === "dark") {
      // Definir gradiente para escuro
      overlay.style.setProperty('--gradient-color', '#040102');
    } else if (newTheme == "light") {
      // Definir gradiente para claro
      overlay.style.setProperty('--gradient-color', '#fdf7f9');
    } else {
      overlay.style.setProperty('--gradient-color', '#fdf7f9');
    }
    // Alterar o tema
    setTheme(newTheme);
  };
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
