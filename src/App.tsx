import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from './services/api'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { setProdutos, adicionarAoCarrinho, RootState } from './store'
import { favoritar } from './store/reducers/favoritos'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  useEffect(() => {
    if (produtos) {
      dispatch(setProdutos(produtos))
    }
  }, [produtos, dispatch])

  if (isError) {
    return <div>Erro ao carregar produtos</div>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
            <Produtos
              produtos={produtos ?? []}
              favoritos={favoritos}
              favoritar={(produto: Produto) => dispatch(favoritar(produto))}
              adicionarAoCarrinho={(produto: Produto) =>
                dispatch(adicionarAoCarrinho(produto))
              }
            />
          </>
        )}
      </div>
    </>
  )
}

export default App
