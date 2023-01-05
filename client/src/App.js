import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyKitchen from './screens/MyKitchen';
import NewIngredient from './screens/NewIngredient';
import NewRecipe from './screens/NewRecipe';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MyKitchen />} />
        <Route path='/ingredient' element={<NewIngredient />} />
        <Route path='/recipe' element={<NewRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
