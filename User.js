class User {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  salvar() {
    // Lógica para salvar o usuário em algum lugar (por exemplo, banco de dados)
    console.log('Usuário salvo:', this);
  }
}

module.exports = User;
