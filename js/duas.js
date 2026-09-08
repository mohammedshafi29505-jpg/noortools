// Duas data structure - Placeholders only (no fabrication)
const duasData = {
    morning: [
        {
            title: 'Morning Dua',
            category: 'Morning & Evening',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ],
    sleep: [
        {
            title: 'Before Sleeping',
            category: 'Before Sleeping',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ],
    travel: [
        {
            title: 'Dua for Travelling',
            category: 'Travelling',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ],
    eating: [
        {
            title: 'Before Eating',
            category: 'Eating',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ],
    protection: [
        {
            title: 'Dua for Protection',
            category: 'Protection',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ],
    general: [
        {
            title: 'General Dua',
            category: 'General',
            arabic: '[Authentic Arabic text to be added]',
            transliteration: '[Transliteration to be added]',
            translation: '[English translation to be added]',
            source: 'To be verified'
        }
    ]
};

// Initialize duas
function initializeDuas() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const duasContainer = document.getElementById('duasContainer');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            displayDuas(category);
        });
    });

    // Display default category
    displayDuas('morning');
}

function displayDuas(category) {
    const duasContainer = document.getElementById('duasContainer');
    const duas = duasData[category] || [];
    
    if (duas.length === 0) {
        duasContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #6b7280;">No duas available yet</p>';
        return;
    }

    duasContainer.innerHTML = duas.map(dua => `
        <div class="dua-card">
            <span class="dua-category">${dua.category}</span>
            <h3 class="dua-title">${dua.title}</h3>
            <div class="dua-text" style="direction: rtl; font-size: 1.1rem; margin: 15px 0;">
                ${dua.arabic}
            </div>
            <div class="dua-translation">
                <strong>Translation:</strong><br>
                ${dua.translation}
            </div>
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e5e7eb; font-size: 0.85rem; color: #6b7280;">
                <strong>Source:</strong> ${dua.source}
            </div>
            <div class="dua-actions">
                <button onclick="copyToClipboard('${dua.title.replace(/'/g, "\\'")}')">📋 Copy</button>
                <button onclick="shareDua('${dua.title.replace(/'/g, "\\'")}')">📤 Share</button>
            </div>
        </div>
    `).join('');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(() => {
        alert('Could not copy to clipboard');
    });
}

function shareDua(title) {
    if (navigator.share) {
        navigator.share({
            title: 'NoorTools Dua',
            text: title,
            url: window.location.href
        }).catch(err => console.log('Share error:', err));
    } else {
        alert('Share not supported on your device');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeDuas);
