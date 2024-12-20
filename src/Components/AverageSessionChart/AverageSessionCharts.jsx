import { useEffect, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './averagesession.css'
import { getUserAverageSessions } from '../../fetchAPI.js';

export const AverageSessionCharts = ({ userId }) => {
    const [sessions, setSessions] = useState([])
    const refChartContainer = useRef(0)
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
    function handleHover(position) {
        const divBackgroundChange = refChartContainer.current.current
        if (position.isTooltipActive) {
            const windowWidth = divBackgroundChange.clientWidth
            const mouseXpercentage = Math.round((position.activeCoordinate.x / windowWidth) * 100)
            divBackgroundChange.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,0.5) ${mouseXpercentage}%, rgba(175,0,0,0.5) 100%)`
        } else if (!position.mouseover) {
            divBackgroundChange.style.background = `none`
        }
    }
    return (
        <div className="sessionChart">
            <ResponsiveContainer width="100%" height="100%" ref={refChartContainer} fill="#FF0D0D">
                <LineChart data={sessions} onMouseMove={handleHover} margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
                    <text style={{
                        fill: '#ffffff80',
                        fontSize: '20',
                        fontWeight: 'bold',
                    }}>
                        <tspan className="sessionChartTitle" x={20} y={55}>
                            Durée moyenne des
                        </tspan>
                        <tspan className="sessionChartTitle" x={20} y={75}>
                            sessions
                        </tspan>
                    </text>
                    <XAxis
                        dataKey="day"
                        tick={{ fill: '#ffffff91' }}
                        tickLine={false}
                        axisLine={false}
                        padding={{ right: 10, left: 10 }}
                    />
                    <YAxis domain={['dataMin-3', 'dataMax+20']} hide />

                    <Tooltip content={CustomTooltip} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#ffffff80"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255,0.8)",
                            strokeWidth: 10,
                            r: 5,
                        }}

                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};