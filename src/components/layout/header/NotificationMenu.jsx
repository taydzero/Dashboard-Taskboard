import { useState, useRef } from "react";
import { Bell, SquarePen } from "lucide-react";
import useClickOutside from "../../../hooks/useClickOutside";

function NotificationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useClickOutside(menuRef, () => setIsOpen(false));
    return(
        <div ref={menuRef} className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 rounded-xl hover:bg-gray-100 transition flex items-center justify-center"
                    >
                        <Bell size={20} className="text-slate-900" />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                        <div className="px-4 py-3 border-b font-semibold">
                            Notifications
                        </div>

                        <div className="divide-y">
                            <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                            <p className="font-medium">New message</p>
                            <p className="text-sm text-gray-500">
                                Alex sent you a message.
                            </p>
                            </div>

                            <div class="bg-white dark:bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5">
                                <div>
                                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                                    <SquarePen class="h-6 w-6 stroke-white" />
                                    </span>
                                </div>
                                <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                                <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                                </p>
                            </div>

                            <div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
                                <span class="inline-flex shrink-0 rounded-full bg-indigo-500 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
                                <Bell class="h-6 w-6 stroke-white" />
                                </span>
                                <div>
                                <p class="text-gray-700 dark:text-gray-400">
                                    <span class="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
                                    <span class="font-medium text-gray-950 dark:text-white"> Logo redesign</span>
                                </p>
                                <time class="mt-1 block text-gray-500" datetime="9:37">9:37am</time>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
    );
}

export default NotificationMenu;