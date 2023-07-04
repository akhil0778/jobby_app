import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-home-container">
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="heading">Find The Job that Fits Your Life</h1>
        <p className="paragraph">
          Millions of people are searching for jobs, salary information,jobs
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs/">
          <button type="button" className="home-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home
