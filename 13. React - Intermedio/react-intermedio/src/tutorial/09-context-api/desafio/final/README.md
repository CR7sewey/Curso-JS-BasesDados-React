## Passos

#### Ver Data

Ir a data.jsx e explorar os arrays

#### Criar Componentes

Create three components: Home, Modal, and Sidebar. Render them in App.jsx.

#### Global Context

Montar global context (com custom hook: «const useGlobalContext = () => useContext(AppContext);
)

#### Global State Values

Setar dois valores de estado, ambos booleans, isSidebarOpen e isModalOpen. Tambem, criar 4 funcoes para abrir e fechar o modal e sidebar. Meter todos os valores disponiveis
para a aplicacao (passar com value).

#### Home Componente

Na Home, criar dois buttons e ir buscar as duas funcoes do global context, openSidebar e openModal. Assim que o user clicar no button, invocar uma das funcoes (CSS para os buttons).

#### Modal e Sidebar Componente

Criar um componente Modal e Sidebar.

Flow:

- Configurar global context.

- Criar dois state values, ambos booleans, isSidebarOpen e isModalOpen. Tambem, criar 4 funcoes para abrir e fechar o modal e sidebar. Meter todos estes valores disponiveis
  para a aplicacao.

- Criar three componentes: Home, Modal, e Sidebar. Renderizar no App.jsx.

- Na Home, criar dois buttons e ir buscar as duas funcoes do global context, openSidebar and openModal. Assim que o utilizador clicar no button, invocar uma das funcoes (CSS)

```css
main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--grey-100);
}
.sidebar-toggle {
  position: fixed;
  top: 2rem;
  left: 3rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  transition: var(--transition);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/*
=============== 
Modal
===============
*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
}
/* OPEN/CLOSE MODAL */
.show-modal {
  opacity: 1;
  transition-property: opacity;
  transition-duration: 2s;
  visibility: visible;
  z-index: 10;
}
.modal-container {
  background: var(--white);
  border-radius: var(--borderRadius);
  width: 90vw;
  height: 30vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
}
.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--red-dark);
  cursor: pointer;
}

/*
=============== 
Sidebar
===============
*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(---red-dark);
  transition: var(--transition);
  transform: translate(-100%);
}
.show-sidebar {
  transform: translate(0);
}
@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}
.close-btn {
  font-size: 1.75rem;
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  cursor: pointer;
  color: var(--red-dark);
}

.logo {
  height: 40px;
}

.links a {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--grey-700);
  transition: var(--transition);
  letter-spacing: var(--letterSpacing);
}

.links a:hover {
  background: var(--grey-100);
  color: var(--grey-800);
}
.links a svg {
  font-size: 1.5rem;
  color: var(--grey-500);
  margin-right: 1rem;
  transition: var(--transition);
}
.links a:hover svg {
  color: var(--grey-600);
}
.social-links {
  justify-self: center;
  display: flex;
  padding-bottom: 2rem;
}
.social-links a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: var(--primary-500);
  transition: var(--transition);
}
.social-links a:hover {
  color: var(--primary-800);
}
```
