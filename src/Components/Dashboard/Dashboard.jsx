import { UserName } from "../userName/UserName";
import { LeftBanner } from "../LeftBanner/LeftBanner";
import { Content } from "../Content/Content.jsx";
import './dashboard.css'

/**
 * A functional component that displays the main content dashboard with multiple charts and the Aside component.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string|number} props.userId - The ID of the user whose data is displayed in the charts.
 * 
 * @returns {JSX.Element} The rendered JSX for the content dashboard, including the activity charts, session charts, radar charts, pie chart, and aside section.
 */
export const Dashboard = () => {
    const userId = Number(import.meta.env.VITE_APP_USERID)

    return (
        <>
            <LeftBanner />
            <div className="dashboardContent column">
                <UserName userId={userId} />
                <Content userId={userId} />
            </div>
        </>
    );
};

