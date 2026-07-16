import { useState, useRef } from "react";
import UserAvatar from "../../UserAvatar"
import useClickOutside from "../../../hooks/useClickOutside";

function UserProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useClickOutside(menuRef, () => setIsOpen(false));
    return(
        <div ref={menuRef} className="relative">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <UserAvatar />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                        <div className="px-6 py-3 border-b font-semibold flex justify-between items-center">
                            UserName
                            <UserAvatar />
                        </div>

                        <div className="divide-y">
                            <div className="px-6 py-3 hover:bg-gray-50 cursor-pointer">
                            <p className="font-medium">My Profile</p>
                            </div>

                            <div className="px-6 py-3 hover:bg-gray-50 cursor-pointer">
                            <p className="font-medium">Task completed</p>
                            </div>

                            <div className="px-6 py-3 hover:bg-gray-50 cursor-pointer">
                            <p className="font-medium text-red-600">Exit Profile</p>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
    );
}

export default UserProfileMenu;