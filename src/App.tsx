import './App.css'
import BudgetTracker from './BudgetTracker'
import ShoppingList from './ShoppingList'
import TodayReview from './TodayReview'

function App() {
  return (
    <>
      <div className="app-components">
        <BudgetTracker />
        <TodayReview />
        <ShoppingList />
      </div>
    </>
  )
}

export default App
