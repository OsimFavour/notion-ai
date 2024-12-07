'use-client'

import { CircleUserRound } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-5'>
      <h1 className='text-2xl'>
        Favour{"'s"} space
      </h1>

      {/* Breadcrumbs */}

      <div>
        {/* If user is signed out 
          return signed in button
        */}

        <CircleUserRound className='text-blue-500' />
        
        {/* else
          return sign out button
        */}
      </div>
    </div>
  )
}

export default Header