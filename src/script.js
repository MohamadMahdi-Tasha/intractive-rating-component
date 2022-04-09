// Codes By Mahdi Tasha
// Variables
const rate_btn_1 = document.getElementById('rate-btn-1');
const rate_btn_2 = document.getElementById('rate-btn-2');
const rate_btn_3 = document.getElementById('rate-btn-3');
const rate_btn_4 = document.getElementById('rate-btn-4');
const rate_btn_5 = document.getElementById('rate-btn-5');

// A Function That Activates Button And Disables Others.
function activate_btn(btn, btn2, btn3, btn4, btn5) {
    btn.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
}

// Adding Event Listener On Rate Buttons That Listens To Click And Calls 'activate_btn' Function On Clicked Button.
rate_btn_1.addEventListener('click', () => activate_btn(rate_btn_1, rate_btn_2, rate_btn_3, rate_btn_4, rate_btn_5))
rate_btn_2.addEventListener('click', () => activate_btn(rate_btn_2, rate_btn_1, rate_btn_3, rate_btn_4, rate_btn_5))
rate_btn_3.addEventListener('click', () => activate_btn(rate_btn_3, rate_btn_1, rate_btn_2, rate_btn_4, rate_btn_5))
rate_btn_4.addEventListener('click', () => activate_btn(rate_btn_4, rate_btn_1, rate_btn_2, rate_btn_3, rate_btn_5))
rate_btn_5.addEventListener('click', () => activate_btn(rate_btn_5, rate_btn_1, rate_btn_2, rate_btn_3, rate_btn_4))