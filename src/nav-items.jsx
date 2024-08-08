import { Home, UserPlus, Search } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Submit",
    to: "/submit",
    icon: <UserPlus className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Lookup",
    to: "/lookup",
    icon: <Search className="h-4 w-4" />,
    page: <Index />,
  },
];
