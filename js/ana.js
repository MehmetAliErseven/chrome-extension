const zaman = document.getElementById("zaman"),
  selam = document.getElementById("selam"),
  isim = document.getElementById("isim"),
  odak = document.getElementById("odak");

function zamanıGöster() {
  let bugün = new Date(),
    saat = bugün.getHours(),
    dakika = bugün.getMinutes(),
    saniye = bugün.getSeconds();

  zaman.innerHTML = `${sıfırEkle(saat)}<span>:</span>${sıfırEkle(
    dakika
  )}<span>:</span>${sıfırEkle(saniye)}`;

  setTimeout(zamanıGöster, 1000);
}

function sıfırEkle(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function arkaPlan() {
  let bugün = new Date(),
    saat = bugün.getHours();

  if (saat < 6) {
    document.body.style.backgroundImage = "url('./img/gece.jpg')";
    selam.textContent = "İyi Geceler";
    document.body.style.color = "white";
  } else if (saat < 12) {
    document.body.style.backgroundImage = "url('./img/sabah.jpg')";
    selam.textContent = "İyi Sabahlar";
  } else if (saat < 18) {
    document.body.style.backgroundImage = "url('./img/öğle.jpg')";
    selam.textContent = "İyi Öğleden Sonralar";
    document.body.style.color = "white";
  } else if (saat < 24) {
    document.body.style.backgroundImage = "url('./img/akşam.jpg')";
    selam.textContent = "İyi Akşamlar";
    document.body.style.color = "white";
  }
}

function ismiAl() {
  if (localStorage.getItem("isim") === null) {
    isim.textContent = "[Adınızı Giriniz]";
  } else {
    isim.textContent = localStorage.getItem("isim");
  }
}

function odakAl() {
  if (localStorage.getItem("odak") === null) {
    odak.textContent = "[Buraya yazabilirsiniz]";
  } else {
    odak.textContent = localStorage.getItem("odak");
  }
}

function ismiAyarla(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("isim", e.target.innerText);
      isim.blur();
    }
  } else {
    localStorage.setItem("isim", e.target.innerText);
  }
}

function odakAyarla(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("odak", e.target.innerText);
      odak.blur();
    }
  } else {
    localStorage.setItem("odak", e.target.innerText);
  }
}

isim.addEventListener("keypress", ismiAyarla);
isim.addEventListener("blur", ismiAyarla);

odak.addEventListener("keypress", odakAyarla);
odak.addEventListener("blur", odakAyarla);

zamanıGöster();
arkaPlan();
ismiAl();
odakAl();
