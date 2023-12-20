import './App.css'
import BudgetTracker from './BudgetTracker'
import BigOrangeButton from './Components/BigOrangeButton'
import Card from './Components/Card'
import CityFinder from './Components/CityFinder'
import ShoppingList from './ShoppingList'
import TodayReview from './TodayReview'

function App() {
  return (
    <>
      <div className="app-components">
        <BudgetTracker />
        <TodayReview />
        <ShoppingList />
        <Card title="Orange Button Here">
          <p>
            This button has been placed here for you to click.
          </p>
          <BigOrangeButton onClick={() => alert('hello')}>Click me!</BigOrangeButton>
        </Card>
        <Card title="City Finder">
          <CityFinder></CityFinder>
        </Card>
        <Card title="Orange Button Here">
          <p>
            This button has been placed here for you to click.
          </p>
          <BigOrangeButton onClick={() => alert('hello')}>Click me!</BigOrangeButton>
        </Card>
      </div>
    </>
  )
}

export default App
