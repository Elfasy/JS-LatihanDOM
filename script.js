//ubah background
//tangkap button
const btnUbahWarna = document.querySelector('.btn1');
btnUbahWarna.addEventListener('click', function () {
    //tambahkan css untuk ubah background
    document.body.classList.toggle('ungu');
});

const btnBaru = document.createElement('button');
const textBaru = document.createTextNode('Acak Warna');
btnBaru.appendChild(textBaru);
btnBaru.setAttribute('type', 'button');
btnBaru.setAttribute('class', 'btnAcak');
//simpan setelah button 1
btnUbahWarna.after(btnBaru);

//acak warna
//tangkap button
const btnAcakWarna = document.querySelector('.btnAcak');
btnAcakWarna.addEventListener('click', function () {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

//setiap kursor bergerak
document.body.addEventListener('mousemove', function (e) {
    //tangkap nilai kursor
    let x = Math.round(e.clientX);
    let y = Math.round(e.clientY);
    //tangkap panjang&tinggi dokumen
    let panjang = window.innerWidth;
    let tinggi = window.innerHeight;
    //rumus (x/panjang) * 255
    let r = (x / panjang) * 255;
    let g = (y / tinggi) * 255;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',100)'
});

//berubah sesuai range slider
//tangkap element
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
//ketika slider digeser
sMerah.addEventListener('change', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sHijau.addEventListener('change', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('change', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});