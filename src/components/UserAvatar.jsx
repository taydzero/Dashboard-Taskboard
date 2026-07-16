import { User } from "lucide-react";

function UserAvatar() {
  return (
    <div  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-200">
      <User size={20} className="text-slate-200" />
    </div>
  );
}

export default UserAvatar;