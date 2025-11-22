import React from 'react'
import {Home,Inbox,Calendar,Search,Settings, User, ChevronUp, User2, Github, Plus, Projector, LifeBuoy, ChevronDown, Send, NotebookPen, CodeXml, Route} from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

const items = [
  {
    title:"Home",
    url:"/",
    icon:Home,
  },
  {
    title:"Inbox",
    url:"#",
    icon:Inbox,
  },
  {
    title:"Calendar",
    url:"#",
    icon:Calendar,
  },
  {
    title:"Search",
    url:"#",
    icon:Search,
  },
  {
    title:"Settings",
    url:"#",
    icon:Settings,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className='text-green-700'>
                {/* <Image src="@/public/window.svg"  alt='logo' width={20} height={20}/> */}
                <Github /> Hamid Sadra (header)
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        {/* Group 1  Badge */}
        <SidebarGroup>
          <SidebarGroupLabel>Application (Badge)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item=>
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon/>
                      <span>{item.title}</span>
                      {item.title==='Inbox' && <span>(Badge)</span>}
                    </Link>
                  </SidebarMenuButton>
                  
                  {item.title==='Inbox' && <SidebarMenuBadge>24</SidebarMenuBadge>}
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Group 2 ActionButton */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects (Action)</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus/><span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/#'>
                    <Projector/> See All Projects
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <Link href='/#'>
                    <Plus/> Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Group 3 Collapsable */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help (Collapsable)
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/#'>
                        <LifeBuoy /> Support
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/#'>
                        <Send /> Feedback
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Groub 4 SidebarMenuSub */}
        <SidebarGroup>
          <SidebarGroupLabel>
            (SubMenu)
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <NotebookPen />Getting Started
                </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <CodeXml />Installation
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <Route /> Project Structure
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2/>hamid sadra (footer)<ChevronUp className='ml-auto'/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar