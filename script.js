function validarLogin() {
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value
  const mensagem = document.getElementById("mensagem")

  const emailCorreto = "gabriel.martins.desouza@hotmail.com"
  const senhaCorreta = "008856ga"

  if (email === emailCorreto && senha === senhaCorreta) {
    mensagem.textContent = "Login bem-sucedido!"
    mensagem.style.color = "black"
  } else {
    mensagem.textContent = "Senha incorreta!"
    mensagem.style.color = "red"
  }
}
