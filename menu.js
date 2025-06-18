document.addEventListener('DOMContentLoaded', function() {
    // Daily Tip Close Button
    const closeTipBtn = document.querySelector('.close-tip-btn');
    const dailyTipSection = document.querySelector('.daily-tip-section');

    if (closeTipBtn && dailyTipSection) {
        closeTipBtn.addEventListener('click', function() {
            dailyTipSection.style.display = 'none';
        });
    }

   
}); 