
let cookieCount = 0;
let cookiesPerClick = 1;
let autoClickerCost = 20;
let multiplierCost = 100;
let autoClickersOwned = 0;
let multipliersOwned = 0;
let autoClickerRate = 0;


const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
const autoClickerButton = document.getElementById('autoClicker');
const autoClickersOwnedDisplay = document.getElementById('autoClickersOwned');
const multiplierButton = document.getElementById('multiplier');
const multipliersOwnedDisplay = document.getElementById('multipliersOwned');


function updateCookieCount() {
    cookieCountDisplay.textContent = cookieCount;
    autoClickerButton.disabled = cookieCount < autoClickerCost;
    autoClickerButton.textContent = `Auto-Clicker ${autoClickersOwned} \n (Cost: ${autoClickerCost} Cookies)`;
    multiplierButton.disabled = cookieCount < multiplierCost;
    multiplierButton.textContent = `Multiplier (Cost: ${multiplierCost} Cookies)   ${multipliersOwned}`;
    autoClickersOwnedDisplay.textContent = autoClickersOwned;
    multipliersOwnedDisplay.textContent = multipliersOwned;
}


cookie.addEventListener('click', function () {
    cookieCount += cookiesPerClick;
    updateCookieCount();
});


autoClickerButton.addEventListener('click', function () {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickersOwned += 1;
        autoClickerRate += 1;
        autoClickerCost = Math.floor(autoClickerCost * 1.15);
        updateCookieCount();
    }
});


setInterval(function () {
    if (autoClickerRate > 0) {
        cookieCount += autoClickerRate;
        updateCookieCount();
    }
}, 1000);


multiplierButton.addEventListener('click', function () {
    if (cookieCount >= multiplierCost) {
        cookieCount -= multiplierCost;
        cookiesPerClick *= 2;
        multipliersOwned += 1;
        multiplierCost = Math.floor(multiplierCost * 8);
        updateCookieCount();
    }
});

updateCookieCount();
