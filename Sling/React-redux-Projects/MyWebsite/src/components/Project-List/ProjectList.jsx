import React from 'react';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';
import './ProjectList.scss';


function ListOfProjects (props) {
    const { listOfProjects } = props;

    return (
    <div className="project-container">
        <h1 className="project-header">Projects</h1>
        {listOfProjects.map((project, index) => {
            return (
              <ListItem project={project} key={index} />
            )
        })}
    </div>
    )
}

ListOfProjects.propTypes = {
    listOfProjects: PropTypes.array
}
export default ListOfProjects;