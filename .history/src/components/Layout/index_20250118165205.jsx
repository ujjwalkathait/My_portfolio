import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import StarsCanvas from '../StarsCanvas'
import './index.scss'

const Layout = () => {
  return (
      <div className="App">
          <Sidebar />
          <StarsCanvas />
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
  )
}

export default Layout