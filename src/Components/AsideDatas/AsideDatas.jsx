import './asidedatas.css'

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