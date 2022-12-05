import { createContext, useState } from 'react'

type Props = {
  children: JSX.Element
}

export const AppContext = createContext<{} | null>(null)

export function AppProvider({children}: Props) {
  const [data, setData] = useState<{} | null>(null)

  return (
    <AppContext.Provider value={{data, setData}}>
      {children}
    </AppContext.Provider>
  )
}