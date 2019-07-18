import React from 'react';
import { renderRoutes } from 'react-router-config'

// route props get passed down by matchRoutes
const App = ({ route }) => {

    return (
        <div>
            <h1>I'm a header</h1>
            {renderRoutes(route.routes)}
        </div>
    )

}

export default {
    component: App
}