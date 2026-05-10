



# 🔐 Password Generator (React)

<img width="1400" height="720" alt="Recording 2026-05-10 at 03 17 32(2)" src="https://github.com/user-attachments/assets/c89584ed-dc8d-459c-98ca-3dd8f8824a1d" />


Um gerador de senhas dinâmico e seguro desenvolvido em React. O projeto utiliza hooks como `useState` e `useEffect` para gerar senhas personalizadas instantaneamente conforme o usuário interage com os controles.

## 🚀 Funcionalidades

- **Ajuste de Comprimento:** Escolha senhas de 4 a 64 caracteres.
- **Dígitos Personalizados:** Controle a quantidade mínima de números na senha.
- **Símbolos Personalizados:** Controle a quantidade de caracteres especiais.
- **Atualização em Tempo Real:** Graças ao `useEffect`, a senha é regenerada automaticamente sempre que um parâmetro muda.
- **Cópia Rápida:** Botão para copiar a senha gerada para a área de transferência.

## 🛠️ Tecnologias Utilizadas

*   [React.js](https://reactjs.org/)
*   [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
*   [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
*   [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) (Para funcionalidade de cópia)

## 🧠 Aprendizados Técnicos

O foco principal deste projeto foi praticar o ciclo de vida de componentes React:
- **useEffect:** Utilizado para monitorar as dependências `[passwordLength, digitLength, simbLength]`. Toda vez que o usuário move um slider, o hook dispara a lógica de geração.
- **Hooks de Estado:** Gerenciamento fluido de múltiplos estados numéricos e strings.
- **Lógica de Strings:** Manipulação de arrays e métodos como `sort(() => Math.random() - 0.5)` para garantir a aleatoriedade dos caracteres.

