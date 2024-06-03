import '@styles/global.css';

export const metadate = {
    title: "Promptasia",
    description: "Discover and Share best AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout