import ReactDOM from 'react-dom/client';
import AboutMe from './components/AboutCard';
import PortfolioCard from './components/PortfolioCard';
import ContactCard from './components/ContactCard';
import ResumeCard from './components/ResumeCard';
import Landing from './components/LandingCard';
import ErrorPage from './components/pages/ErrorPage';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <PortfolioCard />,
      },
      {
        path: '/contact',
        element: <ContactCard />,
      },
      {
        path: '/resume',
        element: <ResumeCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);