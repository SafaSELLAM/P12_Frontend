import { Aside } from "../Aside/Aside.jsx"
import { ActivityCharts } from "../Charts/ActivityCharts.jsx"
import './content.css'

export const Content = ({ userId }) => {
    return (
        <div className="row contentDashboard">
            <ActivityCharts userId={userId} />
            <Aside userId={userId} />
        </div>
    )
}