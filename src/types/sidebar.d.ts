export interface SidebarSubroute {
    path: string
    name: string
    label: string
}

export interface SidebarRoute {
    path: string
    name: string
    label: string
    icon: string
    count: number
    active: boolean
    children: SidebarSubroute[]
}