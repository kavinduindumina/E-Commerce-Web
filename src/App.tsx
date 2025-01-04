import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AccountPage } from './pages/AccountPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { WishlistPage } from './pages/WishlistPage';
import { OrderHistoryPage } from './pages/OrderHistoryPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/order/:id/track" element={<OrderTrackingPage />} />
            <Route path="/product/:id/reviews" element={<ReviewsPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;



// my new app with lazy loading

// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components/layout/Header';
// import { NotFoundPage } from './pages/NotFoundPage';
// import ProtectedRoute from './components/ProtectedRoute';

// const HomePage = React.lazy(() => import('./pages/HomePage'));
// const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
// const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
// const CartPage = React.lazy(() => import('./pages/CartPage'));
// const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
// const AccountPage = React.lazy(() => import('./pages/AccountPage'));
// const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

// export const App: React.FC = () => (
//   <Router>
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <Suspense fallback={<div>Loading...</div>}>
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/products" element={<ProductsPage />} />
//             <Route path="/product/:id" element={<ProductDetailPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             <Route path="/account" element={<ProtectedRoute element={<AccountPage />} />} />
//             <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>
//       </Suspense>
//     </div>
//   </Router>
// );

// export default App;
