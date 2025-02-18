# Rüştü'nün Alkol Takipçisi - Kıbrıslı Türkler için Alkol Tüketim Uygulaması (PWA)

## Proje Açıklaması

"Rüştü'nün Alkol Takipçisi", Kıbrıslı Türk kullanıcılar için geliştirilmiş, alkol tüketimini takip etmelerine yardımcı olan bir Progressive Web App (PWA) uygulamasıdır. Kullanıcı dostu arayüzü ve görsel tasarımı ile modern tüketici psikolojisi dikkate alınarak hazırlanmıştır. Uygulama, kullanıcıların günlük alkol tüketimlerini kolayca kaydetmelerini, Dünya Sağlık Örgütü (WHO) limitlerini aşmaları durumunda uyarılmalarını ve tüketim alışkanlıklarını grafikler üzerinden takip etmelerini sağlar.

## Özellikler

*   **PWA Desteği:** Uygulama, PWA olarak geliştirilmiştir. Kullanıcılar isterlerse cep telefonlarına uygulamayı kurabilir ve çevrimdışı olarak kullanabilirler.
*   **Görsel Arayüz:** Modern ve stilistik bir tasarıma sahiptir. Kullanıcıların uygulamayı tercih etmeleri için çekici bir arayüz ve fontlar kullanılmıştır.
*   **Popüler İçecekler:** Kıbrıs'ta en popüler alkol çeşitleri (Bira, Viski, Rakı, Zivania, Şarap, Cin, Votka) arayüzde görsel olarak sunulmaktadır.
*   **Günlük Tüketim Takibi:** Kullanıcılar tarih seçerek (default olarak bugünün tarihi gelir) tükettikleri içki türlerini ve miktarlarını kolayca ekleyebilirler.
*   **Gerçek Zamanlı Alkol Miktarı Hesaplama:** Kullanıcı içki ekledikçe toplam alkol miktarı otomatik olarak hesaplanır ve arayüzde canlı olarak güncellenir.
*   **WHO Limit Uyarısı:** Toplam alkol miktarı Dünya Sağlık Örgütü'nün günlük limitini aştığında kullanıcı görsel olarak uyarılır.
*   **Tüketim Grafikleri:** Kullanıcılar, son 1 ay, son 3 ay ve son 1 yıl olmak üzere farklı zaman dilimlerindeki tüketimlerini bar grafikler üzerinde görebilirler. Grafik üzerinde WHO günlük limit çizgisi de bulunmaktadır.
*   **Veri Kaydetme ve Düzenleme:** Kullanıcılar günlük tüketim verilerini kaydedebilir, eski tarihli kayıtları değiştirebilir, silebilir veya yeni kayıtlar ekleyebilirler. Veriler tarayıcıLocal Storage'a kaydedilir.
*   **İnteraktif Tasarım:** İçecek seçimi ve silme işlemlerinde animasyonlar ve görsel geri bildirimler bulunmaktadır.
*   **Alkol Oranı Silüetleri:** İçecek görsellerinin altında yaklaşık alkol oranları silüet şeklinde belirtilmiştir.

## Kullanılan Teknolojiler

*   **HTML:** Arayüz yapısı ve içeriği
*   **CSS:** Stil ve görsel tasarım (modern ve kullanıcı odaklı)
*   **JavaScript:** Uygulama mantığı, etkileşimler, veri saklama ve grafik çizimi
*   **Chart.js:** Tüketim grafiklerini oluşturmak için kullanılan JavaScript kütüphanesi
*   **PWA Manifest ve Service Worker:** Uygulamanın PWA özelliklerini (kurulum, çevrimdışı çalışma vb.) sağlamak için

## Kurulum ve Çalıştırma

1.  **Dosyaları İndirin:** Bu GitHub deposundaki tüm dosyaları ( `index.html` , `manifest.json` , `service-worker.js` , `images` klasörü ve içindeki görseller) bilgisayarınıza indirin.
2.  **Web Sunucusuna Yükleyin (Opsiyonel):** Uygulamayı bir web sunucusuna (örneğin Vercel, Netlify, GitHub Pages vb.) yükleyerek internet üzerinden erişilebilir hale getirebilirsiniz. Veya dosyaları doğrudan tarayıcınızda açarak yerel olarak çalıştırabilirsiniz.
3.  **Tarayıcıda Açın:** İndirdiğiniz `index.html` dosyasını bir web tarayıcısında açın.
4.  **PWA Olarak Kurun (Opsiyonel):** Uygulamayı PWA olarak kullanmak için tarayıcınızın adres çubuğunda çıkan "Kur" veya "Ekle" butonuna tıklayarak cihazınıza kurabilirsiniz.

## Klasör Yapısı
![image](https://github.com/user-attachments/assets/1349aea0-8afc-437a-85a0-baa4f3a56f58)


*   `index.html`: Uygulamanın ana HTML dosyası (arayüz, stil ve JavaScript kodlarını içerir).
*   `manifest.json`: PWA manifest dosyası (uygulama meta verileri, ikonlar vb.).
*   `service-worker.js`: PWA service worker dosyası (cache mekanizması, çevrimdışı destek vb.).
*   `icon.png`, `icon-512x512.png`: Uygulama ikonları.
*   `images/`: İçecek görsellerini içeren klasör.

## Katkıda Bulunma

Projenin geliştirilmesine katkıda bulunmak isterseniz, aşağıdaki adımları izleyebilirsiniz:

1.  **Fork Edin:** Bu depoyu kendi GitHub hesabınıza fork edin.
2.  **Branch Oluşturun:** Kendi branch'inizde değişikliklerinizi yapın ( `git checkout -b feature/yeni-ozellik` ).
3.  **Değişiklikleri İşleyin:** Değişikliklerinizi commit edin ( `git commit -m 'Yeni özellik eklendi'` ).
4.  **Push Edin:** Branch'inizi GitHub'a push edin ( `git push origin feature/yeni-ozellik` ).
5.  **Pull Request Açın:** Bu depoya bir pull request açarak değişikliklerinizi gönderin.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## İletişim

Rüştü YÜCEL - rustuyucel@email.com

---

**Sağlıklı ve bilinçli tüketimler dileriz!**
