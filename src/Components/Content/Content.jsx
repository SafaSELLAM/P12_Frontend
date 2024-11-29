import { Aside } from "../Aside/Aside.jsx"
import { Charts } from "../Charts/Charts.jsx"
export const Content = ({ userId }) => {
    return (
        <div className="row">
            <Charts />
            <Aside userId={userId} />
        </div>
    )
}