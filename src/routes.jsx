import NotFoundPage from './pages/errors/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';
import ProfilePage from './pages/profile/profile.page.jsx';
import FriendsPage from './pages/friends/friends.page.jsx';
import ChatPage from './pages/chat/chat.page.jsx';
import GamesPage from './pages/games/games.page.jsx';
import GamePage from './pages/games/game/game.page.jsx';
import LeaderboardsPage from './pages/leaderboards/leaderboards.page.jsx';
import TournamentsPage from './pages/tournaments/tournaments.page.jsx';
import HelpPage from './pages/help/help.page.jsx';
import ConditionsPage from './pages/conditions/conditions.page.jsx';
import ConfidentialityPage from './pages/confidentiality/confidentiality.page.jsx';
import LoginPage from './pages/auth/login.page.jsx';
import RegisterPage from './pages/auth/register.page.jsx';

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
                path: 'profile/:username',
                element: <ProfilePage />
            },
            {
                path: 'friends/:username',
                element: <FriendsPage />
            },
            {
                path: 'chat/:username',
                element: <ChatPage />
            },
            {
                path: 'games',
                element: <GamesPage />,
                children: [
                    {
                        path: 'games/:id',
                        element: <GamePage />
                    }

                ]
            },
            {
                path: 'leaderboards',
                element: <LeaderboardsPage />
            },
            {
                path: 'tournaments',
                element: <TournamentsPage />
            },
            {
                path: 'help',
                element: <HelpPage />
            },
            {
                path: 'conditions',
                element: <ConditionsPage />
            },
            {
                path: 'confidentiality',
                element: <ConfidentialityPage />
            },
            {
                path: 'auth',
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
        ]
    },
]