# Portal visual CEUA CAFS-UFPI

Este diretorio contem um pequeno portal web estatico com leitura visual do sistema em varias camadas:

- visao geral do produto;
- fluxo operacional da CEUA;
- papeis do time de entrega;
- arquitetura e infraestrutura;
- MER conceitual do banco;
- requisitos funcionais e nao funcionais.
- leitura MVC da aplicacao;
- UML de casos de uso, sequencia e estados;
- DFD nivel 0 e 1 com escopo funcional.
- pagina sintese de arquitetura completa para apresentacao executiva.

## Como abrir

Opcao 1:

- abrir `index.html` diretamente no navegador.

Opcao 2:

- abrir o diretorio no `Live Server` do VS Code.

## Arquivos

- `index.html`: entrada do portal;
- `pages/*.html`: paginas tematicas;
- `assets/styles.css`: estilo visual compartilhado;
- `assets/workflow.js`: comportamento simples de filtro por ator.

## Base funcional usada

O conteudo foi consolidado a partir de:

- `10principais/02-escopo-produto-e-fluxo-operacional.md`;
- `10principais/04-backend-api-autenticacao-e-rbac.md`;
- `10principais/03-arquitetura-stack-e-monolito-modular.md`;
- `docs/34-srs-especificacao-requisitos-software.md`;
- `docs/33-dfd-diagramas-contexto-classes.md`;
- `ceua-ufpi-backend/app/services/protocolo_service.py`.
