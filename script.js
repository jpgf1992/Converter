const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrencies = document.getElementById("currency");
const result = document.getElementById("result");

let valueConverter = 0;

function handleSubmit(event) {
  event.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("Informe um valor correto");
    return;
  } else if (!selectedCurrencies.value) {
    alert("Escolha uma moeda");
    return;
  }

  converte();
}

function converte() {
  if (selectedCurrencies.value === "eur") {
    valueConverter = inputValue.value * 6.22;
    result.innerHTML = formatNumber("pt-BR", "EUR");
  } else if (selectedCurrencies.value === "dol") {
    valueConverter = inputValue.value * 5.37;
    result.innerHTML = formatNumber("en-US", "USD");
  }
  animateResult();
  inputValue.value = "";
  selectedCurrencies.value = "";
}

function formatNumber(Locale, currency) {
  const value = valueConverter.toLocaleString(`${Locale}`, {
    style: "currency",
    currency: `${currency}`
  });
  return value;
};

function animateResult()
{
    return result.animate([{
        transform: `translateY(-150px)`},
        {transform: `translateY(0px)`
    }

    ],{ duration:500})
};