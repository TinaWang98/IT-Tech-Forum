import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/Layout'),{ssr:false})

const Admin= () => {
    return <Layout>hello Admin</Layout>
  }
  
  export default Admin