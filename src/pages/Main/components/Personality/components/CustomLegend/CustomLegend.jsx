import "./CustomLegend.css";

const CustomLegend = ({ legendColors }) => {
    return (
        <ul className="personality__custom-legend">
            {legendColors.map(({ value, color }, index) => (
                <li key={`item-${index}`} className="personality__legend-item">
                    <div
                        className="legend-color"
                        style={{ backgroundColor: color }}
                    />
                    <span className="legend-label" style={{ color: color }}>
                        {value}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default CustomLegend;
