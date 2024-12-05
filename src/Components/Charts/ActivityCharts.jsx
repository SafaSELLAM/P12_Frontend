import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { getUserActivity } from '../../fetchAPI';
import './activitycharts.css'
import { useEffect, useState } from 'react';

export const ActivityCharts = ({ userId }) => {

    const [activityData, setActivityData] = useState([])

    useEffect(() => {

        const fetchActivity = async () => {
            try {
                const data = await getUserActivity(userId)
                setActivityData(data.sessions)
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
                    <p>{payload[0].value} kg</p>
                    <p>{payload[1].value} kCal</p>
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
                    margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                >
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                    <Label value="Activité Physique" position="top" offset={0} fontSize={18} fontWeight="bold" />
                    <XAxis dataKey="day" />
                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `${value} kg`}
                    />
                    <YAxis
                        yAxisId="calories"
                        hide
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="topcenter" align="right" />
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