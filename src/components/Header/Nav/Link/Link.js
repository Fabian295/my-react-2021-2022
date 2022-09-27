import React from "react";
import './link.css'

export default function Link(props) {
  const { title, url } = props.link;
  return (
    <li className="nav-li">
      <a className="nav-link" href={url}>{title}</a>
    </li>
  )
}