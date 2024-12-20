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
                        data={[{ value: 1 }]}
                        dataKey="value"
                        innerRadius={0}
                        outerRadius={87}
                        fill="#FFFFFF"
                        isAnimationActive={false}
                    />
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
