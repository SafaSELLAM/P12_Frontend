import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './averagesession.css'
import { getUserAverageSessions } from '../../fetchAPI.js';

export const AverageSessionCharts = ({ userId }) => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const data = await getUserAverageSessions(userId)
                setSessions(data.sessions)
            } catch (error) {
                console.error('Error fetching average sessions:', error);
            }
        };

        fetchSessions();
    }, [userId]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="customTooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="sessionChart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sessions}>
                    <XAxis
                        dataKey="day"
                        tick={{ fill: '#ffffff80' }}
                        tickLine={false}
                        axisLine={false}
                        padding={{ left: 30, right: 30 }}

                    />
                    <Tooltip content={CustomTooltip} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#ffffff80"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ stroke: '#fff', strokeWidth: 2 }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};