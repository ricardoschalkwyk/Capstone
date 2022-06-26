// This captone was a challenge and a half, Alot of different concepts were used and tested.
// I could not have done this without the guidance of my friend, I just can't wait too get into level 2.
// i hope the commenting and styling this time was beter than previous tasks.

// Constant variables related to the calculation
const VAT_PERCENTAGE = 0.15,
  SAME_DAY_DELIVERY = 100,
  NEXT_DAY_DELIVERY = 50,
  FREE_DELIVERY = 0,
  PROMO_PERCENTAGE = 0.05,
  RANDOM_NUMBER = 8000006;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let deliveryFee = 0,
  vatAmount = 0,
  promoAmount = 0,
  promoPercentage = 0;

// formats currency
function formatCurrency(value) {
  let formatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });
  return formatter.format(value);
}

$(document).ready(function () {
  const $tbody = $("#tbody");

  // Creating Tabble elements
  cart.forEach(function (product, index) {
    let $tr = $(document.createElement("tr")),
      $td1 = $(document.createElement("td")),
      $td2 = $(document.createElement("td")),
      $td3 = $(document.createElement("td")),
      $td4 = $(document.createElement("td")),
      $span = $(document.createElement("span"));

    let $img = $(document.createElement("img"));
    $img.attr("src", product.image);
    $img.attr("alt", product.name);

    let $h3 = $(document.createElement("h3"));
    $h3.text(product.name);

    // button
    let $p = $(document.createElement("p"));
    let $a1 = $(document.createElement("a"));
    $a1.attr("href", "/product.html?name=" + product.name);
    $a1.attr("class", "btn btn-primary");
    $a1.text("More info");

    let $button = $(document.createElement("button"));
    $button.attr("class", "btn btn-primary");
    $button.attr("id", "remove");
    $button.text("Remove from cart");

    $button.click(function () {
      cart.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cart));

      $tr.remove();

      calculateCartTotals();
    });

    //table body
    $tbody.append($tr);
    // <tr> 1
    // <td> 1
    $tr.append($td1);
    $td1.append($img);

    // <td> 2
    $tr.append($td2);
    $td2.append($h3);
    $td2.append($p);
    $p.append($a1);
    $p.append($button);

    // <td> 3
    // Qty
    $tr.append($td3);
    let $select = $(document.createElement("select"));
    $select.attr("id", "qty" + index);
    $td3.append($select);
    $td3.css("vertical-align", "middle");

    // Create [] with 10 items and use the numbers as keys
    let options = Array.from(Array(10).keys());

    // Loop through array and add <option> elements and set the appropriate values
    options.forEach(function (option, index) {
      let $option = $(document.createElement("option"));
      $option.val(index + 1);
      $option.text(index + 1);
      $select.append($option);
    });

    // Set the qty value on the <select> element
    $select.val(product.qty);

    // Change Total based on qty
    $("#qty" + index).change(function () {
      let value = Number(this.value);
      let qtyCalculate = product.price * value;
      // chanied EfEcT
      $span
        .fadeOut(200, function () {
          $span.text(formatCurrency(qtyCalculate));
        })
        .fadeIn(200);

      product.qty = value;
      cart[index] = product;

      localStorage.setItem("cart", JSON.stringify(cart));

      calculateCartTotals();
    });

    // <td> 4
    // total
    $span.text(formatCurrency(product.price * product.qty));
    $td4.css("vertical-align", "middle");
    $tr.append($td4);
    $td4.append($span);
  });

  // Sets and calculates all cart values
  calculateCartTotals();

  // hide/show time
  $("input[name=delivery]").change(function () {
    if (this.id === "delivery") {
      $("#deliveryOption").slideDown();
      deliveryFee = SAME_DAY_DELIVERY;
      calculateCartTotals();
    } else {
      $("#deliveryOption").slideUp();
      deliveryFee = FREE_DELIVERY;
      calculateCartTotals();
    }
  });

  $("input[name=time]").change(function () {
    if (this.id === "nextDay") {
      deliveryFee = NEXT_DAY_DELIVERY;
      calculateCartTotals();
    } else {
      deliveryFee = SAME_DAY_DELIVERY;
      calculateCartTotals();
    }
  });

  // Applies a promo code
  $("#apply").click(function () {
    if ($("#coupon").val() === "beans") {
      promoPercentage = PROMO_PERCENTAGE;
      calculateCartTotals();
      alert("Your discount has been applied.");
    }

    $("#coupon").val("");
  });

  // Confirms your order, clears cart/localStorage & reloads page
  $("#confirmed").click(function () {
    let value = Math.floor(Math.random() * RANDOM_NUMBER);

    localStorage.setItem("cart", "[]");
    cart = [];

    alert(
      "Your order has been confirmed and your order reference number is TL" +
        value
    );

    window.location.reload();
  });

  function calculateCartTotals() {
    let total = 0;

    cart.forEach(function (item) {
      total += item.price * item.qty;
    });

    // Vat
    // Calculate VAT
    vatAmount = total * VAT_PERCENTAGE;
    promoAmount = total * promoPercentage;
    total = total + vatAmount + deliveryFee - promoAmount;

    $("#vat").text(formatCurrency(vatAmount));
    $("#delivery-fee").text(formatCurrency(deliveryFee));
    $("#discount").text("-" + formatCurrency(promoAmount));
    $("#total").text(formatCurrency(total));
  }
});
