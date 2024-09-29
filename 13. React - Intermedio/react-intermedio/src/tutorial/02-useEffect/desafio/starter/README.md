## Passos

#### Setup

Criar 3 componentes: Tours, Tour e Loading

#### Fetch Tours

A componente Tours vai ser responsável por renderizar a lista de Tour (componente).
Na App.jsx, voces vao fazer fetch da data do url (com a fetch API). Antes de a data
ser descarregada, voces devem mostrar um icon de loading (Loading component)

#### Render Tours

Assim que a data for descarregada, mudar oe stado do compoenete para armazenar a data (tours).
Nós podemos iterar sobre o array de tours (map) e renderizar um componente Tour para cada tour.
Em cada componente Tour voces cao receber a data como props (id, image, info, name, and price)

#### Remove Tour

Para implementar a funcionalidade de "remove tour", vocês podem adicionar um button para cada
componente Tour que, quando clicad, remove o tour da lista de tours. Podemos alcançar isto ao
fazer update do estado do Tours (componete) opara remover a tour do array de tours

#### Read More

Para implementar a funcionalidade de "read more", podemos adicionar um button a cada
componente Tour que quando clicado, expande a descrição da tour. Nós podemos alcançar isto
ao fazer update do estado do TOur (component) para fazer toggle (true <-> false), e condicionalmente
renderizar a descrição total baseado no read more.

#### Re-fetch Tours

Finalmente, podemos implementar um "re-fetch", ao adicionar um button ou outra
interface que qunaod clicada, vai re-renderizar a data tours do URL e faz update do estado
do componente Tours.

No geral, o flow da aplicacao deve ser algo como isto:

- App.jsx faz fetch da tours data do URL e altera o estado da componente Tours para armazenar a data.
- A componente Tours itera sobre o array tours e renderiza a componente TOur para cada tour .
- Cada componente Tour tem um button "remove tour" e um "read more". Quando o "remove tour, button
  é clicado, a componente TOurs faz update no estado para remover a tour do array tours.

- Quando o "read more" button é clicado, a compoente Tour faz update do estado para fazer toggle do "read more" e condicionalment renderizar a descrição total.
