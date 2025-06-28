import {
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // Obtener datos del usuario autenticado
    const { auth } = usePage().props;
    const user = auth.user;

    // This is sample data.
    const data = {
        user: {
            name: user.name,
            email: user.email,
            avatar: '/avatars/shadcn.jpg',
        },
        teams: [
            {
                name: 'Naturly',
                logo: GalleryVerticalEnd,
                plan: 'Enterprise',
            },
        ],
        navMain: [
            {
                title: 'Dietas',
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                    {
                        title: 'Tipos',
                        url: '#',
                    },
                    {
                        title: 'Incremento',
                        url: '#',
                    },
                    {
                        title: 'Disminución',
                        url: '#',
                    },
                ],
            },
            {
                title: 'Calculadora',
                url: '#',
                icon: Bot,
                items: [
                    {
                        title: 'Calorias',
                        url: '#',
                    },
                    {
                        title: 'Macronutrientes',
                        url: '#',
                    },
                    {
                        title: 'Personalizado',
                        url: '#',
                    },
                ],
            },
            {
                title: 'Recetas',
                url: '#',
                icon: BookOpen,
                items: [
                    {
                        title: 'Recetas',
                        url: '#',
                    },
                    {
                        title: 'Blog',
                        url: '#',
                    },
                    {
                        title: 'Contacto',
                        url: '#',
                    },
                    {
                        title: 'Terminos y Condiciones',
                        url: '#',
                    },
                ],
            },
            {
                title: 'Ayuda',
                url: '#',
                icon: Settings2,
                items: [
                    {
                        title: 'FAQ',
                        url: '#',
                    },
                    {
                        title: 'Contacto',
                        url: '#',
                    },
                    {
                        title: 'Terminos y Condiciones',
                        url: '#',
                    },
                    {
                        title: 'Privacidad',
                        url: '#',
                    },
                ],
            },
        ],
        projects: [
            {
                name: 'Design Engineering',
                url: '#',
                icon: Frame,
            },
            {
                name: 'Sales & Marketing',
                url: '#',
                icon: PieChart,
            },
            {
                name: 'Travel',
                url: '#',
                icon: Map,
            },
        ],
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
