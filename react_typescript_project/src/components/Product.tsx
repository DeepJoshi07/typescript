import { type ProductType } from "../context/ProductsProvider"
import { type ReducerActionType, ReducerAction } from "../context/CartProvider"
import type { ReactElement } from "react"


type PropsType = {
    product: ProductType,
    dispatch:React.ActionDispatch<[action: ReducerAction]>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart:boolean
}
const Product = ({product,dispatch,REDUCER_ACTIONS,inCart}:ProductType):ReactElement => {

    const img:string = new URL(`../images/${product.sku}.jpg`,import.meta.url).href;

    const onAddToCart = () => {
        
    }
  return (
    <div>Product</div>
  )
}

export default Product