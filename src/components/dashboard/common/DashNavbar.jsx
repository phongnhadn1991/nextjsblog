"use client"
import { LogOut, Moon, Sun, Settings, User } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';

const DashNavbar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className='c-navbar p-4 flex items-center justify-between'>
            <SidebarTrigger />
            <div className='flex items-center gap-4'>
                <div className='p-themeMode'>
                    {mounted && (
                        theme === 'light' ? (
                            <Button variant="ghost" onClick={() => setTheme("dark")}>
                                <Moon className="h-5 w-5" />
                            </Button>
                        ) : (
                            <Button variant="ghost" onClick={() => setTheme("light")}>
                                <Sun className="h-5 w-5" />
                            </Button>
                        )
                    )}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant='destructive'>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default DashNavbar;
