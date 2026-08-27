// PAGES/Impact.js

export function renderImpact() {
    return `
        <div style="margin-top: 20px; padding-bottom: 50px;">
            
            <!-- HEADER -->
            <div style="margin-bottom: 30px;">
                <div style="font-size: 0.75rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">Sustainability & Metrics</div>
                <h2 style="margin: 0; font-family: Georgia, serif; font-size: 2.5rem; color: var(--text-dark);">Campus Impact & Leaderboard</h2>
                <p style="color: #666; margin-top: 5px;">Tracking resource sharing, financial savings, and department sustainability across TSEC.</p>
            </div>

            <!-- TOP METRIC CARDS -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 35px;">
                
                <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; border-top: 4px solid var(--maroon);">
                    <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Total Money Saved</div>
                    <div style="font-size: 2.8rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">₹48,500</div>
                    <div style="font-size: 0.8rem; color: #2e7d32; margin-top: 5px; font-weight: bold;">↑ 18% from last month</div>
                </div>

                <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; border-top: 4px solid var(--blue);">
                    <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">E-Waste / Paper Diverted</div>
                    <div style="font-size: 2.8rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">142 kg</div>
                    <div style="font-size: 0.8rem; color: #2e7d32; margin-top: 5px; font-weight: bold;">Equivalent to 12 trees saved</div>
                </div>

                <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; border-top: 4px solid var(--yellow);">
                    <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Successful Exchanges</div>
                    <div style="font-size: 2.8rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">612</div>
                    <div style="font-size: 0.8rem; color: #2e7d32; margin-top: 5px; font-weight: bold;">98% on-time return rate</div>
                </div>

            </div>

            <!-- DEPARTMENT LEADERBOARD SECTION -->
            <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                    <div>
                        <h3 style="font-family: Georgia, serif; font-size: 1.5rem; color: var(--text-dark); margin: 0;">Department Circularity Leaderboard</h3>
                        <p style="font-size: 0.85rem; color: #666; margin-top: 3px;">Which engineering department shares and reuses the most resources?</p>
                    </div>
                    <span style="background: #e8f5e9; color: #2e7d32; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; border: 1px solid #c8e6c9;">
                        🏆 Active Semester Race
                    </span>
                </div>

                <!-- LEADERBOARD TABLE -->
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="border-bottom: 1px solid #eee; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                        <tr>
                            <th style="padding: 12px 15px; font-weight: normal;">Rank</th>
                            <th style="padding: 12px 15px; font-weight: normal;">Department</th>
                            <th style="padding: 12px 15px; font-weight: normal;">Shared Items</th>
                            <th style="padding: 12px 15px; font-weight: normal;">Total Value Saved</th>
                            <th style="padding: 12px 15px; font-weight: normal;">Circularity Score</th>
                        </tr>
                    </thead>
                    <tbody style="font-size: 0.95rem; color: var(--text-dark);">
                        
                        <tr style="border-bottom: 1px solid #eee; background: #fffdf5;">
                            <td style="padding: 15px; font-weight: bold; color: var(--maroon);">🥇 #1</td>
                            <td style="padding: 15px; font-weight: bold;">AI & Data Science</td>
                            <td style="padding: 15px;">184 items</td>
                            <td style="padding: 15px; font-weight: bold; color: var(--blue);">₹18,200</td>
                            <td style="padding: 15px;"><span style="background: var(--yellow); padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">98.4 pts</span></td>
                        </tr>

                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 15px; font-weight: bold; color: #666;">🥈 #2</td>
                            <td style="padding: 15px; font-weight: bold;">Electronics & CS (ECE)</td>
                            <td style="padding: 15px;">156 items</td>
                            <td style="padding: 15px; font-weight: bold; color: var(--blue);">₹14,900</td>
                            <td style="padding: 15px;"><span style="background: #eee; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">94.1 pts</span></td>
                        </tr>

                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 15px; font-weight: bold; color: #a0522d;">🥉 #3</td>
                            <td style="padding: 15px; font-weight: bold;">Mechanical Workshop</td>
                            <td style="padding: 15px;">130 items</td>
                            <td style="padding: 15px; font-weight: bold; color: var(--blue);">₹10,500</td>
                            <td style="padding: 15px;"><span style="background: #eee; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">89.7 pts</span></td>
                        </tr>

                        <tr>
                            <td style="padding: 15px; font-weight: bold; color: #888;">#4</td>
                            <td style="padding: 15px; font-weight: bold;">Information Technology (IT)</td>
                            <td style="padding: 15px;">92 items</td>
                            <td style="padding: 15px; font-weight: bold; color: var(--blue);">₹4,900</td>
                            <td style="padding: 15px;"><span style="background: #eee; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">82.3 pts</span></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    `;
}