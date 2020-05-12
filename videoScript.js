 function insertAfter(el, referenceNode) {
     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
 }

 var newEl = document.createElement('div');
 newEl.innerHTML = '<a id="TTE-f13de5f4-2e6d-4b22-8bcb-26b79350466c" href="https://10to8.com/book/qwbdseokgmtjahpbtm/" target="_blank">See Online Booking Page</a> <script src="https://d3saea0ftg7bjt.cloudfront.net/embed/js/embed.min.js"></script> <script> window.TTE.init({ targetDivId: "TTE-f13de5f4-2e6d-4b22-8bcb-26b79350466c", uuid: "f13de5f4-2e6d-4b22-8bcb-26b79350466c", }); </script>';

var element = document.getElementById("shopify-section-product-template");

 //If it isn't "undefined" and it isn't "null", then it exists.
 if(typeof(element) != 'undefined' && element != null){
     var ref = document.querySelector('div.shopify-payment-button');
     insertAfter(newEl, ref);
 } else{
     
 }
