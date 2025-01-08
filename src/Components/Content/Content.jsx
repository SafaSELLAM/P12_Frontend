import { Aside } from "../Aside/Aside.jsx"
import { ActivityCharts } from "../ActivityCharts/ActivityCharts.jsx"
import { AverageSessionCharts } from "../AverageSessionChart/AverageSessionCharts.jsx"
import './content.css'
import { RadarCharts } from "../RadarCharts/RadarCharts.jsx"
import { PieChartScore } from "../PieChart/PieChartScore.jsx"

/**
 * A functional component that displays the main content dashboard with multiple charts and the Aside component.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string|number} props.userId - The ID of the user whose data is displayed in the charts.
 * 
 * @returns {JSX.Element} The rendered JSX for the content dashboard, including the activity charts, session charts, radar charts, pie chart, and aside section.
 */
export const Content = ({ userId }) => {
    return (
        <div className="row contentDashboard">
            <div className="charts column">
                <ActivityCharts userId={userId} />
                <div className="smallCharts row">
                    <AverageSessionCharts userId={userId} />
                    <RadarCharts userId={userId} />
                    <PieChartScore userId={userId} />
                </div>
            </div>

            <Aside userId={userId} />
        </div>
    )
}