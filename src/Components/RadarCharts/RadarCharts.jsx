import { useEffect, useState } from "react";
import { getUserPerformance } from "../../fetchAPI.js";
import { ResponsiveContainer, RadarChart, Radar, PolarAngleAxis, PolarGrid } from "recharts";
import './radarchart.css'

/**
 * A functional component that displays a radar chart representing a user's performance in various subjects.
 * It fetches the performance data from an API and visualizes it using a radar chart.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string|number} props.userId - The ID of the user whose performance data is displayed in the radar chart.
 * 
 * @returns {JSX.Element} The rendered JSX for the radar chart, including the user's performance data visualization.
 */
export const RadarCharts = ({ userId }) => {
    const [performance, setPerformance] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                const performanceData = await getUserPerformance(userId)
                setPerformance(performanceData.data)
            } catch (error) {
                console.error('Error fetching performance:', error);
            }
        };

        fetchPerformance();
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [userId]);
    if (!performance) return <p>Loading...</p>;

    // Dynamically adjust outerRadius based on screen width
    const outerRadius = screenWidth >= 1024 && screenWidth <= 1200 ? "40%" : "50%";

    return (
        <div className="performanceChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius={outerRadius}

                    data={performance}
                    style={{ backgroundColor: "#282d30" }}

                >
                    <PolarGrid stroke="#fff" radialLines={false} />
                    <PolarAngleAxis dataKey="subject" fill="#111" stroke="#fff" tickLine={false} tickSize={15} />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}