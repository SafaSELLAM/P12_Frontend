import { Aside } from "../Aside/Aside.jsx"
import { ActivityCharts } from "../ActivityCharts/ActivityCharts.jsx"
import { AverageSessionCharts } from "../AverageSessionChart/AverageSessionCharts.jsx"
import './content.css'
import { RadarCharts } from "../RadarCharts/RadarCharts.jsx"
import { PieChartScore } from "../PieChart/PieChartScore.jsx"

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