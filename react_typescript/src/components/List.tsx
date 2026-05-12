import {type ReactNode} from 'react'

interface Listprops<T> {
    items:T[]
    render:(item:T) => ReactNode
}

const List = <T,>({items,render}:Listprops<T>) => {
  return (
    <ul>
        {items.map((item,i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List