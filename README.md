![image]()

# QUICK SERVICE
Sistema auxiliar de abertura de atendimentos.

## 📌 Introdução
Este projeto foi desenvolvido com o objetivo de facilitar e automatizar a abertura de chamados de clientes para a equipe do NOC da Brasil Digital. <br>

Antes, as informações de cadastro, como: 

- Login
- Senha
- Plano
- etc.

e informações de atendimento como: 

- Titular
- Fone
- Data do atendimento
- etc.

necessárias para se abrir um chamado, eram todas coletadas manualmente e adicionadas uma por uma em um bloco de notas, para no final serem copiadas e coladas para o sistema geral da empresa, realizando o processo de abertura de ticket. 

Com o Quick Service, a pesquisa dessas informações e o preenchimento dos campos são feitos automaticamente através de consultas via API apenas passando o contrato do cliente e protocolo do atendimento gerado pelo sistema. Assim, o processo de abertura de atendimento se torna mais rápido e menos complicado, impactando tanto na velocidade do atendimento, que gera mais satisfação para o cliente, quando na facilidade e praticidade no trabalho do atendente.

Ao serem consultadas e validas as informações através das requisições via API, os dados retornados são preenchidos automaticamente em seus devidos campos, gerando a estrutura inicial do atendimento. 

Ao final do preenchimento das informações, o sistema consta com a funcionalidade de gerar o atendimento, criando a estrutura do atendimento com todos os campos preenchidos de acordo com o template de atendimento fornecido pela supervisão da empresa sendo necessário apenas copiar as informações e, realizando o processo de abertura de ticket no sistema, colar o atendimento gerado com as informações já prontas.

Por se tratar de um sistema interno, com uso de dados sensíveis, o Quick Service consta com um sistema de autenticação de usuários via Active Directory, o que faz com que só seja possível utilizar na rede interna da empresa e com usuário autenticado e válido no domínio empresarial. 

### 💻 Tecnologias utilizadas:

- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) + ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) Webpack + Babel
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) HTML
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) Sass
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) JavaScript
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) Docker

### BACK-END

Confira o Back-end do projeto aqui: https://github.com/gabrieldickman/quick-service-backend
