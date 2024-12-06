import { UserName } from "../userName/UserName";
import { LeftBanner } from "../LeftBanner/LeftBanner";
import { Content } from "../Content/Content.jsx";
import './dashboard.css'

export const Dashboard = () => {
    const userId = Number(import.meta.env.VITE_APP_USERID)

    return (
        <>
            <LeftBanner />
            <div className="dashboardContent">
                <UserName userId={userId} />
                <Content userId={userId} />
            </div>
        </>
    );
};

