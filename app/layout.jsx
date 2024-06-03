import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadate = {
    title: "Promptasia",
    description: "Discover and Share best AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout