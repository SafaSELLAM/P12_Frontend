import logo from "../../assets/sportsee_logo.png";
import "./topbanner.css"

const menuItems = ["Accueil", "Profil", "Réglage", "Communauté"];

export const TopBanner = () => (
    <header className="backSecondary center">
        <img src={logo} alt="sportsee logo" />
        <ul className="noList row around listHeader">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <a href="#" className="colorTertiary noDecoration">{item}</a>
                </li>
            ))}
        </ul>
    </header>
)