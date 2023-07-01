import Home from '../Home'
import MyAccound from '../MyAccound'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import './App.css'

function App() {

  return (
    <div className="text-3xl font-bold underline bg-red-400">
      <Home />
      <MyAccound />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </div>
  )
}

export default App
