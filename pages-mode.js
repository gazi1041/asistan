// GitHub Pages sürümü: API anahtarı veya sunucu çağrısı içermez.
const pagesWizardRender=renderWizard;
renderWizard=function(){pagesWizardRender();const b=document.querySelector('#ai-generate');if(b){b.disabled=true;b.textContent='Gemini · API sunucusu gerekli';b.title='GitHub Pages yalnızca arayüzü yayımlar. Gemini için ayrı, güvenli bir API sunucusu bağlanmalıdır.'}const note=document.querySelector('#gemini-status');if(note)note.textContent='Şablona yerleştirme ve PDF indirme hazır. Gemini ile otomatik metin üretimi için ayrıca API sunucusu gerekir.'};
