// effects.js

window.addEventListener('DOMContentLoaded', () => {

    // ── 1. Typing effect ──────────────────────────────────────────
    const typingEl = document.getElementById('typing-text');
    if (typingEl) {
        const words = ['Software Engineer', 'AI Engineer', 'Open Source Contributor'];
        let wordIndex = 0, charIndex = 0, deleting = false;

        function type() {
            const current = words[wordIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingEl.textContent = current.slice(0, charIndex);

            let delay = deleting ? 60 : 100;

            if (!deleting && charIndex === current.length) {
                delay = 1800;
                deleting = true;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 400;
            }

            setTimeout(type, delay);
        }
        type();
    }




    // ── 3. Project card 3D tilt ──────────────────────────────────
    document.querySelectorAll('.project-card-sm').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -12;
            const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 12;
            card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            card.style.transition = 'transform 0.1s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
        });
    });


    // ── 4. Cursor glow ───────────────────────────────────────────
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    (function animateGlow() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    })();


    // ── 6. Particle cursor trail ─────────────────────────────────
    const trailColors = ['#64b4ff', '#a855f7', '#10b981', '#f59e0b', '#ec4899'];
    let lastTrailX = 0, lastTrailY = 0;

    document.addEventListener('mousemove', (e) => {
        const dx = e.clientX - lastTrailX;
        const dy = e.clientY - lastTrailY;
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        lastTrailX = e.clientX;
        lastTrailY = e.clientY;

        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.background = trailColors[Math.floor(Math.random() * trailColors.length)];
        document.body.appendChild(dot);

        setTimeout(() => dot.remove(), 800);
    });


    // ── 7. Aurora background ─────────────────────────────────────
    const aurora = document.createElement('div');
    aurora.id = 'aurora-bg';
    document.body.prepend(aurora);

    const blobs = [
        { el: null, x: 20, y: 80, vx: 0.12, vy: 0.08, color: '99,102,241' },
        { el: null, x: 60, y: 70, vx: -0.09, vy: 0.11, color: '168,85,247' },
        { el: null, x: 40, y: 85, vx: 0.07, vy: -0.10, color: '16,185,129' },
        { el: null, x: 75, y: 75, vx: -0.11, vy: 0.07, color: '59,130,246' },
    ];

    blobs.forEach((b, i) => {
        const el = document.createElement('div');
        el.className = 'aurora-blob';
        el.style.setProperty('--color', b.color);
        aurora.appendChild(el);
        b.el = el;
    });

    (function animateAurora() {
        blobs.forEach(b => {
            b.x += b.vx;
            b.y += b.vy;
            if (b.x < 5 || b.x > 95) b.vx *= -1;
            if (b.y < 55 || b.y > 100) b.vy *= -1;
            b.el.style.left = b.x + '%';
            b.el.style.top = b.y + '%';
        });
        requestAnimationFrame(animateAurora);
    })();


    // ── 5. Particle star background (fullscreen) ─────────────────
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.4 + 0.2,
            dx: (Math.random() - 0.5) * 0.25,
            dy: (Math.random() - 0.5) * 0.25,
            alpha: Math.random() * 0.4 + 0.1,
        }));

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }


    // ── 6. Nav button ripple ─────────────────────────────────────
    document.querySelectorAll('.navg').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

});
