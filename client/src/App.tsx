import AppRouter from './routes/AppRouter';
import { useTheme } from './hooks/useTheme';

export default function App() {
  useTheme();
  return <AppRouter />;
}
