// PAGES/Dashboard.js

// State to track which tab is active in My Exchanges ('borrows' or 'lending')
let currentExchangeTab = 'borrows';

window.switchExchangeTab = function(tabName) {
    currentExchangeTab = tabName;
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = renderExchanges();
}

export function renderExchanges() {
    return `
        <div style="margin-top: 20px; padding-bottom: 50px;">
            
            <!-- HEADER -->
            <div style="margin-bottom: 30px;">
                <div style="font-size: 0.75rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">User Dashboard</div>
                <h2 style="margin: 0; font-family: Georgia, serif; font-size: 2.5rem; color: var(--text-dark);">My Campus Exchanges</h2>
                <p style="color: #666; margin-top: 5px;">Track your active borrows, smart locker pickups, and complete lending history.</p>
            </div>

            <!-- TABS -->
            <div style="display: flex; gap: 15px; margin-bottom: 25px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <button onclick="switchExchangeTab('borrows')" style="background: ${currentExchangeTab === 'borrows' ? 'var(--maroon)' : 'white'}; color: ${currentExchangeTab === 'borrows' ? 'white' : '#666'}; border: 1px solid ${currentExchangeTab === 'borrows' ? 'var(--maroon)' : '#ccc'}; padding: 8px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.9rem;">
                    Active Borrows (2)
                </button>
                <button onclick="switchExchangeTab('lending')" style="background: ${currentExchangeTab === 'lending' ? 'var(--maroon)' : 'white'}; color: ${currentExchangeTab === 'lending' ? 'white' : '#666'}; border: 1px solid ${currentExchangeTab === 'lending' ? 'var(--maroon)' : '#ccc'}; padding: 8px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.9rem;">
                    Lending History & Active (3)
                </button>
            </div>

            <!-- CONDITIONAL VIEW BASED ON TAB -->
            ${currentExchangeTab === 'borrows' ? `
                <!-- ACTIVE BORROWS GRID -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                    
                    <!-- EXCHANGE CARD 1 -->
                    <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; border-left: 5px solid var(--blue); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div>
                                <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: bold; border: 1px solid #bbdefb;">ACTIVE BORROW</span>
                                <h3 style="font-family: Georgia, serif; font-size: 1.3rem; color: var(--text-dark); margin-top: 8px;">Sony Alpha 7 III</h3>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 0.75rem; color: #888;">Locker Location</span>
                                <div style="font-weight: bold; color: var(--blue); font-size: 0.9rem;">📍 Locker L-12</div>
                            </div>
                        </div>

                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-size: 0.85rem; color: #555;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span>Lender: <strong>Priya Iyer (AI & DS)</strong></span>
                                <span>Rating: <strong>4.9⭐</strong></span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Due Back: <strong style="color: var(--coral);">In 2 Days (Oct 2, 8:00 PM)</strong></span>
                                <span>Condition: <strong style="color: #2e7d32;">Verified Safe ✓</strong></span>
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button onclick="alert('🔒 Smart Locker Security\\n\\nPickup PIN: 8492\\nScan this at Locker L-12 terminal to release the lock.')" style="flex: 1; background: var(--blue); color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.85rem;">
                                <i class="fas fa-qrcode" style="margin-right: 5px;"></i> Show Pickup PIN / QR
                            </button>
                            <button onclick="alert('Extension request sent to lender Priya Iyer!')" style="background: white; border: 1px solid #ccc; color: #666; padding: 10px 15px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.85rem;">
                                Request Extension
                            </button>
                        </div>
                    </div>

                    <!-- EXCHANGE CARD 2 -->
                    <div style="background: white; border: 1px solid #ddd; border-radius: 10px; padding: 25px; border-left: 5px solid var(--yellow); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                            <div>
                                <span style="background: #fffdef; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: bold; border: 1px solid #fff9c4;">PENDING RETURN</span>
                                <h3 style="font-family: Georgia, serif; font-size: 1.3rem; color: var(--text-dark); margin-top: 8px;">ECE Dept. Textbook Bundle (Sem V)</h3>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 0.75rem; color: #888;">Locker Location</span>
                                <div style="font-weight: bold; color: var(--blue); font-size: 0.9rem;">📍 Locker L-05</div>
                            </div>
                        </div>

                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-size: 0.85rem; color: #555;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span>Lender: <strong>ECE Dept. Lab</strong></span>
                                <span>Type: <strong>Institutional</strong></span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>Due Back: <strong style="color: var(--maroon);">Tomorrow, 5:00 PM</strong></span>
                                <span>Status: <strong style="color: var(--yellow);">Ready for Drop-off</strong></span>
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button onclick="openConditionModal()" style="flex: 1; background: var(--coral); color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 0.85rem;">
                                <i class="fas fa-clipboard-check" style="margin-right: 5px;"></i> Complete Return Checklist
                            </button>
                        </div>
                    </div>

                </div>
            ` : `
                <!-- LENDING HISTORY TABLE -->
                <div style="background: white; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                    <div style="padding: 20px; border-bottom: 1px solid #eee; background: #fafafa; display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="font-family: Georgia, serif; font-size: 1.2rem; color: var(--text-dark); margin: 0;">Items Shared by You</h3>
                        <span style="font-size: 0.8rem; color: #666;">Total Karma Earned: <strong style="color: var(--maroon);">+480 Points</strong></span>
                    </div>

                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead style="background: white; border-bottom: 1px solid #eee; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            <tr>
                                <th style="padding: 15px 25px; font-weight: normal;">Item Name</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Borrowed By</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Status</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Return Date</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Rating Received</th>
                            </tr>
                        </thead>
                        <tbody style="font-size: 0.9rem; color: var(--text-dark);">
                            
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">Precision Soldering Station</td>
                                <td style="padding: 15px 25px;">Rohan Mehta (EXTC)</td>
                                <td style="padding: 15px 25px;"><span style="color: #1565c0; background: #e3f2fd; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">Currently Out</span></td>
                                <td style="padding: 15px 25px;">Oct 5, 2026</td>
                                <td style="padding: 15px 25px; color: #f57f17;">Pending Return</td>
                            </tr>

                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">Raspberry Pi 4 Model B Kit</td>
                                <td style="padding: 15px 25px;">Sneha Kulkarni (AI & DS)</td>
                                <td style="padding: 15px 25px;"><span style="color: #2e7d32; background: #e8f5e9; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">Returned Successfully</span></td>
                                <td style="padding: 15px 25px;">Sept 18, 2026</td>
                                <td style="padding: 15px 25px; font-weight: bold; color: #2e7d32;">5.0 ⭐ (Great borrower!)</td>
                            </tr>

                            <tr>
                                <td style="padding: 15px 25px; font-weight: bold;">Scientific Calculator (Casio FX-991EX)</td>
                                <td style="padding: 15px 25px;">Amit Joshi (Mechanical)</td>
                                <td style="padding: 15px 25px;"><span style="color: #2e7d32; background: #e8f5e9; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">Returned Successfully</span></td>
                                <td style="padding: 15px 25px;">Aug 30, 2026</td>
                                <td style="padding: 15px 25px; font-weight: bold; color: #2e7d32;">5.0 ⭐ (On-time return)</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            `}

        </div>
    `;
}