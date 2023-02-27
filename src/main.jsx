import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './routes/App';
import AddNote from './routes/AddNote';
import NotesList from './routes/NotesList';
import './index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <NotesList />,
                children: [
                    {
                        path: 'add-note',
                        element: <AddNote />,
                    },
                ],
            },
            // {
            //   path: '/add-note',
            //   element: <AddNote />
            // }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
