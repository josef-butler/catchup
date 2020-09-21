import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { IActivity } from '../models/activity'
import { NavBar } from '../../features/nav/NavBar'
import { Container } from 'semantic-ui-react'
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard'

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
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </>
  )
}

export default App
