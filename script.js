// =================================
// PRODUCT CONTACT BUTTON
// =================================

function showProductMessage(productName) {

    alert(
        "Thank you for your interest in " +
        productName +
        "!\n\nOur team will contact you shortly."
    );

}


// =================================
// MAIN CONTACT BUTTON
// =================================

const mainContactButton =
    document.getElementById("mainContactButton");


mainContactButton.addEventListener("click", function () {

    alert(
        "Thank you for contacting NovaStore!\n\n" +
        "Our team will get back to you soon."
    );

});

