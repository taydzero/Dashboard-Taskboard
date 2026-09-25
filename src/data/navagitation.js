import {
  LayoutDashboard,
  FolderKanban,
  Users,
  MessageCircle,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    id: 1,
    to: "/",
    label: "Home",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    to: "/projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    id: 3,
    to: "/team",
    label: "Team",
    icon: Users,
  },
  {
    id: 4,
    to: "/messages",
    label: "Messages",
    icon: MessageCircle,
  },
  {
    id: 5,
    to: "/settings",
    label: "Settings",
    icon: Settings,
  },
];
