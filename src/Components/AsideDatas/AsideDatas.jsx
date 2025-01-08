import './asidedatas.css'

/**
 * A functional component that displays a logo and some associated data with a label.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.logo - The URL of the logo to display.
 * @param {string} props.value - The value to be displayed beside the logo.
 * @param {string} props.label - The label associated with the value.
 * 
 * @returns {JSX.Element} The rendered JSX for the aside box with logo, value, and label.
 */
export const AsideDatas = ({ logo, value, label }) => {
    return (
        <div className="asideBox row around">
            <div>
                <img src={logo} alt={`${label} logo`} />
            </div>
            <div>
                <p className='bold'>{value}</p>
                <p>{label}</p>
            </div>
        </div>
    )
}