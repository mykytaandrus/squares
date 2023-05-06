import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './components/App/App'
import { store } from './store/store'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
