$(document).ready(function () {
  let params = new URLSearchParams(window.location.search);
  let name = params.get("name");
  let product;

  console.log(name);

  for (let index = 0; index < products.length; index++) {
    const query = products[index];
    if (query.name === name) {
      product = query;
    }
  }

  console.log(product);

  $(".btn-cart").click(function () {
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

  document.title = product.name + " | Toplaps";

  let $head = $("#head");
  $head.text(product.name);

  let $th = $("#brand");
  $th.text(product.brand);

  let $h1 = $("#name");
  $h1.text(product.name);

  let $ul = $("#specs");
  for (let i = 0; i < product.specs.length; i++) {
    let $li = $(document.createElement("li"));
    const value = product.specs[i];
    $li.text(value);

    $ul.append($li);
  }

  let $span = $("#price");
  $span.text(formatCurrency(product.price));

  let $img = $("#image");
  $img.attr("src", product.image);
  $img.attr("alt", product.name);
});

function formatCurrency(value) {
  let formatter = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  });
  return formatter.format(value);
}
