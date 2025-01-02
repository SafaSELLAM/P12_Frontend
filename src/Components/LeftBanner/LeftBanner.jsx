import mediatation from "../../assets/meditation.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import weight from "../../assets/weight.svg";
import "./leftbanner.css";

const icons = [
    { src: mediatation, alt: "meditation icon" },
    { src: swim, alt: "swimming icon" },
    { src: bike, alt: "bike icon" },
    { src: weight, alt: "weight icon" }
];

export const LeftBanner = () => (
    <div className="leftBanner center backSecondary column around">
        <div className="column around iconContainer">
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="activityIcone backTertiary"
                />
            ))}
        </div>
        <p className="textLeftbanner colorTertiary ">Copyright, Sportsee 2020</p>
    </div>
);
