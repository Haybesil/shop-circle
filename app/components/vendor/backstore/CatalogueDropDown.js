import Link from "next/link"

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CatalogueDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
                <div className="inline-flex items-center px-4 py-3 text-white bg-blue-600 rounded-lg active w-full">
                    <img className="w-4 h-4 me-2" src="/assets/catalogue.svg" alt="" />
                    <button
                        variant="outline"
                        className=""
                    >
                        Catalogue
                    </button>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Catalogue</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <Link href='/vendor/dashboard/products'>Products</Link>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        <Link href='/vendor/dashboard/categories'>Categories</Link>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        <Link href='/vendor/dashboard/banners'>Banner</Link>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard />
                        <Link href='/vendor/dashboard/attributes'>Attributes</Link>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard />
                        <Link href='/vendor/dashboard/coupons'>Coupons</Link>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>


                {/* <DropdownMenuSeparator /> */}
                {/* <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users />
              <Link>Team</Link>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus />
                <Link>Invite users</Link>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail />
                    <Link>Email</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare />
                    <Link>Message</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle />
                    <Link>More...</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus />
              <Link>New Team</Link>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
                {/* <DropdownMenuSeparator /> */}
                {/* <DropdownMenuItem>
            <Github />
            <Link>GitHub</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy />
            <Link>Support</Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud />
            <Link>API</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            <Link>Log out</Link>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
