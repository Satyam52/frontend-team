import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './ChallengesPage.css';
import {Spinner} from 'react-bootstrap'
import ProjectFooter from '../ProjectsPage/ProjectFooter/ProjectFooter';
import Navigation from '../Navigation/Navigation';
import ChallengesContainer from './ChallengesContainer/ChallengesContainer';
import ChallengesDropdown from './ChallengesContainer/ChallengesDropdown/ChallengesDropdown';
// import Spinner from './ChallengesContainer/Spinner';

const ChallengesPage = () => {
  const [categoryNames, setCategoryNames] = useState(['all', 'electrical']);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/front/categories/challenge?all=1`)
      .then((res) => {
        setCategoryNames(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="ChallengesPage">
        {loading ? (
          <Spinner className="loadingSpinner" animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          ) : (
          <Route
            path="/Challenges/:category"
            exact
            component={() => (
              <>
                <ChallengesDropdown categoryNames={categoryNames} />
                <ChallengesContainer />
              </>
            )}
          />
        )}
      </div>
      <ProjectFooter />
    </div>
  );
};

export default ChallengesPage;
