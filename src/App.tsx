import { AuthProvider } from './contexts/AuthContext';
import RoutesApp from './router/routes';

function App() {
  return (
    <div>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>

    </div>
  );
}

export default App;
