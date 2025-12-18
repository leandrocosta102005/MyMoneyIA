// Script para criar usuário mocado no localStorage
const mockUser = {
  id: "mock-user-123",
  nome: "João Silva",
  email: "teste@exemplo.com",
  senha: "123456",
  telefone: "(11) 98765-4321",
  plano_atual: "premium",
  created_at: new Date().toISOString()
};

console.log("=== CONTA MOCADA CRIADA ===");
console.log("Email: teste@exemplo.com");
console.log("Senha: 123456");
console.log("========================");
console.log("\nPara usar esta conta:");
console.log("1. Acesse a página de login");
console.log("2. Use as credenciais acima");
console.log("3. Explore o app completo!");
