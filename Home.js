// PAGES/Home.js

export function renderHome() {
    // Ensures the grid background is active when this page loads
    document.body.classList.add('bg-grid');

    return `
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; margin-top: 40px; padding-bottom: 50px;">
            
            <!-- LEFT COLUMN: Hero & Search -->
            <div>
                <div style="font-size: 0.8rem; font-weight: bold; color: var(--maroon); letter-spacing: 1px; margin-bottom: 20px; display: inline-block; border: 1px solid var(--maroon); padding: 4px 10px; border-radius: 20px;">
                    ✦ TSEC - VERIFIED STUDENT NETWORK
                </div>
                
                <h1 style="font-size: 4.5rem; font-family: Georgia, serif; line-height: 1.1; margin-bottom: 20px; color: var(--text-dark);">
                    Borrow what you need,<br>
                    <span style="color: var(--maroon);">lend what you don't.</span>
                </h1>
                
                <p style="font-size: 1.1rem; color: #555; margin-bottom: 40px; max-width: 90%;">
                    Campus Circular is the official peer resource exchange for Thakur Shyamnarayan Engineering College — a functional, trust-scored network for books, cameras, tools and gear. Verified TSEC IDs only.
                </p>

                <!-- Smart Match Search Box -->
                <div style="background: var(--white); border: 1px solid #ddd; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                    <div style="font-size: 0.8rem; font-weight: bold; color: var(--blue); margin-bottom: 15px; letter-spacing: 1px;">
                        ⚙ NEED-BASED SMART MATCH <span style="float: right; color: #999; font-weight: normal;">SIMULATED AI - OFFLINE</span>
                    </div>
                    
                    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                        <input type="text" id="ai-search-input" 
                            placeholder="Describe what you need — e.g., 'I need to make a reel tomorrow'" 
                            style="flex: 1; padding: 15px; font-size: 1rem; border: 1px solid #ccc; border-radius: 8px; outline: none;">
                        <button onclick="handleSmartSearch()" style="background-color: var(--coral); color: white; border: none; padding: 0 25px; border-radius: 8px; font-weight: bold; cursor: pointer;">
                            Find bundle →
                        </button>
                    </div>

                    <!-- Suggestion Pills -->
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                        <span style="border: 1px solid #ccc; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; color: #555; background: #fafafa;">I need to make a reel for my club event tomorrow</span>
                        <span style="border: 1px solid #ccc; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; color: #555; background: #fafafa;">Prep for Sem-V exam next week</span>
                        <span style="border: 1px solid #ccc; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; color: #555; background: #fafafa;">Set up a robotics project prototype</span>
                    </div>

                    <!-- TRENDING ITEMS IN COLLEGE (NEWLY ADDED SECTION) -->
                    <div style="border-top: 1px dashed #eee; padding-top: 15px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                        <span style="font-size: 0.75rem; font-weight: bold; color: #666; text-transform: uppercase;"><i class="fas fa-fire" style="color: var(--coral);"></i> Trending in TSEC:</span>
                        <span onclick="handleSmartSearch('camera')" style="cursor: pointer; background: #fffdf5; border: 1px solid #f4d35e; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 500;">🔥 Sony Camera Kit</span>
                        <span onclick="handleSmartSearch('textbook')" style="cursor: pointer; background: #fffdf5; border: 1px solid #f4d35e; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 500;">📚 ECE Sem V Books</span>
                        <span onclick="handleSmartSearch('toolkit')" style="cursor: pointer; background: #fffdf5; border: 1px solid #f4d35e; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 500;">🛠️ Workshop Toolbox</span>
                    </div>

                    <!-- Hidden Smart Match Result Container (Triggers via app.js) -->
                    <div id="smart-match-results" style="display: none; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                        <div id="match-content"></div>
                    </div>
                </div>

                <!-- Trust Badges Under Search -->
                <div style="display: flex; gap: 20px; margin-top: 20px; font-size: 0.9rem; color: #777;">
                    <span><i class="fas fa-check-circle" style="color:var(--blue)"></i> TSEC-ID verified</span>
                    <span><i class="fas fa-users" style="color:var(--blue)"></i> 612 students active</span>
                    <span><i class="fas fa-clock" style="color:var(--blue)"></i> 98% on-time returns</span>
                </div>
            </div>

            <!-- RIGHT COLUMN: Live Feed & Impact Stats -->
            <div>
                <!-- Campus Board Card -->
                <div style="background: var(--white); border: 1px solid #ddd; border-radius: 12px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <div>
                            <div style="font-size: 0.7rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">Campus Board</div>
                            <h3 style="font-family: Georgia, serif; font-size: 1.4rem; color: var(--text-dark); margin:0;">Right now on Circular</h3>
                        </div>
                        <span style="color: var(--coral); border: 1px solid var(--coral); padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; background: #fff5f5;">LIVE</span>
                    </div>

                    <!-- Simulated Feed Items -->
                    <ul style="list-style: none; padding: 0; margin: 0 0 25px 0; font-size: 0.95rem; color: #444;">
                        <li style="border-left: 2px solid var(--yellow); padding-left: 15px; margin-bottom: 15px;">Fatima S. lent <strong>Ring Light</strong> to Media Cell <span style="color: #999; font-size: 0.8rem; float: right;">2 min ago</span></li>
                        <li style="border-left: 2px solid #ccc; padding-left: 15px; margin-bottom: 15px;">Rohit M. returned <strong>Toolbox</strong> to Workshop <span style="color: #999; font-size: 0.8rem; float: right;">14 min ago</span></li>
                        <li style="border-left: 2px solid var(--blue); padding-left: 15px; margin-bottom: 15px;">IT Lab approved 3 new <strong>textbook listings</strong> <span style="color: #999; font-size: 0.8rem; float: right;">32 min ago</span></li>
                        <li style="border-left: 2px solid var(--maroon); padding-left: 15px; margin-bottom: 15px;">Priya I. earned <strong>'On-time Champion'</strong> badge <span style="color: #999; font-size: 0.8rem; float: right;">1 hr ago</span></li>
                        <li style="border-left: 2px solid var(--coral); padding-left: 15px; margin-bottom: 15px;">Sports Kit reserved for Inter-Year Cricket <span style="color: #999; font-size: 0.8rem; float: right;">2 hr ago</span></li>
                    </ul>

                    <!-- Stats Row -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; text-align: center; margin-bottom: 20px;">
                        <div style="border: 1px solid #eee; padding: 15px 5px; border-radius: 8px;">
                            <div style="font-size: 1.3rem; font-weight: bold; font-family: Georgia, serif;">1247</div>
                            <div style="font-size: 0.7rem; color: #888; letter-spacing: 1px;">SHARED</div>
                        </div>
                        <div style="background-color: var(--yellow); padding: 15px 5px; border-radius: 8px;">
                            <div style="font-size: 1.3rem; font-weight: bold; font-family: Georgia, serif; color: var(--text-dark);">₹46K</div>
                            <div style="font-size: 0.7rem; color: var(--text-dark); letter-spacing: 1px;">SAVED</div>
                        </div>
                        <div style="border: 1px solid #eee; padding: 15px 5px; border-radius: 8px;">
                            <div style="font-size: 1.3rem; font-weight: bold; font-family: Georgia, serif;">98%</div>
                            <div style="font-size: 0.7rem; color: #888; letter-spacing: 1px;">ON-TIME</div>
                        </div>
                    </div>

                    <button style="width: 100%; padding: 12px; background: transparent; border: 1px solid #ddd; border-radius: 8px; color: var(--blue); font-weight: bold; cursor: pointer; transition: 0.3s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='transparent'">See full impact →</button>
                </div>

                <!-- User Trust Banner -->
                <div style="background-color: var(--yellow); padding: 15px 20px; border-radius: 8px; display: flex; align-items: center; gap: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div style="font-size: 1.5rem;">⭐</div>
                    <div style="font-size: 0.95rem; color: var(--text-dark);">
                        <strong>You're a 4.9⭐ member.</strong> Keep returns on time to unlock higher-value gear.
                    </div>
                </div>
            </div>

        </div>
    `;
}