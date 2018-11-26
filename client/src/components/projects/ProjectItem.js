import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import { getProjects } from "../../actions/projectActions";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    console.log(project);
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        <div className="card card-body mb-2">
          <div className="row">
            <div className="col-md-6">
              <h4>Repository One</h4>
              <p>Repository description</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">Stars: 44</span>
              <span className="badge badge-secondary mr-1">Watchers: 21</span>
              <span className="badge badge-success">Forks: 122</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
