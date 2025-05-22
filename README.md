# Monitoramento de Preços

## Sobre

Este projeto é uma aplicação React para monitoramento de preços de produtos, consumindo dados de uma API pública.  
Ele permite buscar produtos, visualizar detalhes, acompanhar o histórico de preços em um gráfico moderno e exibe alertas quando há variações significativas.

O design é moderno, responsivo e focado em uma ótima experiência para o usuário.

---

## Tecnologias

- React.js
- Recharts (para gráficos)
- Fetch API
- CSS-in-JS (estilos inline)
- API pública: [Fake Store API](https://fakestoreapi.com/)

---

## Funcionalidades

- Busca em tempo real por produtos pelo nome
- Listagem com imagens, títulos e preços formatados
- Visualização detalhada do produto selecionado
- Gráfico de linha mostrando variação simulada do preço nos últimos 7 dias
- Alerta visual para variações maiores que 15% no preço
- Layout moderno, com cores e efeitos visuais agradáveis

---

## Instalação

1. Clone o repositório

```bash
git clone https://github.com/seuusuario/monitoramento-precos.git
cd monitoramento-precos

Instale as dependências

bash
Copiar
Editar
npm install
Execute o projeto

bash
Copiar
Editar
npm start
Abra http://localhost:3000 para ver no navegador.

Estrutura do Projeto
bash
Copiar
Editar
/src
  ├─ App.jsx          # Componente principal
  ├─ SearchBar.jsx    # Campo de busca
  ├─ ProductList.jsx  # Lista de produtos
  ├─ PriceChart.jsx   # Componente do gráfico de preços
  ├─ PriceAlert.jsx   # Alerta de variação de preço
Como usar
Digite no campo de busca para filtrar produtos

Clique em um produto para ver detalhes e histórico de preços

Observe o gráfico para variações nos últimos dias

Se o preço variar mais de 15%, um alerta aparece

Customização
As cores e fontes estão definidas inline, mas podem ser facilmente migradas para CSS ou Styled Components

A função de geração de histórico simula dados para demonstração, pode ser substituída por dados reais

A API usada é pública e gratuita, pode ser trocada por outra API conforme necessidade

Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usar e modificar!

Contato
Para dúvidas, sugestões ou melhorias, entre em contato:

Rodolfo Vasconcellos de Souza

Email: rodolfovasconcellos88@gmail.com

LinkedIn: linkedin.com/in/rodolfosouza88

css
Copiar
Editar
```
