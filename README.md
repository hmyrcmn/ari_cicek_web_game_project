# ari_cicek_web_game_project
# web_game_project
HTML,CSS, JS Kullanılarak  basit arı-çiçek eşleşmesi temelinde oluşturulmuş web oyunudur.
# Web Oyun Projem-Arı Çiçek Oyunu
<br/>![oyundan görüntüler](https://miro.medium.com/max/1400/1*Qwg4HzGtX-n31VhMbT7rTg.png)<br/>
# PROJE GENEL ÖZET
HTML CSS JS(JAVASCRİPT) Kullanılarak, js içinde herhangi bir hazır kütüphane olmayan ,2 button ile canvas çerçevesiyle iletişim kurularak arı hareketi saplanmış ve çiçek ile eşleştirilerek puan artışı sağlandı , kullanıcı ile window. alert ile iletişim kuruldu, arının belirli seviyenin (y ekseni) altına düşmesi durumunda oyunun sonlandığı web tabanlı basit bir oyun tasarlanmıştır.
# PROJE KULLANIMI
**1.yol :** Proje dosyasını (arı__cicek_oyunu) indirdikten sonra index.html dosyasını bilgisayarınızdaki browser (seçtiğiniz: google -brave-edge …) aracılığı ile görüntüleyebilir ,gerekli talimatlar doğrultusunda oyunu oynayabilirsiniz.
**DİKKAT!!** Oyunu oynarken cihazınızın sesinin açık olduğundan emin olunuz.  **ARININ AĞIZ KISMINI ÇİÇEĞİN ORTA NOKTASINA DENK GETİRDİKÇE PUAN KAZANILMAKTADIR. "EYLENMEYİ UNUTMAYINIZ !! "**
<br/>**2.yol : [İletilen linke tıklamanız yeterli.](http://hmyrcmn.eu5.org/)**
# Proje geliştirilirken hangi teknolojilerden yararlanıldığı.

HTML ,CSS, JS Kullanılarak oluşturulmuştur. js içerisinde hazır kütüphane kullanılmamıştır. Canvas çerçevesi temelinde oyun oluşturulmuştur.
# PROJEYE OLASI EKLENECEKLER
oyunun hitap ettiği kitleyi daha da genişletmek adına seçim doğrultusunda kolaylaşıp zorlaşan ve oyun içindeki müziklerin bu doğrultuda özelleştirilmesi sağlama fikirleri mevcut olup ileriki süreçte değerlendirilecektir.
**Butonlar resimlerle desteklenebilir.**
**Arının dönmesi sağlanabilir (2* pi boyutunda ) .**
*Kullanıcı yorumları doğrultusunda ve gerekli değerlendirmeler sonrasında daha farklı eklemeler yapılabilir .
# PROJE GELİŞTİRİCİLERİ
Projeyi web tabanlı programlama dersi doğrultusunda tüm adımları bizzat kendim "Hümeyra ÇİMEN" tarafından geliştirmiştir.
Proje ödev kapsamındaki "özgünlük " ölçütü ile sıfırdan tasarlanmıştır. Kullanılan resimler hazırdır; resim koordinesi, düzenlenmesi yine kendim tarafından yapılmıştır.
# TERİMLERLE PROJEM VE GELİŞTİRME AŞAMALARIM

<br/>**HTML DOSYASI:** (index.html) 
**`<!DOCTYPE html>`** HTML5 ile seri grubu belirlenmiştir.
Oyun adı **"`<title></title>`"** etiketleri içine yerleştirilmiştir.
<br/>**`"head"`** bölümünde oyunda kontrolu sağlayan iki **"button"** biçimlendirilmistir.**(arkplan rengi ,boyutu,konumu)** bu alanda belirlendi.=>`"arı_style.css" `
<br/>![kod1](https://cdn-images-1.medium.com/max/1200/1*Zk9e_luUzNMbIds--iCDtg.png)<br/> sayfa yüklenince kullanıcıya sunulan alanda bir karşılama fonksiyonu yer almaktadır.<br/>
<br/>**Uyarı fonksiyonun içeriği :** Sayfanın yüklenmesi ile çalıştırılan bu fonksiyon alert penceresi ile oyuna hazırlık niteliğindedir. Mesajlar içerisinde cihaz sesinin açık olması hatırlatılmaktadır.
Oyun alanı için "canvas" dan yararlanılmıştır. "id" etiketi ile ve gerekli özellikleri verilmiştir.
Oyun penceresinde karakteri kontrol etmemizi dolayısı ile oyunu oynamayı sağlayan 2 adet "button" da body içerisinde yer almaktadır. Gerekli özellikleri css dosyası içerisinde özelleştirilmiştir.
js(javascript ) canvas penceresindeki oyunun tüm fonksiyonlarını barındırır.
<br/>![kod2](https://cdn-images-1.medium.com/max/1200/1*eX0BoB3hROxwZqu3EoRmyQ.png)<br/>canvas ıd ile js içerisinde yerini alması sağlanmıştır.<br/>
<br/>![kod3](https://cdn-images-1.medium.com/max/1200/1*P5xr47c7F_i-lUHuQDNr8Q.png)<br/> Oyunda üzerinden kontroller sağlanan değişkenler belirtilmiştir.<br/>
<br/>**drawImg():** NYP(Nesneye yönelik programlamadaki ) benzer constructer bloğu oluşturulmuş resim argümanların canvas üzerinde yerini almaları sağlanmıştır.Karakterlerin hareketi sabit tutulmak amacıyla burada fonksiyonlandırılmışlardır.
Belirli işlemler sonrasında canvas penceresinin temizlenmesi gerekiyordu aksi halde argumanların hareketleri iz bırakarak tekrarlanıyor görüntüyü bozuyordu bu durumun çözümü ;
<br/>**yenileme():`"clearRect" `** ile pencere sıfırlanır , drawImg ile arumanlar tekrar `ctx` üzerine sunulur. 
Oyunun yönetimi oyun adlı fonksiyon üzerinden yapılıyor . içerisinde yenileme(sıfırlama) işlemi ve oyun kullarını barındıran fonksiyonlarının düzenli aralıklar ile çağrılması mekanizmasına dayanır. 
Oyun komponentlerinin belirli ve sürekli hareketleri doğrultusunda oluşturdukları yeni durumların kontrolleri `"if"` blokları ile sağlanmış olup devam- kaybetme koşulları belirlenmiştir.
<br/>**Devam koşulu:** Çiçek ile arı komponentinin eşleşmesi sonucunda puan artımı .Oyunun temel halinde arı çiçek ilk eşleşmesinde oyun sonlanıyordu bu durum kazanma koşuluna denk gelmekteydi.
<br/>**Kaybetme koşulu:** Arının y kordinatinda belirli değerin üzerine çıkması.
 Alert penceresi ile oyun scorunun oyuncuya gösterilmesidir.
# OYUNUN GELİŞİM AŞAMALARI
<br/>**İlk denemem:** Arı.x (arının x kordinatını )cicek.x (çiçeğin y kordinatının) <br/>
**`if (arı.x==cicek.y | arı.y==cicek.y)`**
koşulunda oyunun tamamlanması prensibine bağlıydı , gerekli incelemeler sonucunda hata farkedildi .Bu koşul tam eşleşme sağlamıyor sadece düzlemsel eşleşme sağlıyor .
<br/>**İkinci Denemem:** Çiçeğin orta noktası belirlendi (x,y) (cicek.w/2,cicek.h/2) bu noktanın arının çerçevesinin içerisinde olma koşulu ile paun durumunun artırılması sağlandı ; fakat bu oyunun oynanma karmaşıklığını ve görsel açıdan eşleşme konumlarının (w,h ) farklılığı sebebiyle puan artışı fazla ve görsel açıdan uyumsuz konumlarda olma sorununu saptadı. Yeterli denemelerinin ardından kordinat uyumu için sabit sayılar eklendi çıkartıldı . 
<br/>**Son deneme:** İki dikdörtgen şeklinden birinin diğerinin içerisinde olma koşulunu düşündür ve ortaya ;<br/><br/>
**`if((arı.x>cicek.x) && (arı.y>cicek.y)&&(arı.x<(cicek.x+cicek.w-100))
&& (arı.y<(cicek.y+cicek.h)) )`** koşulu çıktı.
<br/>![taslak](https://cdn-images-1.medium.com/max/1200/1*b7Y5TDqSnE8Hh-1Lkz6qFQ.png)<br/><br/>Geliştirme aşamasında karar mekanizmasının hassaslaştırılması noktasında oluşturduğum algoritma için taslak.<br/>
<br/>**scor_yazdır() :** Fonksiyonu scoru ekranda sürekli göstermek için oluşturuldu **`setInterval `** ile belirli aralıklarla çağrılarak puanın kullanıcıya sürekliymiş gibi gösterilmesi sağlandı.
