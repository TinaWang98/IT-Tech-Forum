import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/Layout'),{ssr:false})

const User= () => {
    return <Layout>hello User</Layout>
  }
  
  export default User