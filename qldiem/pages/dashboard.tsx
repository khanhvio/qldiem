import { HeaderCommon } from "@/src/components/header"
import { NavbarMenu } from "@/src/components/navbar"

const Dashboard = () => {
    return (
        <div className="w-full h-screen flex bg-slate-100">
            <NavbarMenu />
            <HeaderCommon />
        </div>
    )
}

export default Dashboard