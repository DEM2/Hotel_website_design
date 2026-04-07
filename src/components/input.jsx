import "../css/input.css"

const input = ({ Label, name, value, onChange, type = "text" , autoComplete}) => {
    return (
        <div className="input-container">
            <div className="entry">
                <input type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    required />
                <div className="label">{Label}</div>
            </div>
        </div>
    )
}
export default input