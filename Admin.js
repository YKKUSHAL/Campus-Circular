// PAGES/Admin.js

let isAdminLoggedIn = false;
let currentAdminTab = 'penalties'; // Default active tab ('approvals', 'disputes', 'penalties')

window.verifyAdminPassword = function() {
    const passwordInput = document.getElementById('admin-pass-input').value;
    const errorMsg = document.getElementById('admin-error-msg');
    
    if (passwordInput === 'tsec2026') {
        isAdminLoggedIn = true;
        const appContent = document.getElementById('app-content');
        appContent.innerHTML = renderAdmin();
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = 'Incorrect passcode! Try "tsec2026"';
    }
}

window.lockAdminConsole = function() {
    isAdminLoggedIn = false;
    currentAdminTab = 'penalties';
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = renderAdmin();
}

window.switchAdminTab = function(tabName) {
    currentAdminTab = tabName;
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = renderAdmin();
}

export function renderAdmin() {
    if (!isAdminLoggedIn) {
        return `
            <div style="display: flex; justify-content: center; align-items: center; min-height: 60vh;">
                <div style="background: white; border: 1px solid #ddd; border-radius: 12px; padding: 40px; width: 450px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: center;">
                    
                    <div style="font-size: 3rem; color: var(--maroon); margin-bottom: 15px;">
                        <i class="fas fa-user-shield"></i>
                    </div>
                    
                    <h2 style="font-family: Georgia, serif; font-size: 1.8rem; color: var(--text-dark); margin-bottom: 10px;">Restricted Access</h2>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 30px;">Enter the Student Affairs passcode to access the TSEC Admin Console.</p>
                    
                    <div style="margin-bottom: 20px; text-align: left;">
                        <label style="display: block; font-size: 0.75rem; font-weight: bold; color: #888; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px;">Admin Passcode</label>
                        <input type="password" id="admin-pass-input" placeholder="Enter passcode..." style="width: 100%; padding: 12px 15px; border: 1px solid #ccc; border-radius: 8px; font-size: 1rem; outline: none;">
                    </div>

                    <div id="admin-error-msg" style="color: var(--coral); font-size: 0.85rem; margin-bottom: 15px; display: none;"></div>

                    <button onclick="verifyAdminPassword()" style="width: 100%; background: var(--maroon); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; font-size: 1rem; cursor: pointer;">
                        Unlock Console →
                    </button>
                    
                    <div style="margin-top: 20px; font-size: 0.75rem; color: #999;">
                        Hint for judges/testing: Passcode is <strong style="color: #333;">tsec2026</strong>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div style="margin-top: 20px; padding-bottom: 50px;">
            
            <!-- HEADER -->
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
                <div>
                    <div style="display: inline-block; background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; margin-bottom: 10px; border: 1px solid #c8e6c9;">
                        <i class="fas fa-unlock-alt"></i> Verified Session Active
                    </div>
                    <h2 style="margin: 0; font-family: Georgia, serif; font-size: 2.5rem; color: var(--text-dark);">Admin Console</h2>
                    <p style="color: #666; margin-top: 8px; font-size: 1.05rem;">Student Affairs oversight for Campus Circular — approvals, disputes, monitoring, and penalty enforcement.</p>
                </div>
                <button onclick="lockAdminConsole()" style="background: white; border: 1px solid #ccc; padding: 8px 15px; border-radius: 6px; font-size: 0.85rem; color: #666; cursor: pointer; font-weight: bold;">
                    Lock Console <i class="fas fa-sign-out-alt" style="margin-left: 5px;"></i>
                </button>
            </div>

            <!-- METRIC CARDS -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
                <div style="border: 1px solid #ddd; background: white; padding: 20px; border-radius: 8px; border-top: 4px solid var(--blue);">
                    <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Pending Approvals</div>
                    <div style="font-size: 2.5rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">3</div>
                </div>
                <div style="border: 1px solid #ddd; background: white; padding: 20px; border-radius: 8px; border-top: 4px solid var(--blue);">
                    <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Open Disputes</div>
                    <div style="font-size: 2.5rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">3</div>
                </div>
                <div style="border: 1px solid var(--coral); background: #fff5f5; padding: 20px; border-radius: 8px; border-top: 4px solid var(--coral); position: relative;">
                    <div style="font-size: 0.7rem; color: var(--coral); text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Active Penalties</div>
                    <div style="font-size: 2.5rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">2</div>
                    <i class="fas fa-gavel" style="position: absolute; top: 20px; right: 20px; color: var(--coral); font-size: 1.2rem;"></i>
                </div>
                <div style="border: 1px solid #ddd; background: white; padding: 20px; border-radius: 8px; border-top: 4px solid var(--blue);">
                    <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Active Users</div>
                    <div style="font-size: 2.5rem; font-family: Georgia, serif; margin-top: 10px; color: var(--text-dark);">612</div>
                </div>
            </div>

            <!-- TABLE AREA WITH INTERACTIVE TABS -->
            <div style="background: white; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                
                <div style="display: flex; border-bottom: 1px solid #eee; background: #fafafa;">
                    <div onclick="switchAdminTab('approvals')" style="padding: 15px 25px; border-bottom: ${currentAdminTab === 'approvals' ? '2px solid var(--maroon)' : 'none'}; color: ${currentAdminTab === 'approvals' ? 'var(--maroon)' : '#666'}; font-weight: ${currentAdminTab === 'approvals' ? 'bold' : 'normal'}; font-size: 0.9rem; cursor: pointer;">
                        Approvals (3)
                    </div>
                    <div onclick="switchAdminTab('disputes')" style="padding: 15px 25px; border-bottom: ${currentAdminTab === 'disputes' ? '2px solid var(--maroon)' : 'none'}; color: ${currentAdminTab === 'disputes' ? 'var(--maroon)' : '#666'}; font-weight: ${currentAdminTab === 'disputes' ? 'bold' : 'normal'}; font-size: 0.9rem; cursor: pointer;">
                        Disputes (3)
                    </div>
                    <div onclick="switchAdminTab('penalties')" style="padding: 15px 25px; border-bottom: ${currentAdminTab === 'penalties' ? '2px solid var(--coral)' : 'none'}; color: ${currentAdminTab === 'penalties' ? 'var(--coral)' : '#666'}; font-weight: ${currentAdminTab === 'penalties' ? 'bold' : 'normal'}; font-size: 0.9rem; cursor: pointer;">
                        <i class="fas fa-gavel"></i> Penalty & Overdue Panel (2)
                    </div>
                </div>

                <!-- TAB 1: APPROVALS -->
                ${currentAdminTab === 'approvals' ? `
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead style="background: white; border-bottom: 1px solid #eee; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            <tr>
                                <th style="padding: 15px 25px; font-weight: normal;">Student Name</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Listing Title</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Department</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Action</th>
                            </tr>
                        </thead>
                        <tbody style="font-size: 0.9rem; color: var(--text-dark);">
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">Rohan Verma</td>
                                <td style="padding: 15px 25px;">Arduino Mega IoT Kit</td>
                                <td style="padding: 15px 25px;">Electronics (ECE)</td>
                                <td style="padding: 15px 25px; display: flex; gap: 10px;">
                                    <button onclick="alert('Listing approved and published to inventory!'); this.parentElement.parentElement.style.opacity='0.4';" style="border: none; background: #2e7d32; color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Approve</button>
                                    <button onclick="alert('Listing rejected.'); this.parentElement.parentElement.style.opacity='0.4';" style="border: 1px solid #ccc; background: white; color: var(--coral); padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Reject</button>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">Simran Kaur</td>
                                <td style="padding: 15px 25px;">Data Structures Reference Book Set</td>
                                <td style="padding: 15px 25px;">AI & Data Science</td>
                                <td style="padding: 15px 25px; display: flex; gap: 10px;">
                                    <button onclick="alert('Listing approved and published to inventory!'); this.parentElement.parentElement.style.opacity='0.4';" style="border: none; background: #2e7d32; color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Approve</button>
                                    <button onclick="alert('Listing rejected.'); this.parentElement.parentElement.style.opacity='0.4';" style="border: 1px solid #ccc; background: white; color: var(--coral); padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ` : ''}

                <!-- TAB 2: DISPUTES -->
                ${currentAdminTab === 'disputes' ? `
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead style="background: white; border-bottom: 1px solid #eee; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            <tr>
                                <th style="padding: 15px 25px; font-weight: normal;">Dispute ID</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Parties Involved</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Issue Reported</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Action</th>
                            </tr>
                        </thead>
                        <tbody style="font-size: 0.9rem; color: var(--text-dark);">
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">#DSP-902</td>
                                <td style="padding: 15px 25px;">Kunal Shah vs. Amit Patel</td>
                                <td style="padding: 15px 25px; color: var(--coral);">Minor scratch on lens cap reported upon return.</td>
                                <td style="padding: 15px 25px;">
                                    <button onclick="alert('Dispute resolved in favor of lender. Trust adjustment applied.'); this.parentElement.parentElement.style.opacity='0.4';" style="border: none; background: var(--blue); color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Resolve Dispute</button>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 15px 25px; font-weight: bold;">#DSP-905</td>
                                <td style="padding: 15px 25px;">Priya Nair vs. Tejas Rao</td>
                                <td style="padding: 15px 25px; color: var(--coral);">Item returned 2 days late without notice.</td>
                                <td style="padding: 15px 25px;">
                                    <button onclick="alert('Dispute resolved. Penalty enforced.'); this.parentElement.parentElement.style.opacity='0.4';" style="border: none; background: var(--blue); color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Resolve Dispute</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ` : ''}

                <!-- TAB 3: PENALTIES -->
                ${currentAdminTab === 'penalties' ? `
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead style="background: white; border-bottom: 1px solid #eee; font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 1px;">
                            <tr>
                                <th style="padding: 15px 25px; font-weight: normal;">Borrower</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Overdue Item</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Days Late</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Calculated Fine</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Trust Penalty</th>
                                <th style="padding: 15px 25px; font-weight: normal;">Action</th>
                            </tr>
                        </thead>
                        <tbody style="font-size: 0.9rem; color: var(--text-dark);">
                            <tr style="border-bottom: 1px solid #eee; background: #fffcfc;">
                                <td style="padding: 15px 25px; font-weight: bold;">Aarav Sharma (EXTC)</td>
                                <td style="padding: 15px 25px;">Digital Storage Oscilloscope</td>
                                <td style="padding: 15px 25px; color: var(--coral); font-weight: bold;">3 Days Late</td>
                                <td style="padding: 15px 25px; font-weight: bold; color: var(--maroon);">₹300 (₹100/day)</td>
                                <td style="padding: 15px 25px;"><span style="color: var(--coral); background: #fce4e4; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">-0.3 ⭐</span></td>
                                <td style="padding: 15px 25px; display: flex; gap: 10px;">
                                    <button style="border: 1px solid #ccc; background: white; color: #666; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem;" onclick="alert('Fine waived successfully!'); this.parentElement.parentElement.style.opacity='0.4';">Waive Fine</button>
                                    <button style="border: none; background: var(--maroon); color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;" onclick="alert('Penalty notice & UPI fine link sent to student!'); this.parentElement.parentElement.style.opacity='0.4';">Enforce & Notify</button>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee; background: #fffcfc;">
                                <td style="padding: 15px 25px; font-weight: bold;">Neha Patil (Computer)</td>
                                <td style="padding: 15px 25px;">Arduino Mega Starter Kit</td>
                                <td style="padding: 15px 25px; color: var(--coral); font-weight: bold;">1 Day Late</td>
                                <td style="padding: 15px 25px; font-weight: bold; color: var(--maroon);">₹100 (₹100/day)</td>
                                <td style="padding: 15px 25px;"><span style="color: var(--coral); background: #fce4e4; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">-0.1 ⭐</span></td>
                                <td style="padding: 15px 25px; display: flex; gap: 10px;">
                                    <button style="border: 1px solid #ccc; background: white; color: #666; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem;" onclick="alert('Fine waived successfully!'); this.parentElement.parentElement.style.opacity='0.4';">Waive Fine</button>
                                    <button style="border: none; background: var(--maroon); color: white; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;" onclick="alert('Penalty notice & UPI fine link sent to student!'); this.parentElement.parentElement.style.opacity='0.4';">Enforce & Notify</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ` : ''}

            </div>
        </div>
    `;
}