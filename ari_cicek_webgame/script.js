var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");


var oyun_skor=0;
let arka_plan = new resim_yukle(canvas.width,canvas.height, "bg.jpg", 0, 0);
let ari = new resim_yukle(100, 100, "ari.png", 30, 70);
let cicek = new resim_yukle(120, 120, "cicek.png", 700, 290);

var devam=true;//mp3 dosyasının çalışması için

const skor_yazdir=(text) => {
    ctx.fillstyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("puanınız: "+text, canvas.width/2-100 , canvas.height/2-100);
}

function resim_yukle(genislik, yukseklik, kaynak, x, y) {
    this.resim = new Image();
    this.resim.src = kaynak;
    this.genislik = genislik;
    this.yukseklik = yukseklik;
    this.x = x; // x deki konum
    this.y = y; // y deki konum

    // Ekrana resmi koyar
    this.guncelle = function(){
        ctx.drawImage(this.resim, this.x, this.y, this.genislik, this.yukseklik); 
    }   
    // Soldan saga hareket
    this.hareket_x = function() {
        this.x -= 5;      
        if(cicek.x==100){
            // cicek sürekli gelecek 
            cicek.x=600;
        }
    }
    // Aşağıdan yukarı hareket
    this.hareket_y= function() {
        this.y += 5; 
    }
}
// Resimleri ekrana basar: her çalıştığında clear rect ile temizler
function yinele(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arka_plan.guncelle();

    //hareketler
    cicek.hareket_x();
    cicek.guncelle();
    ari.hareket_y();
    ari.guncelle();
}

function kurallar(){ 
    //kaybetme kosulları
    if(ari.y==430){
        window.alert("ARI DÜŞTÜ  :( \n OYUNU KAYBETTİNİZ\n PUANINIZ: "+oyun_skor+" \n tekrar oynamak için tıklayınız");
        window.location.reload(); // refesh ediyor yeni oyun baslıyor
    }
    //kazanma kosulu puanı artırılır, puan gösterilir
    if((ari.x>cicek.x) && (ari.y>cicek.y)
        &&(ari.x<(cicek.x+cicek.genislik-100)) && (ari.y<(cicek.y+cicek.yukseklik)) )
    {
        oyun_skor+=10;  // puan artırılır           
    }
    skor_yazdir(oyun_skor);
}
function oyun(){
    yinele();
    kurallar();
}
let ekran_yenileme = setInterval(oyun, 100);

function zipla() {
    ari.y-=40;
    ari.x+=30;
    if(devam){
        var melek=new Audio();
        melek.src="melek.mp3";
        melek.play();
        devam=false;
    }
}

function ari_don(){
    ari.x-=30;
    ari.y-=40;
    // 3-4-5 üçgeni : 30:40:50
}

function uyari(){
    window.alert(" Arı-çiçek oyununa hoşgeldiniz!\n Arının agız kısmını çiçegin orta noktasına denk getirdikçe polen toplayarak puan kazanılıyor!    \n LÜTFEN CİHAZINIZIN SESİNİ YÜKSELTİNİZ");
}
