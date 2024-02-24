import Cart from '../../pages/cart/Cart';
import { Contacts } from '../../pages/Contacts';
import { Home } from '../../pages/home/Home';
import ProductPage from '../../pages/productPage/ProductPage';
import { Services } from '../../pages/Services';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
];
