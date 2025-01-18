import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import Background from '../Background'

const Layout = () => {
  return (
    // <Background>
      <div className="App">
          <Sidebar />
          <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet />
            <span className="tags bottom-tags">
              &lt;/body&gt;
              <br />
              <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
          </div>
      </div>
    </Background>
  )
}

export default Layout