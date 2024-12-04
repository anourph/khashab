// مثال: إضافة التفاعل عند الضغط على زر الطلب
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("تم إضافة المنتج إلى سلة التسوق.");
    });
});
