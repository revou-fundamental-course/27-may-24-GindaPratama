// Masukan nama //
function replaceName() {
    let namaProfile = prompt("siapa nama kamu?", "");
    document.getElementById("namaProfile").innerHTML = namaProfile
}

replaceName();

document.getElementById("tombol").addEventListener("click", function(){replaceName()})

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