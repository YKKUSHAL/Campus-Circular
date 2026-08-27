// app.js

// 1. Import your page modules (with tags to keep VS Code quiet)
// @ts-ignore
import { renderHome } from './PAGES/Home.js';
// @ts-ignore
import { renderBrowse } from './PAGES/Discover.js'; 
// @ts-ignore
import { renderExchanges } from './PAGES/Dashboard.js';
// @ts-ignore
import { renderImpact } from './PAGES/Impact.js';
// @ts-ignore
import { renderProfile } from './PAGES/Profile.js';
// @ts-ignore
import { renderAdmin } from './PAGES/Admin.js';

// 2. Select the main container
const appContent = document.getElementById('app-content');

// 3. The Global Router Function (Now supports passing search queries to Browse)
window.navigate = function(page, searchQuery = '') {
    // A. Update the active button styling in the navigation bar
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Safety check to ensure the button exists before adding the class
    const activeBtn = document.getElementById(`nav-${page}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // B. Inject the correct page content
    switch(page) {
        case 'home':
            appContent.innerHTML = renderHome();
            break;
        case 'browse':
            appContent.innerHTML = renderBrowse(searchQuery); // Passes query to filter inventory
            break;
        case 'exchanges':
            appContent.innerHTML = renderExchanges(); 
            break;
        case 'impact':
            appContent.innerHTML = renderImpact(); 
            break;
        case 'profile':
            appContent.innerHTML = renderProfile(); 
            break;
        case 'admin':
            appContent.innerHTML = renderAdmin(); 
            break;
        default:
            appContent.innerHTML = renderHome();
    }
}

// 4. Smart Match Search Integration (Binds Home search input directly to Browse page)
window.handleSmartSearch = function(customQuery = null) {
    const searchInput = customQuery || document.getElementById('ai-search-input').value;
    if (searchInput && searchInput.trim().length > 0) {
        // Automatically switch to the browse page and carry the search query over!
        window.navigate('browse', searchInput.trim());
    }
}

// 5. Condition Modal Functions (For the Browse Page)
window.openConditionModal = function() {
    const modal = document.getElementById('condition-modal');
    if (modal) modal.style.display = 'flex';
}

window.closeConditionModal = function() {
    const modal = document.getElementById('condition-modal');
    if (modal) modal.style.display = 'none';
}

// 6. Start the app on the Home page when it initially loads
navigate('home');