import { createContext, useState , useContext  } from 'react'

const CounterContext = createContext(null);


export default function CountProvider({ children }){

  const [ count, setCount ] = useState(0);
  const [ escope, setEscope ] = useState(0);
  const [ visibleMobileSidebar , setVisibleMobileSidebar ] = useState(false);

  return (
    <CounterContext.Provider value={{count,
                                     setCount, 
                                     escope,
                                     setEscope,
                                     visibleMobileSidebar, 
                                     setVisibleMobileSidebar }}>
      {children}
      </CounterContext.Provider>
  )
}

export function useCounter(){
  const context = useContext(CounterContext);
  const { count , setCount } = context;
  return { count, setCount }
}


export function useEscope(){
  const context = useContext(CounterContext);
  const { escope, setEscope } = context;
  return { escope , setEscope }
}


export function useMobile(){
  const context = useContext(CounterContext);
  const { visibleMobileSidebar, setVisibleMobileSidebar } = context;
  return { visibleMobileSidebar, setVisibleMobileSidebar }
}