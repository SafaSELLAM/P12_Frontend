import { Aside } from "../Aside/Aside.jsx"
import { ActivityCharts } from "../ActivityCharts/ActivityCharts.jsx"
import { AverageSessionCharts } from "../AverageSessionChart/AverageSessionCharts.jsx"
import './content.css'

export const Content = ({ userId }) => {
    return (
        <div className="row contentDashboard">
            <div className="charts column">
                <ActivityCharts userId={userId} />
                <div className="smallCharts">
                    <AverageSessionCharts userId={userId} />

                </div>
            </div>

            <Aside userId={userId} />
        </div>
    )
}