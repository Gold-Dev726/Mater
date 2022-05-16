// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import Spinner from 'src/@core/components/spinner'

const WindowWrapper = ({ children }) => {
  // ** State
  const [windowReadyFlag, setWindowReadyFlag] = useState(false)
  const router = useRouter()
  useEffect(
    () => {
      if (!router.isReady) {
        return
      }
      if (typeof window !== 'undefined') {
        setWindowReadyFlag(true)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )
  if (windowReadyFlag) {
    return <>{children}</>
  } else {
    return <Spinner />
  }
}

export default WindowWrapper
