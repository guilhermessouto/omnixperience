import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/services/queryClient'
import { AppProvider } from './contexts/userContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
)