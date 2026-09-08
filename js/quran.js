// Quran module - Placeholder interface
const surahList = document.getElementById('surahList');
const surahSearch = document.getElementById('surahSearch');
const surahContent = document.getElementById('surahContent');
const surahTitle = document.getElementById('surahTitle');
const surahInfo = document.getElementById('surahInfo');
const ayahsContainer = document.getElementById('ayahsContainer');

// Placeholder list of 114 Surahs (names only - no data fabrication)
const surahs = [
    { number: 1, name: 'Al-Fatihah', englishName: 'The Opening' },
    { number: 2, name: 'Al-Baqarah', englishName: 'The Cow' },
    { number: 3, name: 'Aal-E-Imran', englishName: 'The Family of Imran' },
    { number: 4, name: 'An-Nisa', englishName: 'The Women' },
    { number: 5, name: 'Al-Ma\'idah', englishName: 'The Table Spread' },
    { number: 6, name: 'Al-An\'am', englishName: 'The Cattle' },
    { number: 7, name: 'Al-A\'raf', englishName: 'The Heights' },
    { number: 8, name: 'Al-Anfal', englishName: 'The Spoils of War' },
    { number: 9, name: 'At-Tawbah', englishName: 'The Repentance' },
    { number: 10, name: 'Yunus', englishName: 'Jonah' },
];

// Initialize Surah list
function initializeSurahList() {
    surahList.innerHTML = '';
    surahs.forEach(surah => {
        const li = document.createElement('li');
        li.className = 'surah-item';
        li.textContent = `${surah.number}. ${surah.name}`;
        li.addEventListener('click', () => selectSurah(surah, li));
        surahList.appendChild(li);
    });
}

// Select a Surah
function selectSurah(surah, element) {
    document.querySelectorAll('.surah-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    surahTitle.textContent = `${surah.number}. ${surah.name} (${surah.englishName})`;
    surahInfo.textContent = `Surah ${surah.number} of 114 | Authentic data will be loaded here`;
    
    ayahsContainer.innerHTML = '<div class="placeholder-content" style="margin-top: 20px;"><p>Ayahs (verses) for this Surah will be displayed here when data is connected.</p><p style="font-size: 0.85rem; margin-top: 10px;">Arabic text, translations, and Tafsir from verified sources only.</p></div>';
}

// Search functionality
if (surahSearch) {
    surahSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.surah-item');
        
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Initialize on load
initializeSurahList();
