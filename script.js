document.addEventListener("DOMContentLoaded", function () {
  const sets = [
    { name: "Qiyqiriq сет", price: "45000", img: "img/HZUU2lH1ZbPF8RUMbkI00HctLUq3UCBwisuMKesd.webp.png" },
    { name: "Снек сет", price: "79000", img: "img/cbidR6KU18nziNPphlU3jpa8OZi1nhaRKJkc93Cn.webp.png" },
    { name: "Классик сет", price: "34000", img: "img/h7WO4cUYGJBiBUFs2qeUAYMhe5xYEXlSSLd1LWCa.webp.png" },
    { name: "Лонгер рингс сет", price: "45000", img: "img/xJNb3iZ1NJ8Yx11eVSQ3X2CMSn5nruiAH8p9A35U.webp.png" },
    { name: "Биг сет", price: "62000", img: "img/45sfsptLWqT9vq7X3cfx1bIXZXLUuCULyln6EZlf.webp.png" },
    { name: "Лестер сет", price: "53000", img: "img/9RplsrJissmFUdjyIDNnRsjr12vfFUc2RZwd7iOq.webp.png" },
    { name: "Скул сет", price: "36000", img: "img/uJTcWJyBmtLq9abqzFXeiNgwFcItwFPGrllH9lGW.webp.png" },
    { name: "Комбо сет Большой", price: "20000", img: "img/p0TZUFzdFp7riQd4NFukH7bYCguz0h9jT5jbHNXy.webp.png" },
    { name: "Do’stlar 1х", price: "43000", img: "img/d4xA2cZWeidDPxv0mlQ2hsYEMQacOIqsWbWy92XR.png.png" },
    { name: "Do’stlar 2х", price: "79000", img: "img/U8v7GsJt5Nahm0L4Vna0u7HEeRc8U9PnU6R6j6TV.png.png" },
    { name: "Do’stlar 4х", price: "149000", img: "img/eGsfAo0P5E7gh8aRB0vHPXX2JTKjAFasnhiBO777.png.png" },
    { name: "Острый Do’stlar 1х", price: "43000", img: "img/iHB3KWEddHpod7sUIc82M8pI627orxHpTz18qknX.png.png" }
  ];

  const container = document.querySelector(".container");
  container.innerHTML = sets.map((set) => `
    <div class="card">
      <img src="${set.img}" alt="${set.name}" width="200">
      <p>${set.name}</p>
      <span>${set.price} сум</span>
      <div class="img">
        <a class="btn-event" data-name="${set.name}" data-price="${set.price}">
          <img src="img/Button.png" alt="Купить">
        </a>
      </div>
    </div>
  `).join("");

  document.querySelectorAll('.btn-event').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      buyNow(price, name);
    });
  });
});

document.querySelector(".navbar-container").innerHTML = `
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1 max-w-[80%] mx-auto">
      <img src="img/main_logo.svg fill.png" alt="">
      <a class="btn btn-ghost text-xl"></a>
    </div>
    <div class="flex-none max-w-[80%] mx-auto">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
                0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item text-red-600">8</span>
          </div>
        </div>
        <div tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="User" src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
          <li><a class="justify-between">Profile <span class="badge">New</span></a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

document.querySelector('.nav').innerHTML = `
  <div class="flex justify-center mt-10">
    <img src="Container.png" alt="" width="960px" height="300px">
  </div>
`;

function buyNow(price, name) {
  let amount = parseInt(prompt(`${name} nechta zakaz qilmoqchisiz?`));
  if (isNaN(amount) || amount <= 0) {
    alert('Iltimos, to‘g‘ri son kiriting!');
    return;
  }
  let total = price * amount;
  alert(`Siz zakaz qilgan maxsulot: ${name}
    Narxi: ${price} сум
    Soni: ${amount} ta
    Umumiy narxi: ${total} сум`);
    alert('zakaz qabul qilindi')
}