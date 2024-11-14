import mediatation from "../../assets/meditation.png"
import swim from "../../assets/swim.png"
import bike from "../../assets/bike.png"
import weight from "../../assets/weight.png"
import "./leftbanner.css"

export const LeftBanner = () => {
    return (
        <div className="leftBanner  center backSecondary">
            <div className="column around iconContainer">
                <img src={mediatation} alt="meditation icone" className="activityIcone backTertiary" />
                <img src={swim} alt="swimming icone" className="activityIcone backTertiary" />
                <img src={bike} alt="bike icone" className="activityIcone backTertiary" />
                <img src={weight} alt="weight icone" className="activityIcone backTertiary" />
            </div>

        </div>
    )
}