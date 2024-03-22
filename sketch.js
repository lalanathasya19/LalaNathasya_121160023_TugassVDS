let judul;
let nama;
let tombol;
let nim;
let hello;
function setup() {
  createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo semua')
 judul.position(30, 15)
 createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo, tuliskan Nama anda')
 judul.position(50, 90)
 nama = createInput()
 nama.position(70, 150)
 judul = createElement('h2', 'Halo, tuliskan NIM anda')
 judul.position(50, 170)
 nim = createInput()
 nim.position(70, 230)
 tombol = createButton('Masukkan')
 tombol.position(170,260)
 tombol.mousePressed(sayHello);
 createCanvas(windowWidth, windowHeight);
 
}
function draw() {

}
function sayHello() {
 hello1 = createElement('h2', 'Selamat datang ' + nama.value())
 hello2 = createElement('h2',  'NIM ' +  nim.value())
 hello1.position(60, 280)
 hello2.position(60, 310)
}