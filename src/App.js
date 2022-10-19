
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryScreen from './screens/CategoryScreen';
import ArticleScreen from './screens/ArticleScreen';
import CartScreen from './screens/CartScreen';




function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<HomeScreen />} />
      <Route index element={<HomeScreen />}/>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/categories' element={<CategoriesScreen />} />
      <Route path='/category/:id' element={<CategoryScreen />} />
      <Route path='/article/:id' element={<ArticleScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
