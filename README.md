# Nexus-Tech | Next Gen 3D Interface

Nexus-Tech, WebGL 2.0, GSAP animasyonları ve yapay zeka estetiğini birleştiren, fütüristik ve sürükleyici bir web deneyimidir. Bu proje, standart bir web sitesinin ötesine geçerek, ziyaretçilere Cyberpunk 2077 evreninden fırlamış, yaşayan bir arayüz sunmayı hedefler.
Modern frontend teknolojilerinin (React 19, Tailwind v4, Shadcn/UI) sınırlarını zorlayan bu proje; 3D etkileşimler, gelişmiş kaydırma (scroll) animasyonları ve sinematik görselleştirme tekniklerini içerir.

## Ekran Görüntüsü
<img width="1917" height="926" alt="image" src="https://github.com/user-attachments/assets/f485b456-5c3a-441b-b5f4-c591b0c986a3" />

---
## Özellikler
- **Sürükleyici 3D Deneyimi:** Spline entegrasyonu ile oluşturulmuş, fare hareketlerine duyarlı interaktif 3D sahne.
- **Sinematik Animasyonlar:** GSAP (GreenSock) ve ScrollTrigger kullanılarak hazırlanmış, kaydırmaya bağlı akıcı geçişler ve "Pinning" efektleri.
- **Cyberpunk Estetiği:** Neon parlamalar, glitch efektleri, "Hacker" metin çözülme animasyonları ve CRT monitör tarama çizgileri.
- **Modern UI Kütüphanesi:** Shadcn/UI bileşenlerinin (Card, Badge, Progress, Separator) özel CSS değişkenleri ile siberpunk temasına uyarlanması.
- **Etkileşimli Bileşenler:**
- **Holo-Deck Slider:** Holografik efektli ürün/sistem kataloğu.
- **Mission Reveal:** Sayfa kaydırıldıkça genişleyen maskeleme (Masking) efekti.
- **Custom Cursor:** Site genelinde özel fare imleci ve takipçisi.
- **Tam Duyarlılık** (Responsive): Mobil ve masaüstü cihazlarda kusursuz çalışan, Tailwind CSS v4 ile optimize edilmiş tasarım.

---
## Kullanılan Teknolojiler

| Kategori      | Teknoloji                                                                                                                              | Açıklama                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Core**  | ![alt text](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                                    | Kullanıcı arayüzü ve bileşen mimarisi.                |
| **Build** | ![alt text](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                        | Hızlı geliştirme sunucusu ve derleme aracı.                   |
| **Stil**      | ![alt text](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)                           | Utility-first CSS framework (v4).  |
| **UI Kit**     |![alt text](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)   |  Erişilebilir ve özelleştirilebilir bileşen seti.                         |
| **Animasyon**   | ![alt text](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)                          | ScrollTrigger ve karmaşık zaman çizelgesi animasyonları.               |
| **3D**     | ![alt text](https://img.shields.io/badge/Spline-000000?style=for-the-badge&logo=spline&logoColor=white)                             | WebGL tabanlı hafif 3D sahneler. |
| **İkonlar**     | ![alt text](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)                             | Hafif ve tutarlı ikon seti. |
                                
---

## Kurulum ve Başlatma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/EnderKaran/Nexus-Tech.git](https://github.com/EnderKaran/Nexus-Tech.git)
    ```
2.  **Proje Dizinine Girin:**
    ```bash
    cd Nexus-Tech
    ```

3.  **Gerekli Paketleri Yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Bu komuttan sonra, projeniz varsayılan olarak `http://localhost:5173/` adresinde çalışmaya başlayacaktır.

---

## 📂 Proje Yapı

```
/
├── public/                 # Statik dosyalar
├── src/
│   ├── assets/             # Görseller (png, jpg)
│   ├── components/         # React Bileşenleri
│   │   ├── ui/             # Shadcn bileşenleri (Button, Card, Badge...)
│   │   ├── Hero.tsx        # 3D Sahne ve Giriş
│   │   ├── About.tsx       # İstatistikler ve Tanıtım (GSAP)
│   │   ├── Features.tsx    # Bento Grid Modüller
│   │   ├── Mission.tsx     # Scroll Pinning & Masking
│   │   ├── SystemPreview.tsx # Holografik Slider
│   │   ├── Contact.tsx     # Footer ve İletişim
│   │   ├── CustomCursor.tsx # Özel Mouse İmleci
│   │   └── HackerText.tsx  # Metin Çözülme Efekti
│   ├── App.tsx             # Ana Uygulama
│   ├── main.tsx            # Giriş Noktası
│   └── index.css           # Tailwind ve Global Stiller
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```
---

## 👤 İletişim

**[Ender Karan]**

- **GitHub:** `(https://github.com/EnderKaran)`
- **LinkedIn:** `(https://www.linkedin.com/in/ender-karan-52303b187)`

Proje ile ilgili herhangi bir soru veya geri bildirim için bana ulaşmaktan çekinmeyin!


