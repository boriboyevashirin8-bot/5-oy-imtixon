let API = "https://68b6cad773b3ec66cec2b766.mockapi.io/imtixon/imtixon";
let card = document.getElementById("card");
let shop_cart = document.getElementById("shop_cart");
let shop1 = JSON.parse(localStorage.getItem("shop")) || [];


const getData = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
};

getData().then((res) => addUI(res));

function addUI(data) {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.className =
      "bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300";
    div.innerHTML = `
      <div class="w-full relative">
        <img
          src="${element.image}"
          alt="${element.title || ''}"
          class="w-full h-[250px] object-contain rounded-xl transition-transform duration-300 hover:scale-105"
        />
        <div class="absolute top-2 right-2 cursor-pointer">
      
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor"
               class="w-6 h-6 text-red-500 hover:scale-110 transition">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.74 
              0-3.243 1.004-4 2.48A4.494 4.494 0 009 3.75c-2.485 
              0-4.5 2.015-4.5 4.5 0 7.22 7.5 11.25 7.5 
              11.25S21 15.47 21 8.25z"/>
          </svg>
        </div>
      </div>
      
      <h3 class="text-blue-600 text-lg font-bold mt-3">
        ${element.price.toLocaleString()} so'm
      </h3>
      
      <span class="inline-block bg-yellow-300 px-2 py-1 text-xs mt-2 rounded">
        ${element.month.toLocaleString()} so'm/oyiga
      </span>
      
      <p class="text-gray-600 text-sm mt-2">
        ${element.description.slice(0, 50) + "..."}
      </p>
      
      <div class="flex items-center gap-1 my-2">
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FACC15" viewBox="0 0 24 24"
             stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 
            5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.192 
            3.602a.563.563 0 00-.182.557l1.257 
            5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 
            00-.586 0L6.933 20.54a.562.562 0 
            01-.84-.61l1.257-5.386a.563.563 0 
            00-.182-.557l-4.192-3.602a.563.563 0 
            01.321-.988l5.518-.442a.563.563 0 
            00.475-.345L11.48 3.5z" />
        </svg>
        <p class="text-sm">${element.rate}</p>
      </div>
      
      <button
        id=${element.id}
        class="shop w-full mt-3 h-10 rounded-xl bg-purple-600 text-white font-semibold transition duration-300 hover:bg-purple-700 hover:scale-105"
      >
        Savatga
      </button>
    `;
    card.append(div);
  });

  
  let btns = document.querySelectorAll(".shop");
  btns.forEach((value) => {
    value.addEventListener("click", (e) => {
      let product = data.find((item) => item.id === e.target.id);
      if (shop.find((value) => value.id === e.target.id)) {
        return;
      }
      shop = [...shop, product];
      localStorage.setItem("shop", JSON.stringify(shop));
    });
  });
}

    
 
function addUiShop(data) {
  data.forEach((value) => {
    let div = document.createElement("div");
    div.className =
      "rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6";
    div.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        
        <a href="#" class="w-20 shrink-0">
          <img class="h-20 w-20 object-contain" src="${value.image}" alt="${value.title || 'image'}" />
        </a>
        
       
        <div class="flex-1">
          <p class="text-base font-medium text-gray-900 dark:text-white">
            ${value.title}
          </p>
        </div>
        
       
        <div class="text-end font-bold text-gray-900 dark:text-white">
          ${value.price.toLocaleString()} so'm
        </div>
        
       
        <div class="flex items-center gap-4">
          <button class="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.74 
                0-3.243 1.004-4 2.48A4.494 4.494 0 
                009 3.75c-2.485 0-4.5 2.015-4.5 
                4.5 0 7.22 7.5 11.25 7.5 
                11.25S21 15.47 21 8.25z"/>
            </svg>
            Sevimlilarga
          </button>
          
          <button class="flex items-center text-sm text-blue-600 hover:underline dark:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            O‘chirish
          </button>
        </div>
      </div>
    `;
    shop_cart.append(div);
  });
}

addUiShop(shop);

