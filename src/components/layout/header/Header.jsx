import { Calendar } from "lucide-react";
import NotificationMenu from "./NotificationMenu";
import UserProfileMenu from "./UserProfileMenu";

function Header() {
    
    return (
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold">
                    <Calendar class="h-5 w-5 stroke-white" />
                </div>

                <h1 className="text-lg font-semibold text-gray-800">
                    Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-5">
                <input
                    type="search"
                    placeholder="Search..."
                    className="
                        w-72
                        h-10
                        px-4
                        rounded-xl
                        border
                        border-gray-300
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-200
                    "
                />

                <NotificationMenu />
                
                <UserProfileMenu />
            </div>
        </header>
    );
}

export default Header;