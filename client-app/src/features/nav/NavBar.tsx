import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
          Catchup
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button positive content='Create activity' />
        </Menu.Item>
      </Container>
    </Menu>
  )
}
