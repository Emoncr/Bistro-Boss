import Activitys from "@/Components/DashboardComponents/Activitys"
import OverviewBoxs from "@/Components/DashboardComponents/OverviewBoxs"


const Dashboard = () => {

    return (
        <div className="py-5 lg:py-10 px-5">
            <h1 className="text-brandDark text-xl sm:text-2xl lg:text-3xl font-semibold font-cinzel ">Hi, Welcome Back!</h1>
            <>
                <OverviewBoxs />
                <Activitys />
            </>
        </div>
    )
}

export default Dashboard