import ProfilePage from './pages/profile/profile.page.jsx';
import NotFoundPage from './pages/errors/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';
import App from './App.jsx';

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
        ]
    },
]