import React from 'react'
import classNames from 'classnames'

const cx = classNames('link dim gray f6 f5-ns dib mr3')
// const cx = classNames('link dim gray f6 f5-ns dib mr3', {
//   'black b': isActive
// })

export default (props) => (
  <a className={cx} title={props.name} href="#">
    {props.name}
  </a>
)
