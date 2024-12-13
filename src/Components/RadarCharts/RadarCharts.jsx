import { useEffect, useState } from "react";
import { getUserPerformance } from "../../fetchAPI.js";
import { ResponsiveContainer, RadarChart, Radar, PolarAngleAxis, PolarGrid } from "recharts";
import './radarchart.css'

export const RadarCharts = ({ userId }) => {
    const [performance, setPerformance] = useState([])

    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                const data = await getUserPerformance(userId)
                setPerformance(data.data)
            } catch (error) {
                console.error('Error fetching performance:', error);
            }
        };

        fetchPerformance();
    }, [userId]);

    return (
        <div className="performanceChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"

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