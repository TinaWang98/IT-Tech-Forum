import dynamic from 'next/dynamic'
import axios from 'axios'
const Layout = dynamic(() => import('../../components/Layout'),{ssr:false})
import {API} from '../../config'
import { getCookie } from '../../helpers/auth'
import withUser from '../withUser'

const User= ({user}) => {
    return <Layout>{JSON.stringify(user)}</Layout>
  }
  
  export default withUser(User)