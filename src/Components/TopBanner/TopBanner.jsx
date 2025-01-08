import logo from "../../assets/sportsee_logo.png";
import "./topbanner.css"

const menuItems = ["Accueil", "Profil", "Réglage", "Communauté"];

/**
 * A functional component that renders the top navigation banner for the application.
 * It displays the sportsee logo and a list of menu items for navigation.
 * 
 * @returns {JSX.Element} The rendered JSX for the top banner, including the logo and menu items.
 */ 
export const TopBanner = () => (
    <header className="backSecondary center">
        <img src={logo} alt="sportsee logo" />
        <ul className="noList row around listHeader">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <a href="#" className="colorTertiary noDecoration menuLink">{item}</a>
                </li>
            ))}
        </ul>
    </header>
)