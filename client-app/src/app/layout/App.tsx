import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon } from 'semantic-ui-react'
import { IActivity } from '../models/activity'

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([])

    useEffect(() => {
        axios
            .get<IActivity[]>('http://localhost:5000/api/activities/')
            .then(response => {
                setActivities(response.data)
            })
    }, [])

    return (
        <div>
            <Header as='h2'>
                <Icon name='users' />
                <Header.Content>CatchUp</Header.Content>
            </Header>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
