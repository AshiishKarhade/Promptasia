import Feed from '@components/feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
        </h1>
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        <p className="desc text-center">Promptasia is open-source AI prompting tool for modern world to discover and share creative AI Prompts</p>
    
        <Feed />
    </section>
  )
}

export default Home