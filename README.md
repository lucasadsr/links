# Links Manager 📱

Um aplicativo mobile desenvolvido em React Native para organizar e gerenciar seus links favoritos de forma categorizadas e intuitiva.

## 📋 Descrição

O Links Manager é uma aplicação que permite aos usuários salvar, organizar e acessar rapidamente seus links favoritos através de categorias personalizadas. Com uma interface limpa e moderna, o app facilita o gerenciamento de recursos importantes como projetos, sites, vídeos, artigos, cursos e documentos.

## 🚀 Funcionalidades

- ✅ **Adicionar Links**: Salve seus links favoritos com nome, URL e categoria
- ✅ **Categorização**: Organize links em categorias predefinidas (Projeto, Site, Vídeo, Artigo, Curso, Documento)
- ✅ **Filtros por Categoria**: Visualize links específicos por categoria
- ✅ **Gerenciamento**: Visualize detalhes e remova links quando necessário
- ✅ **Interface Intuitiva**: Design moderno com tema escuro
- ✅ **Persistência Local**: Dados salvos localmente no dispositivo
- ✅ **Navegação Fluida**: Navegação otimizada com Expo Router

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React Native** (0.79.5) - Framework para desenvolvimento mobile
- **React** (19.0.0) - Biblioteca para construção de interfaces
- **TypeScript** (5.8.3) - Superset do JavaScript com tipagem estática
- **Expo** (53.0.20) - Plataforma para desenvolvimento React Native

### Navegação e Roteamento

- **Expo Router** (5.1.4) - Sistema de roteamento baseado em arquivos
- **React Navigation** (7.1.6) - Biblioteca de navegação

### Armazenamento

- **AsyncStorage** (2.2.0) - Armazenamento local assíncrono

### UI/UX

- **Expo Vector Icons** (14.1.0) - Biblioteca de ícones
- **React Native Reanimated** (3.17.4) - Animações performáticas
- **Safe Area Context** (5.4.0) - Gerenciamento de áreas seguras

### Desenvolvimento

- **Jest** (29.2.1) - Framework de testes
- **Babel** (7.25.2) - Transpilador JavaScript

## 📁 Arquitetura do Projeto

```
src/
├── @types/           # Definições de tipos TypeScript
├── app/              # Telas da aplicação (Expo Router)
├── components/       # Componentes reutilizáveis
├── storage/          # Camada de persistência de dados
├── styles/           # Estilos globais e temas
└── utils/            # Utilitários e helpers
```

### Padrões de Arquitetura

- **Component-Based Architecture**: Componentes modulares e reutilizáveis
- **Typed Development**: Uso extensivo do TypeScript para type safety
- **Local Storage Pattern**: Gerenciamento de estado local com AsyncStorage
- **File-based Routing**: Roteamento automático baseado na estrutura de pastas

## 🎨 Design System

- **Tema**: Dark mode como padrão
- **Cores**: Paleta de cores consistente definida em `styles/colors.ts`
- **Componentes**: Sistema de componentes modulares (Button, Input, Categories, etc.)
- **Tipografia**: Tipografia consistente e acessível

## 📱 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para Android) ou Xcode (para iOS)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/lucasadsr/links.git
cd links
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**

```bash
# Iniciar o servidor de desenvolvimento
npm start
# ou
yarn start

# Para executar em plataformas específicas
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

### Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento Expo
- `npm run android`: Executa no emulador/dispositivo Android
- `npm run ios`: Executa no simulador/dispositivo iOS
- `npm run web`: Executa no navegador web
- `npm test`: Executa os testes automatizados

## 📂 Estrutura de Componentes

### Componentes Principais

- **Button**: Componente de botão customizável
- **Input**: Campo de entrada com validação
- **Categories**: Lista de categorias com filtros
- **Link**: Card para exibição de links
- **Option**: Componente para opções de menu

### Gerenciamento de Estado

- **Local State**: useState e useEffect para estados locais
- **Storage**: AsyncStorage para persistência de dados
- **Navigation**: Expo Router para navegação entre telas

## 🧪 Testes

O projeto utiliza Jest para testes automatizados:

```bash
npm test
```

## 👨‍💻 Autor

**Lucas Ribeiro**

- GitHub: [@lucasadsr](https://github.com/lucasadsr)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
