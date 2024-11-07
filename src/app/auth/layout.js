import React from 'react'
import AuthLayout from '../layoutComponents/Layouts/AuthLayout/layout'

export default function layout({children}) {
  return (
  <AuthLayout>{children}</AuthLayout>
  )
}
