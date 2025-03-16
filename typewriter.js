class Typewriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.current = 0;
        this.isTag = false;
        this.cursor = document.createElement('span');
        this.cursor.className = 'typewriter-cursor';
        this.element.parentNode.insertBefore(this.cursor, this.element.nextSibling);
    }

    type() {
        const characters = this.text.split('');
        
        const type = () => {
            if (this.current < characters.length) {
                if (characters[this.current] === '*' && characters[this.current + 1] === '*') {
                    this.isTag = !this.isTag;
                    this.current += 2;
                }

                if (this.isTag) {
                    this.element.innerHTML += `<strong>${characters[this.current]}</strong>`;
                } else {
                    this.element.innerHTML += characters[this.current];
                }
                
                this.current++;
                setTimeout(type, this.speed);
            } else {
                // Keep cursor blinking after typing is complete
                this.cursor.style.animation = 'blink 0.7s infinite';
            }
        };

        type();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('typewriter');
    const text = `Fredrick Mwepu is a **STEM leader**, **robotics enthusiast**, and **student at The Copperbelt University**, passionate about innovation and sustainability. With a deep curiosity for **robotics and AI**, he has engaged in various tech-driven projects, including representing his country at the **FIRST Global Robotics Challenge**, a prestigious competition fostering problem-solving and collaboration.`;
    
    const typewriter = new Typewriter(element, text, 5);
    typewriter.type();
});