// Home page search functionality
const homeSearch = document.getElementById('homeSearch');
const homeSearchBtn = document.getElementById('homeSearchBtn');

if (homeSearchBtn && homeSearch) {
    homeSearchBtn.addEventListener('click', performSearch);
    homeSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

function performSearch() {
    const query = homeSearch.value.trim().toLowerCase();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }

    // Route to appropriate page based on keywords
    if (query.includes('quran') || query.includes('surah') || query.includes('ayah')) {
        window.location.href = 'quran.html';
    } else if (query.includes('tool') || query.includes('calculator') || query.includes('zakat') || query.includes('date')) {
        window.location.href = 'tools.html';
    } else if (query.includes('dua') || query.includes('duas')) {
        window.location.href = 'duas.html';
    } else {
        // Default to Quran search
        window.location.href = 'quran.html?q=' + encodeURIComponent(query);
    }
}
