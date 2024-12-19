import { useEffect, useState } from 'react';
import { getUserById } from '../../fetchAPI';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './piechartscore.css'


export const PieChartScore = ({ userId }) => {
    const [score, setScore] = useState(0)

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
    }, [userId]);
    const data = [
        { name: 'Score', value: score },
        { name: 'Restant', value: 100 - score }
    ];

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
                        fontSize="18"
                        fontWeight="bold"
                    >
                        Score
                    </text>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={74}
                        outerRadius={87}
                        startAngle={90}
                        endAngle={450}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#20253A"
                        fontSize="24"
                        fontWeight="bold"
                    >
                        {score}%
                    </text>

                    <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        fill="#979aa9"
                        fontSize="16"
                    >
                        de votre objectif
                    </text>
                </PieChart>
            </ResponsiveContainer>

        </div>

    )
}
