import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/Layout'),{ssr:false})
import withAdmin from '../withAdmin'

const Admin= ({user,token}) => {
    return <Layout>{JSON.stringify(user)}</Layout>
  }
  
  export default withAdmin(Admin)