import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  LinkProps,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import MobX from '../mobx'
import './index.scss'

const Link = (props: LinkProps) => {
  const { to, children } = props
  const path = typeof to === 'string' ? to : undefined
  const match = useRouteMatch({ path })
  console.log({ match })

  const isActiveLink = path && match
  const nonActiveLink = children ? (
    <span className="link link-active">{children}</span>
  ) : (
    children
  )

  return (isActiveLink ? nonActiveLink : <RouterLink {...props} />) as any
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="app center">
        <section className="header nav">
          {/* todo: switch to normal ul/li for list of nav links */}
          <Link to="/mobx">mobx</Link>
          <span>mobx-state-tree</span>
          <span>redux-starter-kit</span>
          <span>context</span>
        </section>

        <section className="content">
          <Switch>
            <Route exact path="/">
              {/* todo: make a proper landing page */}
              <Redirect
                to={{
                  pathname: '/mobx',
                }}
              />
            </Route>
            <Route path="/mobx">
              <MobX />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
