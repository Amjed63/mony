// فتح الـ Modal مع إعداد الروابط
function openModal(cardId) {
    // الحصول على بيانات البطاقة
    const card = document.getElementById(cardId);
    const imgSrc = card.querySelector('img').src; // مسار الصورة الكامل
    const imgFileName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1); // اسم ملف الصورة فقط
    const title = card.querySelector('.card-title').innerText; // عنوان الكارد
    const text = card.querySelector('.card-text').innerText; // نص الكارد

    // صياغة الرسالة
    const message = `مرحبًا، أرغب في حجز هذا العنصر:\n\nالعنوان: ${title}\nالوصف: ${text}\n\nاسم الصورة: ${imgFileName}`;

    // إعداد الروابط
    document.getElementById('whatsapp-link').href = `https://wa.me/+967770833307?text=${encodeURIComponent(message)}`;
    document.getElementById('facebook-link').href = `https://www.facebook.com/AlShohaiter`;
    document.getElementById('instagram-link').href = `https://www.instagram.com/seham_alhomaidi/`;
    document.getElementById('call-link').href = `tel:+967770833307`;

    // عرض الـ Modal
    document.getElementById('myModal').style.display = 'flex';
  }

  // إغلاق الـ Modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }