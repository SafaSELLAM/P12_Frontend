import logo from "../../assets/sportsee_logo.png";
import "./topbanner.css"
export const TopBanner = () => {
    return (
        <header className="backSecondary center">
            <img src={logo} alt="sportsee logo" />
            <ul className="noList row around listHeader">
                <li><a href="#" className="colorTertiary back">Accueil</a></li>
                <li><a href="#" className="colorTertiary">Profil</a></li>
                <li><a href="#" className="colorTertiary">Réglage</a></li>
                <li><a href="#" className="colorTertiary">Communauté</a></li>
            </ul>
        </header>
    )

}