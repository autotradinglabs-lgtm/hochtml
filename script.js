// Toggle mobile nav
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// Demo action
document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.matches('.btn.primary[href="#dich-vu"]')) {
    // Smooth scroll to features
    const target = document.querySelector('#dich-vu');
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    e.preventDefault();
  }
});
// Đổi nội dung vùng hero khi bấm "Xem tính năng"
const btnFeatures = document.querySelector('#btn-features');
const heroDesc    = document.querySelector('#hero-desc');

btnFeatures?.addEventListener('click', (e) => {
  // Nếu KHÔNG muốn cuộn xuống "Tính năng", bỏ comment dòng sau:
  // e.preventDefault();

  if (!heroDesc) return;
  const newText = btnFeatures.dataset.new || 'Các tính năng nổi bật đã sẵn sàng!';
  heroDesc.textContent = newText;

  // hiệu ứng nháy nhẹ để người dùng thấy có thay đổi
  heroDesc.classList.add('blink');
  setTimeout(() => heroDesc.classList.remove('blink'), 600);

  // Nếu vẫn muốn cuộn xuống #dich-vu, giữ nguyên href hoặc:
  // document.querySelector('#dich-vu')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('a[href="#lien-he"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn cuộn tới #lien-he
    document.getElementById('hero-desc').textContent = 'haaa tao đã thành công';
  });
});
