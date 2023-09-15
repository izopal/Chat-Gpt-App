
const ctx = canvas.getContext('2d', { willReadFrequently: true });
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const rainCount = 140;
const maxHeight = 10;
const minHeight = 0.2;
const maxSpeed  = 10;
const minSpeed  = 5;

class Rain{
	constructor(x, y){
		this.rainX     = Math.floor(Math.random() * canvas.width);
		this.rainY     = Math.random() * -500;
		this.rainHeigh = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
		this.rainSpeed = Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed);
		this.opacity   = Math.random() * .55;
		this.onGround  = canvas.height;
	}
	update(){
		this.rainY < this.onGround ? this.rainY += this.rainSpeed :
		                             this.rainY  = this.rainHeigh - 100;
 		}
		 draw(ctx) {
			ctx.globalAlpha = this.opacity;
			ctx.beginPath();
			ctx.moveTo(this.rainX, this.rainY);
			ctx.lineTo(this.rainX, this.rainY + this.rainHeigh * 2);                                  // Змінюємо координати для нижньої точки
			ctx.lineWidth = Math.random() * 2 + 1;                                                // Випадкова товщина лінії
			const randomGray = Math.floor(Math.random() * 156 + 100);                             // Випадковий відтінок сірого
			ctx.strokeStyle = `rgba(${randomGray},${randomGray},${randomGray}, ${this.opacity})`; // Випадковий колір
			ctx.shadowBlur = 10;                                                                  // Додаємо ефект розмиття
			ctx.shadowColor = 'white';                                                            // Колір розмиття
			ctx.stroke();
			ctx.shadowBlur = 0;                                                                   // Скидаємо ефект розмиття
		}
	
}

const rainArray = [];

for (let i = 0; i < rainCount; i++) {
	rainArray.push(new Rain());
}

function animateRain() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	
	rainArray.forEach(rain => {
        rain.update();
        rain.draw(ctx);
    });

	requestAnimationFrame(animateRain);
}

animateRain(0);




