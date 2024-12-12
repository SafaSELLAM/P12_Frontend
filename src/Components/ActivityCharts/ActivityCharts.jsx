import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { getUserActivity } from '../../fetchAPI';
import './activitycharts.css'
import { useEffect, useState } from 'react';

export const ActivityCharts = ({ userId }) => {

    const [activityData, setActivityData] = useState([])
    const [minKilogram, setMinKilogram] = useState(0);

    useEffect(() => {

        const fetchActivity = async () => {
            try {
                const data = await getUserActivity(userId)
                setActivityData(data.sessions)
                setMinKilogram(data.minWeight);
            } catch (error) {
                console.error("error fetching activity data:", error)
            }
        }
        fetchActivity();
    }, [userId])

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="activityTooltip column around">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}kCal</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='graphsContainer'>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={activityData}
                    margin={{ top: 50, right: 0, left: 0, bottom: 10 }}
                >
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="#f5f5f5"
                    />
                    <text
                        x="15%"
                        y="40"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                        Activité Quotidienne
                    </text>
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tick={{ fontSize: 15 }}
                        tickFormatter={(value) => `${value}kg`}
                        tickCount={3}
                        domain={[minKilogram, "auto"]}
                    />
                    <YAxis
                        yAxisId="calories"
                        hide
                    />
                    <Tooltip
                        cursor={{ fill: "#cccccc80" }}
                        content={<CustomTooltip />}

                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{
                            padding: "20px",
                            fontSize: "14px",
                            color: "#333",
                            marginBlockStart: "-50px",

                        }}
                    />
                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        barSize={10}
                        radius={[5, 5, 0, 0]}
                        name="Poids (kg)"
                        fill="#282D30"
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        barSize={10}
                        radius={[5, 5, 0, 0]}
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};