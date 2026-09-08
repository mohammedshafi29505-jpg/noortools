// ZAKAT CALCULATOR
function calculateZakat() {
    const wealth = parseFloat(document.getElementById('zakatWealth').value) || 0;
    const gold = parseFloat(document.getElementById('zakatGold').value) || 0;
    const silver = parseFloat(document.getElementById('zakatSilver').value) || 0;
    const resultDiv = document.getElementById('zakatResult');

    if (wealth < 0 || gold < 0 || silver < 0) {
        resultDiv.innerHTML = '<div class="error-message">❌ Please enter valid positive numbers</div>';
        return;
    }

    const zakatRate = 0.025;
    const zakatAmount = (wealth + gold + silver) * zakatRate;

    if (wealth + gold + silver === 0) {
        resultDiv.innerHTML = '<div class="error-message">❌ Please enter at least one value</div>';
        return;
    }

    resultDiv.innerHTML = `
        <div class="result-box">
            <h3>Zakat Calculation</h3>
            <div class="result-value">$${zakatAmount.toFixed(2)}</div>
            <div class="result-unit">Your Zakat obligation at 2.5%</div>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #6b7280;">
                <strong>Breakdown:</strong><br>
                • Wealth: $${wealth.toFixed(2)}<br>
                • Gold value included: ${gold}g<br>
                • Silver value included: ${silver}g<br>
                • Rate: 2.5%
            </p>
        </div>
    `;
}

// AGE CALCULATOR
function calculateAge() {
    const birthDate = document.getElementById('birthDate').value;
    const resultDiv = document.getElementById('ageResult');

    if (!birthDate) {
        resultDiv.innerHTML = '<div class="error-message">❌ Please select a birth date</div>';
        return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
        resultDiv.innerHTML = '<div class="error-message">❌ Birth date cannot be in the future</div>';
        return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `
        <div class="result-box">
            <h3>Your Age</h3>
            <div class="result-value">${years}</div>
            <div class="result-unit">years, ${months} months, ${days} days</div>
        </div>
    `;
}

// PERCENTAGE CALCULATOR
function calculatePercent() {
    const number = parseFloat(document.getElementById('percentNum').value);
    const percent = parseFloat(document.getElementById('percentVal').value);
    const resultDiv = document.getElementById('percentResult');

    if (isNaN(number) || isNaN(percent)) {
        resultDiv.innerHTML = '<div class="error-message">❌ Please enter valid numbers</div>';
        return;
    }

    const result = (number * percent) / 100;

    resultDiv.innerHTML = `
        <div class="result-box">
            <h3>Percentage Result</h3>
            <div class="result-value">${result.toFixed(2)}</div>
            <div class="result-unit">${percent}% of ${number}</div>
        </div>
    `;
}

// ISLAMIC DATE CONVERTER
function convertToHijri() {
    const gregorianDate = document.getElementById('gregorianDate').value;
    const resultDiv = document.getElementById('hijriResult');

    if (!gregorianDate) {
        resultDiv.innerHTML = '<div class="error-message">❌ Please select a date</div>';
        return;
    }

    resultDiv.innerHTML = `
        <div class="placeholder-content">
            <p>Hijri conversion for ${gregorianDate}</p>
            <p style="font-size: 0.85rem; margin-top: 10px;">Accurate Islamic calendar conversion will be calculated here using verified sources</p>
        </div>
    `;
}
