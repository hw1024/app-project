$(function () {
    var faqStr = 'How long does the service process take How long is the warranty period of the refurbished replacement within 48 business hours. Refunds will be sent to the card-issuing bank within five business days of receipt of the returned item. Please contact the card-issuing bank with questions about when the credit will be posted We are confident with our refurbished replacements, and we cover it for 120 days, excludes accidental -How soon will I get my replacement? We usually ship your replacement within two business days, and you should expect it with in the nextthreebusiness days. -How do I know that my AirPods has a faulty battery?If you feel the battery is not as long-lasting as it was before, you battery is probably worn out. -Are refurbished replacements the same as my current AirPods?There are the same, but even better. Our replacements are refurbished by trusted experts who use genuineparts. The replacements you receive are equivalent to new products in performance and reliability You should receive your replacement within 5 business days and we expect to finalize your service request within 2 business days once we received your returned product.  damages and unauthorized modifications.  -When will the replacement deposit be refunded?  We will inspect and diagnose your returned product once we receive it, and finalize your service order to your account What will happen to the faulty AirPods I returned? Our trusted experts will repair, reuse and recycle every part of the products you returned to us What if I am not happy with my replacement? Please reach out to us and we will try our best to fulfill your request';
    var contactStr = 'Service Help Shipping After Repair Delivery InstantPods How it works Contact FAQs Local Customer Us 92 Corporate Park, C388 Irvine, CA 92606 Hours: MF 10am-5pm PST';
    var faqCurStr = faqStr.replace(/\s/g, '');
    var contactCurStr = contactStr.replace(/\s/g, '');
    $(document).delegate('#search-btn', "click", function () {
        var searchNameStr = $("#searchName").val().replace(/\s/g, '');
        if (searchNameStr != "") {
            if(faqCurStr.indexOf(searchNameStr)>=0){
                window.location.href = 'faq.html';
                window.event.returnValue = false;
                $(".toggle-btn").click();
            }else if (contactCurStr.indexOf(searchNameStr)>=0) {
                window.location.href = 'index.html?#contact';
                window.event.returnValue = false;
                $(".toggle-btn").click();
            } else {
                return false;
            }
        } else {
            return false;
        }
    })
})
