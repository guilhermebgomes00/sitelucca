// link de checkout da Kiwify
const KIWIFY_LINK = "https://pay.kiwify.com.br/kIpQPAc";

document.querySelectorAll(".js-kiwify").forEach((botao) => {
  botao.href = KIWIFY_LINK;
});

document.querySelectorAll(".js-ano").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
