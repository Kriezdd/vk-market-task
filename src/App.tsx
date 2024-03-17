import Cart from "./features/cart/Cart/Cart";
import TotalCost from "./features/totalCost/TotalCost";
import { Flex } from "antd";
import './App.css'

const App = () => {
  return (
    <Flex gap={20} className="App">
      <Cart/>
      <TotalCost/>
    </Flex>
  )
}

export default App
