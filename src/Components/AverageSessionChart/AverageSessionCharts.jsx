import { useEffect, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './averagesession.css'
import { getUserAverageSessions } from '../../fetchAPI.js';

/**
 * A functional component that displays a line chart showing the user's average session duration over time.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string|number} props.userId - The ID of the user for whom to fetch the average session data.
 * 
 * @returns {JSX.Element} The rendered JSX for the average session duration chart.
 */
export const AverageSessionCharts = ({ userId }) => {
    const [sessions, setSessions] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [userId]);
    if (sessions.length === 0) return <p>Chargement...</p>;

    /**
 * Custom tooltip that displays the session duration when hovering over the chart.
 * 
 * @param {Object} param0 - The tooltip properties.
 * @param {boolean} param0.active - Whether the tooltip is active.
 * @param {Array} param0.payload - The data displayed in the tooltip.
 * 
 * @returns {JSX.Element|null} The rendered tooltip content or null if inactive.
 */
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
    /**
    * Handles the hover effect, updating the background gradient based on mouse position.
    * 
    * @param {Object} position - The position data for the tooltip.
    * @param {boolean} position.isTooltipActive - Whether the tooltip is active.
    * @param {Object} position.activeCoordinate - The active coordinates of the tooltip.
    * @param {boolean} position.mouseover - Whether the mouse is hovering over the chart.
    */
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

    // Dynamically adjust y-values based on screen width
    const yOffset1 = screenWidth >= 1024 && screenWidth <= 1200 ? 35 : 55;
    const yOffset2 = screenWidth >= 1024 && screenWidth <= 1200 ? 55 : 75;
    return (
        <div className="sessionChart">
            <ResponsiveContainer width="100%" height="100%" ref={refChartContainer} fill="#FF0D0D">
                <LineChart data={sessions} onMouseMove={handleHover} margin={{ top: 0, right: 0, bottom: 10, left: 0 }}>
                    <text style={{
                        fill: '#ffffff80',
                        fontSize: '20',
                        fontWeight: 'bold',
                    }}>
                        <tspan className="sessionChartTitle" x={20} y={yOffset1}>
                            Durée moyenne des
                        </tspan>
                        <tspan className="sessionChartTitle" x={20} y={yOffset2}>
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