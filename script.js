document.getElementById('appointmentForm').addEventListener('submit', function(e) {

‎    e.preventDefault();

‎

‎    // یہاں اپنا WhatsApp نمبر درج کریں (ملک کے کوڈ کے ساتھ، بغیر + نشان کے)

‎    const whatsappNumber = "923132209346"; 

‎

‎    const name = document.getElementById('name').value;

‎    const phone = document.getElementById('phone').value;

‎    const service = document.getElementById('service').value;

‎    const message = document.getElementById('message').value;

‎

‎    // میسج تیار کریں

‎    const fullMessage = `السلام علیکم!%0A%0A*نیا روحانی علاج اپوائنٹمنٹ کی درخواست:*%0A%0A*نام:* ${name}%0A*فون:* ${phone}%0A*سروس:* ${service}%0A*مسئلہ:* ${message}`;

‎

‎    // WhatsApp پر ری ڈائریکٹ کریں

‎    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

‎    

‎    window.open(whatsappURL, '_blank');

‎});

‎