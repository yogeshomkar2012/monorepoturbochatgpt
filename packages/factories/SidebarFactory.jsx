import { AdminSideBar } from "@repo/ui"
const sidebarMap = {
    admin: AdminSideBar,
}
export default function SidebarFactory({role, ...props}){
    const SidebarComponent = sidebarMap[role];
    if (!SidebarComponent) {
        return null;
    }
    return <SidebarComponent {...props} />;
}