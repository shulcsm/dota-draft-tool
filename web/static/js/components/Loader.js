import React, { PropTypes } from 'react'
import classNames from 'classnames'


const Loader = ({ loading }) => (
  <div className={classNames("loader", {loading})}>
    <i className="fa fa-cog fa-spin fa-fw"/>
  </div>
)

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Loader;
