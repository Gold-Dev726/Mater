// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'

const navigation = () => {
  return [
    {
      title: 'MY ATTENDANCE',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'HR',
      icon: EmailOutline,
      path: '/second-page'
    },
    {
      title: 'SETTING',
      icon: ShieldOutline,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    }
  ]
}

export default navigation
