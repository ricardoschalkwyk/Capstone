const products = [
  {
    brand: "Macbook",
    name: "Macbook Pro 15-inch",
    description:
      "This Macbook Pro 13-inch is perfect for those that want too compact qaulity and performance",
    specs: [
      "15-inch retina display",
      "8 core Cpu and Gpu",
      "Built-in 58.2-watt-hour lithium-polymer battery",
      "16 GB ram",
      "512 GB storage",
      "2 Thunderbolt/USB 4 ports",
    ],
    price: 15999,
    image: "/images/macbook-pro-15 inch.png",
    productPage: "/product1.html",
  },
  {
    brand: "Macbook",
    name: "Macbook pro 13-inch",
    description:
      "This Macbook Pro 13-inch is perfect for those that want too compact qaulity",
    specs: [
      "13-inch retina display",
      "8 core Cpu and Gpu",
      "Built-in 58.2-watt-hour lithium-polymer battery",
      "8GB ram",
      "256GB storage",
      "2 Thunderbolt/USB 4 ports",
    ],
    price: 24999,
    image: "/images/Macbook-pro-13 inch.png",
  },
  {
    brand: "Dell",
    name: "Dell Xps 15 7590 i7",
    description:
      "The Dell Xps 15 7590 i7 will do anything from editing too gaming",
    specs: [
      "15.6-inch,UltraSharp 4K UHD",
      "9th Gen Intel Core i7",
      "Nvidea Geforce GTX 1650 4GB",
      "32 GB ram",
      "512GB M.2 PCIe NVMe SSD",
      "2x USB3 1x HDMI 2.0",
    ],
    price: 24999,
    image: "/images/Dell Xps.png",
  },
  {
    brand: "Dell",
    name: "Dell Vostro 5510",
    description:
      "The Dell Vostro 5510 is a very recommended office machine with good qaulity and functionality",
    specs: [
      "5.6-inch FHD",
      "Intel Core i7-11370H",
      "Nvidea Geforce GTX 1650 4GB",
      "16GB RAM",
      "512GB SSD",
    ],
    price: 21399,
    image: "/images/Dell Vostro 3560.png",
  },
  {
    brand: "Lenovo",
    name: "Lenovo Thinkpad 13 Chromebook",
    description:
      "The lenovo thinkpad 13 chromebook is very well optimized for all your office needs",
    specs: [
      "13.3-inch Full HD Touch Display",
      "Intel Core i3 1115G4 Processor",
      "Intel UHD Graphics",
      "8GB RAM",
      "256GB SSD Storage",
    ],
    price: 12999,
    image: "/images/Lenovo-13-chromebook.png",
  },
];

localStorage.setItem("products", JSON.stringify(products));
