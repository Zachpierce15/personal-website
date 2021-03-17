import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';

function ListItem (props) {
  const { Title, technology, description, definition, instructions, url } = props.project;

  return (
      <div className="project-item">
        <h2 className="item-title">
          {Title}
        </h2>
          <div className="meta-data">
          {technology}
          {description}
          {definition}
          {instructions}
          {url}
        </div>
      </div>
  )

}

ListItem.propTypes = {
  project: PropTypes.object,
}

export default ListItem
