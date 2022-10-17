import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'),{ssr:false})

const Home= () => {
    return <Layout>hello next</Layout>
  }
  
  export default Home