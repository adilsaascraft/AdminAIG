'use client'

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUniversity,
  FaUser,
  FaHotel,
  FaUsers,
  FaTruck,
  FaBed, 
  FaThList
} from 'react-icons/fa'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const baseItems = [
  { title: 'Events', url: '/home/events', icon: FaCalendarAlt },
  { title: 'Venues', url: '/home/venues', icon: FaMapMarkerAlt },
  { title: 'Organizers', url: '/home/organizers', icon: FaUser },
  { title: 'Departments', url: '/home/departments', icon: FaUniversity },
  { title: 'Teams', url: '/home/teams', icon: FaUsers },
  { title: 'Assigns', url: '/home/assigns', icon: FaUser },
  { title: 'Suppliers', url: '/home/suppliers', icon: FaTruck },
]

const hotelChildren = [
  { title: 'Hotel', url: '/home/hotel', icon: FaBed },
  { title: 'Room Category', url: '/home/room-category', icon: FaThList },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [hotelOpen, setHotelOpen] = useState(false)

  const isHotelChildActive = hotelChildren.some((child) => pathname === child.url)

  // Auto open hotels if child is active
  useEffect(() => {
    if (isHotelChildActive) setHotelOpen(true)
  }, [isHotelChildActive])

  return (
    <Sidebar className="fixed mt-16 w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Top-level items */}
              {baseItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-2 px-2 py-2 rounded-md w-full transition-colors
                          ${isActive ? 'bg-white text-black font-semibold' : 'text-gray-700 hover:bg-gray-300'}`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}

              {/* Hotels tab */}
              <SidebarMenuItem>
                <div
                  onClick={() => setHotelOpen((prev) => !prev)}
                  className={`flex items-center justify-between w-full px-2 py-2 rounded-md transition-colors cursor-pointer
                    ${isHotelChildActive ? 'bg-white text-black font-semibold' : 'text-gray-700 hover:bg-gray-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <FaHotel className="w-4 h-4" />
                    <span>Hotels</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${hotelOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </SidebarMenuItem>

              {/* Hotel Submenu */}
              {hotelOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {hotelChildren.map((child) => {
                  const isActive = pathname === child.url
                    return (
                      <SidebarMenuItem key={child.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        href={child.url}
                        className="flex items-center gap-2"
                      >
                        <child.icon className="w-4 h-4" />
                        <span>{child.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                    )
                  })}
                </div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
