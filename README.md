ReactJs App-Sahibinden

https://devakademi.sahibinden.com/api/doc 'da verilen 2 servisi tüketerek bir front-end projesi yapmayı amaçladım.

Bu projeyi popüler teknolojilerden olan ReactJS'ile gerçekleştirdim.
İlk olarak React projesini kullanımıma uygun hale getirerek proje şablonumu oluşturdum.
Daha sonra servisten okuduğum verilerin 'AntDesign Pagination' kullanılarak kullanıcıya gösterilmesini sağladım.
Çok büyük veriler olduğu için tek seferde tabloya aktarmak veya benzeri çözümler performans kaybına
yol açar diye düşündüm ve bu yüzden Pagination kullandım.


İlk olarak Anasayfada "İlan başlıkları", "Ücret", "Şehir bilgileri"'ne göre kullanıcılara listeleme yaptım.
"Show" buttonu ile de bize sağlanan id'ye göre listeleme yapan servisi tüketerek daha detaylı bireysel ilan görüntüleme
işlemini gerçekleştirmeye çalıştım. Daha detaylı olarak arama, sıralama gibi işlemleri yapabilmek için Backend projesi
oluşturup farklı servisler de yazmayı düşündüm fakat zaman detayı bu düşüncemi sınırladı ve düzgün çalışan bir proje
sunabilmek için "unit testleri yazılmamış baştan savma bir backend projesi" yapmak istemedim. Biraz daha zamanım olsaydı
düzgün bir backend projesiyle bize verilen servis işlemlerini çeşitlendirebilirdim. Projeyle ilgili
düzenlemelerim devam ederken bir yandan HEROKU projesi oluşturdum. Projeme .gitlab-ci.yml dosyamı ekledim.
Api name ve Api key verilerini doldurarak Gitlab CI/CD aracılığıyla projemi çalışır bir şekilde HEROKU'ya deploy ettim.

Proje kodlarıma zamanım yettiğince açıklama satırları eklemeye çalıştım.

Projeyi local'de çalıştırmak için yarn start komutunu kullanabilirsiniz.
Buna gerek kalmadan deploy edilmiş, çalışan projeye ulaşmak için:

 http://devakademi19.herokuapp.com/ adresini ziyaret edebilirsiniz.

Böyle eğitici ve aynı zamanda keyifli bir organizasyonu sağladığı için tüm Sahibinden ailesine teşekkür ederim.

Ozan Aydın
ozanaydin.herokuapp.com

