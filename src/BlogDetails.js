import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const {id} = useParams();
  return (
    <h1>BlogDetails {id}</h1>
  )
}

export default BlogDetails