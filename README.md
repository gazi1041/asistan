# Gazi Özdemir Okul Takip Sistemi

Bu klasör uygulamanın GitHub Pages sürümüdür. Giriş dosyası doğrudan `index.html` dosyasıdır. Sunucu kurulumu, npm veya derleme gerekmez.

## GitHub'da açmak için

1. Bu klasörün **içindeki bütün dosyaları ve klasörleri** GitHub deponuzun köküne yükleyin. Deponun ana ekranında `index.html`, `app.js`, `style.css` ve `assets/` görünmeli. Bunları ayrıca `sunucu/` veya `public/` altına koymayın.
2. Deponuzda **Settings → Pages → Build and deployment → Source → GitHub Actions** seçin. `.github/workflows/pages.yml` dosyasını da yüklemiş olmalısınız. Mac'te gizli dosyaları görmek için Cmd+Shift+. kullanabilirsiniz.
3. **Actions → Öğretmen Platformunu Yayınla → Run workflow** ile yayını başlatın. Yayın tamamlanınca **Settings → Pages → Visit site** düğmesiyle uygulamayı açın. Sonraki `main` veya `master` güncellemelerinde otomatik yayınlanır.

`.github` klasörünü yükleyemiyorsanız alternatif: Settings → Pages → Source: **Deploy from a branch**, Branch: **main**, Folder: **/(root)**, Save. `index.html` yine depo kökünde olmalıdır. Bu yöntemde Actions kaydındaki özel workflow'u kullanmanız gerekmez.

Site adresi genellikle `https://KULLANICI.github.io/DEPO/` biçimindedir. Depo adı `KULLANICI.github.io` ise kök adresten açılır. Dosyalar iki kullanımda da göreli adreslerle yüklenir.

## Bu sürümde çalışanlar

- Öğrenci ekleme, arama, düzenleme ve takip notları.
- Not, dosya ve yıllık plan bağlantıları.
- TEKNOFEST ve TÜBİTAK menüleri.
- TEKNOFEST için ayrıntılı form, takım bilgileri, düzenlenebilir sunum metinleri, takvim ve SWOT.
- Yüklediğiniz 2025 Eğitim Teknolojileri şablonuyla PDF önizleme ve indirme.
- Taslak kaydetme ve düzenlenebilir JSON yedeği alma/içe aktarma.

TÜBİTAK alanında belgeler ve temel yazı taslağı vardır; ayrıntılı TÜBİTAK PDF akışı henüz bulunmaz.

Öğrenciler ve taslaklar tarayıcıda saklanır. GitHub deposuna veya başka cihazlara aktarılmaz. Adres ya da tarayıcı değiştirirken taslak yedeğini kullanın. Uygulama kaynaklarına gerçek öğrenci bilgileri veya API anahtarı eklemeyin.

## Gemini hakkında

GitHub Pages sunucu kodu çalıştırmaz. API anahtarını HTML/JavaScript içine koymak anahtarı ziyaretçilere açar. Bu nedenle bu sürümde Gemini düğmesi ayrı bir güvenli API sunucusu bağlanana kadar kapalıdır. Formlar, şablona yerleştirme ve PDF üretimi bundan bağımsız çalışır. Önceki Node.js/Gemini sürümü çalışma klasörünüzdeki `sunucu-onceki-surum-2026-10-26.zip` yedeğinde korunmuştur; bu yedeği GitHub Pages deposuna yüklemeyin.

Resmî GitHub Pages belgeleri: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
