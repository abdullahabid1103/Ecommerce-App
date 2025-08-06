import './App.css';
import ProductList from './productList';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">🛍️</div>
        <div>
          <h1>E-Shop Deluxe</h1>
          <span className="subtitle">Trendy. Fast. Affordable.</span>
        </div>
      </header>
      <main>
        <ProductList/>
      </main>
      <footer className="app-footer">
        <span>Made with ❤️ for shoppers &copy; {new Date().getFullYear()} E-Shop Deluxe</span>
      </footer>
    </div>
  );
}

export default App;
