import React from 'react';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseScreen from './screens/BaseScreen';
import HomeScreen from './screens/HomeScreen';

const LoginScreen = React.lazy(import('./screens/LoginScreen'));
const CategoriesScreen = React.lazy(import('./screens/CategoriesScreen'));
const CategoryScreen = React.lazy(import('./screens/CategoryScreen'));
const ArticleScreen = React.lazy(import('./screens/ArticleScreen'));
const CartScreen = React.lazy(import('./screens/CartScreen'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<HomeScreen />}/>
          <Route path='/login' element={<LoginScreen />}/>
          <Route path='/categories' element={<CategoriesScreen />}/>
          <Route path='/category/:id' element={<CategoryScreen />}/>
          <Route path='/article/:id' element={<ArticleScreen />}/>
          <Route path='/cart' element={<CartScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
