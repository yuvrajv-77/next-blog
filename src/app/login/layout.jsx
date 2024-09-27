import React from 'react'
import AuthContextProvider from '../../../lib/context/AuthContext'

function layout({children}) {
  return (
    <div>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </div>
  )
}

export default layout