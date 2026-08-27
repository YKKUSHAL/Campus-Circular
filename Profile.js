// PAGES/Profile.js

export function renderProfile() {
    return `
        <div style="margin-top: 20px; padding-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
            
            <!-- HEADER -->
            <div style="margin-bottom: 30px;">
                <div style="font-size: 0.75rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">Account & Credentials</div>
                <h2 style="margin: 0; font-family: Georgia, serif; font-size: 2.5rem; color: var(--text-dark);">My Student Profile</h2>
                <p style="color: #666; margin-top: 5px;">Manage your TSEC verification status, trust score, and ongoing resource exchanges.</p>
            </div>

            <!-- PROFILE CARD CONTAINER -->
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">
                
                <!-- LEFT COLUMN: Avatar & Trust Tier -->
                <div style="background: white; border: 1px solid #ddd; border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02); height: fit-content;">
                    <div style="background-color: var(--blue); color: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 2rem; margin: 0 auto 15px auto; box-shadow: 0 4px 10px rgba(69,123,157,0.3);">
                        KD
                    </div>
                    <h3 style="margin: 0 0 5px 0; font-size: 1.3rem; color: var(--text-dark);">Kushal</h3>
                    <p style="color: #666; font-size: 0.85rem; margin-bottom: 15px;">Electronics & Computer Engineering (ECE)</p>
                    
                    <div style="background: #fff9c4; color: #f57f17; border: 1px solid #fff59d; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-bottom: 20px;">
                        ⭐ 4.9 Trust Rating (Tier 1)
                    </div>

                    <div style="border-top: 1px solid #eee; padding-top: 15px; text-align: left; font-size: 0.85rem; color: #555;">
                        <div style="margin-bottom: 8px;"><strong>TSEC ID:</strong> TSEC/2025/ECE/412</div>
                        <div style="margin-bottom: 8px;"><strong>Status:</strong> <span style="color: #2e7d32; font-weight: bold;">Verified ✓</span></div>
                        <div><strong>Member Since:</strong> July 2025</div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Detailed Stats & Ongoing Activity -->
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    
                    <!-- ONGOING EXCHANGES SUMMARY (NEW SECTION) -->
                    <div style="background: white; border: 1px solid #ddd; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                            <h3 style="font-family: Georgia, serif; font-size: 1.2rem; color: var(--text-dark); margin: 0;">My Ongoing Activity Status</h3>
                            <span style="font-size: 0.75rem; color: #888; background: #f0f0f0; padding: 3px 8px; border-radius: 4px;">Live Snapshot</span>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            
                            <!-- Ongoing Item 1: Borrowed -->
                            <div style="background: #f8f9fa; border-left: 4px solid var(--blue); padding: 12px 15px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-size: 0.7rem; color: var(--blue); font-weight: bold; text-transform: uppercase;">Active Borrow</div>
                                    <div style="font-weight: bold; font-size: 0.95rem; color: var(--text-dark);">Sony Aplha 7 III</div>
                                </div>
                                <span style="font-size: 0.8rem; color: #666; background: white; padding: 4px 10px; border-radius: 4px; border: 1px solid #ddd;">Due in 2 days</span>
                            </div>

                            <!-- Ongoing Item 2: Pending Return -->
                            <div style="background: #fffdf5; border-left: 4px solid var(--yellow); padding: 12px 15px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-size: 0.7rem; color: #f57f17; font-weight: bold; text-transform: uppercase;">Pending Return</div>
                                    <div style="font-weight: bold; font-size: 0.95rem; color: var(--text-dark);">ECE Dept. Textbook Bundle (Sem V)</div>
                                </div>
                                <span style="font-size: 0.8rem; color: var(--maroon); font-weight: bold; background: white; padding: 4px 10px; border-radius: 4px; border: 1px solid #ddd;">Due Tomorrow</span>
                            </div>

                            <!-- Ongoing Item 3: Lending Out -->
                            <div style="background: #f4f6f8; border-left: 4px solid var(--maroon); padding: 12px 15px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-size: 0.7rem; color: var(--maroon); font-weight: bold; text-transform: uppercase;">Currently Lending Out</div>
                                    <div style="font-weight: bold; font-size: 0.95rem; color: var(--text-dark);">Precision Soldering Station (Out to Rohan M.)</div>
                                </div>
                                <span style="font-size: 0.8rem; color: #2e7d32; font-weight: bold; background: white; padding: 4px 10px; border-radius: 4px; border: 1px solid #ddd;">Active Loan</span>
                            </div>

                        </div>
                    </div>

                    <!-- Community Contribution Stats -->
                    <div style="background: white; border: 1px solid #ddd; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        <h3 style="font-family: Georgia, serif; font-size: 1.2rem; color: var(--text-dark); margin-top: 0; margin-bottom: 15px;">Community Contribution & Karma</h3>
                        
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <div style="font-size: 1.5rem; font-weight: bold; font-family: Georgia, serif; color: var(--maroon);">14</div>
                                <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 4px;">Items Shared</div>
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <div style="font-size: 1.5rem; font-weight: bold; font-family: Georgia, serif; color: var(--blue);">+480</div>
                                <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 4px;">Karma Points</div>
                            </div>
                            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                <div style="font-size: 1.5rem; font-weight: bold; font-family: Georgia, serif; color: #2e7d32;">100%</div>
                                <div style="font-size: 0.75rem; color: #888; text-transform: uppercase; margin-top: 4px;">Return Score</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    `;
}