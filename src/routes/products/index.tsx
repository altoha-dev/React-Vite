import { createFileRoute } from '@tanstack/react-router'
import { Products } from '../../pages/products/model/Products'

export type ProductQuerySearch = {
  from ? :number,
  to ? :number
}


export const Route = createFileRoute('/products/')({
  component: ProductRoute
})

function ProductRoute(){
  const query = Route.useSearch<ProductQuerySearch>()
  return <Products {...query}/>
    
}
