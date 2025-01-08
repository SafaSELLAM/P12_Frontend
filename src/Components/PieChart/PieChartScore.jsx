import { useEffect, useState } from 'react';
import { getUserById } from '../../fetchAPI';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './piechartscore.css'

/**
 * A functional component that displays a pie chart representing the user's score as a percentage of their goal.
 * It fetches the user's score from an API and visualizes it in the chart.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string|number} props.userId - The ID of the user whose score data is displayed in the pie chart.
 * 
 * @returns {JSX.Element} The rendered JSX for the pie chart, including score visualization and textual information.
 */

export const PieChartScore = ({ userId }) => {
    const [score, setScore] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const data = await getUserById(userId)
                setScore(data.score)
            } catch (error) {
                console.error('Error fetching score:', error);
            }
        };

        fetchScores();
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [userId]);

    if (!score) return <p>Loading...</p>;

    const data = [
        { name: 'Score', value: score },
        { name: 'Restant', value: 100 - score }
    ];

    const innerRadius = screenWidth >= 1024 && screenWidth <= 1200 ? 52 : 74;
    const outerRadius = screenWidth >= 1024 && screenWidth <= 1200 ? 60 : 87;
    const titleFont = screenWidth >= 1024 && screenWidth <= 1200 ? 18 : 20;

    const COLORS = ['#FF0000', '#FBFBFB'];
    return (
        <div className='pieChart'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <text
                        x="20%"
                        y="20%"
                        textAnchor="middle"
                        fill="#20253A"
                        fontSize={titleFont}
                        fontWeight="bold"
                    >
                        Score
                    </text>
                    <Pie
                        data={[{ value: 1 }]}
                        dataKey="value"
                        innerRadius={0}
                        outerRadius={outerRadius}
                        fill="#FFFFFF"
                        isAnimationActive={false}
                    />
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={90}
                        endAngle={450}

                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>


                    <text
                        x="50%"
                        y="40%"
                        textAnchor="middle"
                    >

                        <tspan textAnchor="middle" fontSize="28" fontWeight="bold" x="50%" dy="5%">{score}% </tspan>
                        <tspan textAnchor="middle" fontSize="20" fill="#979aa9" x="50%" dy="10%"> de votre</tspan>
                        <tspan textAnchor="middle" fontSize="20" fill="#979aa9" x="50%" dy="10%"> objectif</tspan>

                    </text>
                </PieChart>
            </ResponsiveContainer>

        </div >

    )
}
