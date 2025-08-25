import Card from './components/card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card 
   title="Card Title"
   description="This is a description of the card."
   imageUrl="https://www.miicreative.com/cdn/shop/articles/delicious-breakfast-near-vintage-camera-and-pictures_520x500_b4eb17b1-49bb-43ef-b5f1-e145ff64a0c9.jpg?v=1646763906"/>
    <Card 
   title="Card Title"
   description="This is a description of the card."
   imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F997125173748424425%2F&psig=AOvVaw3AVh2ezPzVSH1r-4K0Dm1m&ust=1756200163753000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDYoMvRpY8DFQAAAAAdAAAAABAE"/>
    <Card 
   title="Card Title"
   description="This is a description of the card."
   imageUrl="https://www.united-tables.com/public/imgTools2Data/thumbs/pt360/pt_trend_21.jpg"/>
    
    </>
  )
}

export default App