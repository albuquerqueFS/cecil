import { useAuth } from "src/providers/auth-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"

const UserHeader = () => {
    const { name, logout } = useAuth()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 px-2 py-3 transition-all hover:underline">
                {name} <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserHeader
