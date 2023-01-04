import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './contexts/AuthContext';
import RoutesApp from './router/routes';

function App() {
  return (
    <div>
      <AuthProvider>
      <ToastContainer
        autoClose={3000}
        theme="dark"
      />
        <RoutesApp />
      </AuthProvider>

    </div>
  );
}

export default App;
