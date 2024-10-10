export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  header: {
    text: "Checkout",
    items: "3 ITEMS",
  },
  produtos: {
    produto1: {
      nome: "iPhone 12 Pro",
      cor: "Golden",
      preco: "$999.00",
      quantidade: "x 1",
      img: "/images/Gold.png",
    },
    produto2: {
      nome: "Apple Watch",
      cor: "Blue",
      preco: "$399.00",
      quantidade: "x 1",
      img: "/images/Blue.png",
    },
    produto3: {
      nome: "iMac",
      cor: "Green",
      preco: "$1199.00",
      quantidade: "x 1",
      img: "/images/iMacFront1.png",
    },
  },
  total: {
    cupom: {
      inputText: "Enter coupon code",
      botaoText: "Apply Coupon",
    },
    subtotal: "Sub total",
    tax: "Tax",
    total: "Total",
    precos: {
      subtotal: "$2597.00",
      tax: "$623.28",
      total: "$3220.28",
    },
  },

  formulario: {
    titulo: "Contact Information",
    text: {
      input1: {
        label: "First & Last name",
        inputText: "Enter first & last name",
      },
      input2: {
        label: "Email Address",
        inputText: "Enter email address",
      },
    },
    inputsLocal: {
      input1: {
        label: "Country",
        inputText: "Finland",
      },
      input2: {
        label: "Postal Code",
        inputText: "00270",
      },
    },

    botao: "Continue",
  },
};
