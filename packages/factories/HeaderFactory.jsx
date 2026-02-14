import { AdminHeader,SuperAdminHeader } from "@repo/ui"

const headerMap = {
  admin: AdminHeader,
  superadmin:SuperAdminHeader,
};
export default function HeaderFactory({role, ...props}){
    const Components = headerMap[role];
    if(Components){
        return <Components {...props} />;
    }
    return <div>Default Header</div>;
}