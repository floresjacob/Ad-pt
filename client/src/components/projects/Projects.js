import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getProjects } from "../../actions/projectActions";

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, loading } = this.props.project;
    let projectContent;

    if (projects === null || loading) {
      projectContent = <Spinner />;
    } else {
      projectContent = <p>Projects Here</p>;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{projectContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
