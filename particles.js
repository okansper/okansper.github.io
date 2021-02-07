
// based on https://codepen.io/LeKohrs/pen/eVpEOa

addParticleEffect('#canvas', {
  mousemove: false,
});

function addParticleEffect(canvasSelector, userOptions) {
  var defaults = {
    mousemove: true,
  };
  var options = Object.assign({}, defaults, userOptions);
  var W,
    H,
    now,
    then,
    canvas,
    ctx,
    particleCount = 700,
    particles = [];

  W = window.innerWidth;
  H = window.innerHeight;

  canvas = document.querySelector(canvasSelector);
  canvas.width = W;
  canvas.height = H;

  ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'lighter';

  var mouse = {
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    speed: 45,
    delta: 0,
  };

  if (options.mousemove) {
    document.addEventListener(
      'mousemove',
      function(e) {
        mouse.x = e.clientX || e.pageX;
        mouse.y = e.clientY || e.pageY;
        mouse.x -= W / 2;
        mouse.y -= H / 2;
      },
      false,
    );
  }

  function randomNorm(mean, stdev) {
    return (
      Math.abs(
        Math.round(
          Math.random() * 2 -
            1 +
            (Math.random() * 2 - 1) +
            (Math.random() * 2 - 1),
        ) * stdev,
      ) + mean
    );
  }

  //Setup particle class
  function Particle() {
    //using hsl is easier when we need particles with similar colors
    this.h = parseInt(0, 10);
    this.s = parseInt(40 * Math.random() + 60, 10);
    this.l = parseInt(40 * Math.random() + 60, 10);
    this.a = 0.5 * Math.random();

    this.color = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
    this.shadowcolor = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${parseFloat(
      this.a - 0.55,
    )})`;

    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.direction = {
      x: -1 + Math.random() * 2,
      y: -1 + Math.random() * 2,
    };
    this.radius = randomNorm(0, 4);
    this.scale = 0.8 * Math.random() + 0.1;
    this.rotation = (Math.PI / 4) * Math.random();

    this.grad = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius,
      this.x,
      this.y,
      0,
    );
    this.grad.addColorStop(0, this.color);
    this.grad.addColorStop(1, this.shadowcolor);

    this.vx = (2 * Math.random() + 4) * 0.01 * this.radius;
    this.vy = (2 * Math.random() + 4) * 0.01 * this.radius;

    this.valpha = 0.01 * Math.random() - 0.02;

    this.move = function() {
      this.x += this.vx * this.direction.x;
      this.y += this.vy * this.direction.y;
      this.rotation += this.valpha;
      this.radius *= Math.abs(this.valpha * 0.01 + 1);
    };

    this.changeDirection = function(axis) {
      this.direction[axis] *= -1;
      this.valpha *= -1;
    };

    this.draw = function() {
      ctx.save();
      ctx.translate(
        this.x + (mouse.rx / -20) * this.radius,
        this.y + (mouse.ry / -20) * this.radius,
      );
      ctx.rotate(this.rotation);
      ctx.scale(this.scale, this.scale);

      this.grad = ctx.createRadialGradient(0, 0, this.radius, 0, 0, 0);
      this.grad.addColorStop(1, this.color);
      this.grad.addColorStop(0, this.shadowcolor);
      ctx.beginPath();
      ctx.fillStyle = this.grad;
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    this.boundaryCheck = function() {
      if (this.x >= W * 1.2) {
        this.x = W * 1.2;
        this.changeDirection('x');
      } else if (this.x <= -W * 0.2) {
        this.x = -W * 0.2;
        this.changeDirection('x');
      }
      if (this.y >= H * 1.2) {
        this.y = H * 1.2;
        this.changeDirection('y');
      } else if (this.y <= -H * 0.2) {
        this.y = -H * 0.2;
        this.changeDirection('y');
      }
    };
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, W, H);
  }

  function createParticles() {
    for (var i = particleCount - 1; i >= 0; i--) {
      var p = new Particle();
      particles.push(p);
    }
  }

  function drawParticles() {
    for (var i = particleCount - 1; i >= 0; i--) {
      var p = particles[i];
      p.draw();
    }
  }

  function updateParticles() {
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.move();
      p.boundaryCheck();
    }
  }

  function initParticleSystem() {
    createParticles();
    drawParticles();
  }

  function animateParticles() {
    clearCanvas();
    setDelta();
    update();
    drawParticles();
    updateParticles();
    requestAnimationFrame(animateParticles);
  }

  initParticleSystem();
  requestAnimationFrame(animateParticles);

  function setDelta() {
    now = new Date().getTime();
    mouse.delta = (now - then) / 1000;
    then = now;
  }

  function update() {
    if (isNaN(mouse.delta) || mouse.delta <= 0) {
      return;
    }

    var distX = mouse.x - mouse.rx,
      distY = mouse.y - mouse.ry;

    if (distX !== 0 && distY !== 0) {
      mouse.rx -= (mouse.rx - mouse.x) / mouse.speed;
      mouse.ry -= (mouse.ry - mouse.y) / mouse.speed;
    }
  }
}
