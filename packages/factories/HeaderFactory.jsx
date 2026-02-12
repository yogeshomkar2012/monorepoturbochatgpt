import { AdminHeader } from "@repo/ui"

const headerMap={
    admin:AdminHeader,
}
export default function HeaderFactory({role, ...props}){
    const Components = headerMap[role];
    if(Components){
        return <Components {...props} />;
    }
    return <div>Default Header</div>;
}