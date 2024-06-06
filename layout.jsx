import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "promptopia",
    description:'Discover & Share AI prompts'
} 

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
              <div className='gradiant'/>  
            </div>
            <main className="app">
              <Nav/>
                {children}
            </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout