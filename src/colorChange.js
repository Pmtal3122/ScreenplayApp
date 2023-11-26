console.log('Color change imported');


function changeColor() {
    const gsContent = document.querySelectorAll(".GSContent");
    gsContent.forEach(colorChange);
}

function colorChange(element) {
    element.style.backgroundColor = "#333";
}

export default changeColor;