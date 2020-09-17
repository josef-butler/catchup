import React from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon } from 'semantic-ui-react'
import { IActivity } from '../models/activity'

interface IState {
  activities: IActivity[]
}

class App extends React.Component<{}, IState> {
  readonly state: IState = {
    activities: [],
  }

  componentDidMount() {
    axios.get<IActivity[]>('http://localhost:5000/api/activities/').then(response => {
      this.setState({
        activities: response.data,
      })
    })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>CatchUp</Header.Content>
        </Header>
        <ul>
          {this.state.activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
