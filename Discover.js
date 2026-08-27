// PAGES/Discover.js

export function renderBrowse(searchData = '') {
    let query = '';
    let targetCategory = '';

    if (typeof searchData === 'object' && searchData !== null) {
        query = searchData.query || '';
        targetCategory = searchData.category || '';
    } else if (typeof searchData === 'string') {
        query = searchData.toLowerCase();
    }

    // Run filter after a tiny timeout to ensure DOM elements are rendered
    setTimeout(() => {
        if (typeof window.filterInventory === 'function') {
            window.filterInventory();
        }
    }, 50);

    return `
        <div style="margin-top: 20px; padding-bottom: 50px;">
            
            <!-- HEADER -->
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 25px;">
                <div>
                    <div style="font-size: 0.75rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">Directory & AI Match Results</div>
                    <h2 style="margin: 0; font-family: Georgia, serif; font-size: 2.5rem; color: var(--text-dark);">Browse Campus Inventory</h2>
                </div>
                <div style="font-size: 0.9rem; color: #666;">
                    ${query ? `AI Match for: <strong style="color: var(--maroon);">"${query}"</strong>` : 'Showing verified student & lab listings'}
                </div>
            </div>

            <div class="browse-container">
                
                <!-- LEFT FILTER SIDEBAR -->
                <div class="filter-sidebar">
                    <div style="font-weight: bold; font-size: 1rem; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Filter Resources</div>
                    
                    <div class="filter-group">
                        <h4>Department</h4>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="all-dept" checked onchange="filterInventory()"> All Departments</label>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="ai" checked onchange="filterInventory()"> AI & Data Science</label>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="ece" checked onchange="filterInventory()"> Electronics & CS (ECE)</label>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="mech" checked onchange="filterInventory()"> Mechanical Workshop</label>
                    </div>

                    <div class="filter-group">
                        <h4>Category</h4>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="media" checked onchange="filterInventory()"> Media & Film Gear</label>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="books" checked onchange="filterInventory()"> Books & Notes</label>
                        <label style="display: block; margin-bottom: 8px; font-size: 0.9rem; cursor: pointer;"><input type="checkbox" class="filter-checkbox" value="workshop" checked onchange="filterInventory()"> Workshop Tools</label>
                    </div>
                </div>

                <!-- RIGHT GRID -->
                <div>
                    <!-- Search & Sort bar -->
                    <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                        <input type="text" id="browse-search-box" value="${query}" placeholder="Search cameras, textbooks, soldering irons..." style="flex: 1; padding: 12px 15px; border: 1px solid #ccc; border-radius: 8px; font-size: 0.95rem; outline: none;">
                        <button style="background: var(--blue); color: white; border: none; padding: 0 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Search</button>
                    </div>

                    <!-- GRID OF CARDS -->
                    <div class="resource-grid" id="inventory-grid">
                        
                        <!-- RESOURCE CARD 1: Sony Alpha Camera -->
                        <div class="resource-card inventory-item" data-dept="ai" data-category="media">
                            <div style="height: 180px; width: 100%; background: #f0f0f0; overflow: hidden; position: relative;">
                                <img src="ASSETS/sony-camera.jpg" alt="Sony Alpha Camera" style="width: 100%; height: 100%; object-fit: cover;">
                                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Media & Film</span>
                            </div>
                            
                            <div style="padding: 20px;">
                                <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; margin-bottom: 5px;">Lender: Priya Iyer (AI & DS) • 4.9⭐</div>
                                <h3 style="margin: 0 0 10px 0; font-size: 1.2rem; font-family: Georgia, serif; color: var(--text-dark);">Sony Alpha 7 III</h3>
                                <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Includes 16-50mm lens, extra battery, tripod and carrying case. Verified for campus media shoots.</p>
                                
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: var(--blue);">📍 Locker L-12</span>
                                    <button onclick="openConditionModal()" style="background: var(--coral); color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.8rem;">View Condition</button>
                                </div>
                            </div>
                        </div>

                        <!-- RESOURCE CARD 2: ECE Textbook Bundle -->
                        <div class="resource-card inventory-item" data-dept="ece" data-category="books">
                            <div style="height: 180px; width: 100%; background: #f0f0f0; overflow: hidden; position: relative;">
                                <img src="ASSETS/download (6).jpg" alt="ECE Textbook Bundle" style="width: 100%; height: 100%; object-fit: cover;">
                                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Books & Notes</span>
                            </div>
                            
                            <div style="padding: 20px;">
                                <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; margin-bottom: 5px;">Lender: ECE Dept. Lab • Institutional</div>
                                <h3 style="margin: 0 0 10px 0; font-size: 1.2rem; font-family: Georgia, serif; color: var(--text-dark);">ECE Dept. Textbook Bundle (Sem V)</h3>
                                <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Complete set of Microcontrollers, Digital Signal Processing, and Electronic Circuits reference books.</p>
                                
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: var(--blue);">📍 Locker L-05</span>
                                    <button style="background: var(--coral); color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.8rem;">Request Item</button>
                                </div>
                            </div>
                        </div>

                        <!-- RESOURCE CARD 3: Workshop Toolbox -->
                        <div class="resource-card inventory-item" data-dept="mech" data-category="workshop">
                            <div style="height: 180px; width: 100%; background: #f0f0f0; overflow: hidden; position: relative;">
                                <img src="ASSETS/toolkit.jpg" alt="Precision Workshop Toolbox" style="width: 100%; height: 100%; object-fit: cover;">
                                <span style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">Workshop</span>
                            </div>
                            
                            <div style="padding: 20px;">
                                <div style="font-size: 0.7rem; color: #888; text-transform: uppercase; margin-bottom: 5px;">Lender: Rohit Menon (Mechanical) • 4.8⭐</div>
                                <h3 style="margin: 0 0 10px 0; font-size: 1.2rem; font-family: Georgia, serif; color: var(--text-dark);">Precision Workshop Toolbox</h3>
                                <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Includes digital caliper, metric wrenches, precision screwdrivers and safety goggles.</p>
                                
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: var(--blue);">📍 Locker W-02</span>
                                    <button style="background: var(--coral); color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 0.8rem;">Request Item</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    `;
}

// Strict Filtering Logic: Requires BOTH Department AND Category to match
window.filterInventory = function() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    
    const checkedDepts = Array.from(checkboxes)
        .filter(cb => cb.checked && (cb.value === 'all-dept' || cb.value === 'ai' || cb.value === 'ece' || cb.value === 'mech'))
        .map(cb => cb.value);

    const checkedCategories = Array.from(checkboxes)
        .filter(cb => cb.checked && (cb.value === 'media' || cb.value === 'books' || cb.value === 'workshop'))
        .map(cb => cb.value);

    const items = document.querySelectorAll('.inventory-item');

    items.forEach(item => {
        const dept = item.getAttribute('data-dept');
        const category = item.getAttribute('data-category');

        const matchesDept = checkedDepts.includes('all-dept') || checkedDepts.includes(dept);
        const matchesCategory = checkedCategories.includes(category);

        if (matchesDept && matchesCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}