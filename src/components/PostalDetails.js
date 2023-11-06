import React from 'react'
import { useForm } from '../context/FormContext'

const PostalDetails = () => {
  const {postalCode} = useForm();

  

  return (
    <div>{postalCode}</div>
  )
}

export default PostalDetails