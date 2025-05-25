const lat = document.querySelector("#map").getAttribute("data-y");
const lng = document.querySelector("#map").getAttribute("data-x");

const map = L.map('map').setView([lat, lng], 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

const customIcon = L.divIcon({
    className: '', 
    html: `
<div class="absolute">
  <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank"
    class="flex items-center justify-center bg-white/50 w-[48px] h-[48px] after:absolute after:w-[22px] after:h-[22px] after:bg-white after:rounded-full rounded-full">
  </a>
</div>
`,
    iconSize: [48, 48],
    iconAnchor: [24, 24]
});

L.marker([lat, lng], { icon: customIcon }).addTo(map);
const openFormContact = document.querySelector("#openFormContact")
const showFormOncon = document.querySelector("#showForm")
openFormContact.addEventListener("click",()=>{
    showFormOncon.style.display = "flex"
    showFormOncon.style.opacity = "1"
})
