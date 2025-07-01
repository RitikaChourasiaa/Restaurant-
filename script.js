
    const leftBtn = document.querySelector('#left-btn');
    const rightBtn = document.querySelector('#right-btn');
    const slider = document.getElementById('services');

    rightBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    leftBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    const text = [
            "online delivery",
            "fast service",
            "tasty food",
            "customer support"
        ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let currentText = 0;
    let isDeleting = false;

    function type() {
        const fullWord = text[wordIndex];

        if (isDeleting){
            currentText = fullWord.substring(0, charIndex--);
        }else{
            currentText = fullWord.substring(0, charIndex++);
        }

        document.querySelector('#text').textContent = currentText;

    if(!isDeleting && charIndex === fullWord.length) {
        isDeleting = true;
        setTimeout(type, 100);
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % text.length;
        setTimeout(type, 1000)
    }
    else{
        setTimeout(type, isDeleting ?50 : 50);
    }
}

    
type();






