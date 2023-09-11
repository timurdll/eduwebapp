import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import AppRouter from './Components/AppRouter';
import Header from './Components/Shared/Header/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';


function App() {
  const queryClient = new QueryClient();
  return (
    <>
    
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <BrowserRouter>
            <Header />
          <div className="container"> 
            <AppRouter />
          </div>
            <Footer />
          </BrowserRouter>
        </AuthContextProvider>
      </QueryClientProvider>
    
    </>
  );
}

export default App;

