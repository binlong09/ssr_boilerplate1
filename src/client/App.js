import React from 'react';
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import { fetchCurrentUser } from './actions'

// route props get passed down by matchRoutes
const App = ({ route }) => {

    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )

}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}