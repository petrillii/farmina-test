import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-neutral-800 mb-6">
            Pet Product Consultation
          </h1>
          <div className="grid grid-cols-1 gap-6">
            <div className="lg:col-span-1">
              <Filters />
            </div>
            <div className="lg:col-span-3">
              <ProductList />
            </div>
          </div>
        </main>
        <footer className="bg-white border-t border-neutral-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-neutral-500 text-sm">
              © 2025 Farmina Test - Eduardo Petrilli. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;