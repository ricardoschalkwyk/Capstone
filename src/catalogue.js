$(document).ready(function () {
  const $tbody = $("#tbody");
  products.forEach(function (product, index) {
    let $tr = $(document.createElement("tr"));

    let $th = $(document.createElement("th"));
    $th.text(product.brand);

    let $td1 = $(document.createElement("td"));
    let $h1 = $(document.createElement("h1"));
    $h1.text(product.name);

    let $a1 = $(document.createElement("a"));
    $a1.attr("class", "btn btn primary");
    $a1.attr("href", "/product.html?name=" + product.name);
    $a1.text("More Info");

    let $button = $(document.createElement("button"));
    $button.attr("class", "btn-cart btn primary");
    $button.text("Add to cart");

    $($button).click(function () {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let result = 0;

      // find product object or returns undefined
      let productItem = cart.find(function (item) {
        return item.name === product.name;
      });

      // finds product object index in cart [array]
      let productIndex = cart.findIndex(function (item) {
        return item.name === product.name;
      });

      if (productItem) {
        product.qty = productItem.qty + 1;
        cart[productIndex] = product;
      } else {
        product.qty = 1;
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // Cart Items = cart
      cart.forEach((item) => {
        result += item.price * item.qty;
      });

      alert(
        product.name + " added to cart, your total is " + formatCurrency(result)
      );
    });
    let $price = $(document.createElement("p"));
    $price.text(formatCurrency(product.price));

    let $td2 = $(document.createElement("td"));
    let $div = $(document.createElement("div"));
    $div.attr("class", "zoom");

    let $a3 = $(document.createElement("a"));
    let $img = $(document.createElement("img"));
    $img.attr("src", product.image);

    // appending elements
    $tbody.append($tr);
    $tr.append($th);

    // td1
    $tr.append($td1);
    $td1.append($h1);
    $td1.append($price);
    $td1.append($a1);
    $td1.append($button);

    // td2
    $tr.append($td2);
    $td2.append($div);
    $div.append($a3);
    $div.append($img);
  });
});

function formatCurrency(value) {
  let formatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });
  return formatter.format(value);
}
