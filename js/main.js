/* ==========================================================================
   7 Formas de Ter o Cabelo Perfeito — scripts da landing page
   ========================================================================== */

// Link de checkout da Kiwify. Edite apenas aqui: ele vale para todos os botões da página.
const KIWIFY_LINK = "https://pay.kiwify.com.br/kIpQPAc";

document.querySelectorAll(".js-kiwify").forEach((botao) => {
  botao.href = KIWIFY_LINK;
});

// Mantém o ano do rodapé sempre atualizado.
document.querySelectorAll(".js-ano").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
