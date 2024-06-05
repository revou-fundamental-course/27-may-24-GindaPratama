// Masukan nama //
function replaceName() {
    let namaProfile = prompt("siapa nama kamu?", "");
    document.getElementById("namaProfile").innerHTML = namaProfile
}

replaceName();
// Merubah nama //
document.getElementById("tombol").addEventListener("click", function(){replaceName()})

// Hasil input data //
document.getElementById('formulir').addEventListener('submit', function(event) {
    event.preventDefault();

    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const nama = document.getElementById('nama').value;
    const tglLahir = document.getElementById('tglLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

    document.getElementById('result').value = resultText;

});

// Pindah Slides //
var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner-img");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for(i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slideIndex-1].style.display = "block";
}

// Auto slide //
setInterval(() => {
    plusDivs(1);
}, 7000)