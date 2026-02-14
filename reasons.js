// اختر كل الزرار
const buttons = document.querySelectorAll('.reason-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.nextElementSibling;
        if(text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    });
});
