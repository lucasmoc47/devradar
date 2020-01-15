//App.js
// Componente = função/classe que retorna algum conteúdo html/css/javascript para interface
// usado quando estamos repetindo código ou para blocos independentes dentro de uma página
// um componente por arquivo

// Estado
// informações mantidas por um componente (conceito de imutabilidade)

// Propriedade
// atributos de um componente passados de um PAI para um componente FILHO ...props

//Routes
// métodos HTTP:
// get = recebe informação(ex: listagem)
// post = cria informação(ex: salvar produto, cadastrar usuário)
// put = edita informação(ex: editar informações de um produto)
// delete = ?????

// tipos de parâmetros
// query params: req.query (usados para Filtros, Ordenação, Páginação, ...) << usados no GET
// route params: req.params (ex: /users/:id || Identificar um recurso na alteração(PUT) ou remoção(DELETE))
// body: req.body (Dados para alteração ou criação de um registro)

//backend/index.js
//app.use(express.json()) // usado para o express entender o BODY com informações do tipo JSON
// MongoDB (BD Não-relacional)

//Controllers
//index, show, store, update, destroy
//index = listagem de vários itens
//show = listagem de um único item
//store = criação de um item
//update = alteração de um item
//destroy = remoção de um  item