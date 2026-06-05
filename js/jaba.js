const track = document.getElementById('track');
const total = track.children.length;
const dotsWrap = document.getElementById('dot');
let current = 0;

for (let i = 0; i < total; i++) {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(d);
}

function goTo(n) {
  current = (n + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));