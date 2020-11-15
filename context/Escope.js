import { createContext, useState , useContext } from 'react'

const CounterContext = createContext(null);


export default function CountProvider({ children }){

  const [ escope, setEscope ] = useState(0);
  const [ modal, setModal ] = useState(false);
  const [ company, setCompany ] = useState(null);
  const [ visibleMobileSidebar , setVisibleMobileSidebar ] = useState(false);

  return (
    <CounterContext.Provider value={{escope,
                                     setEscope,
                                     modal,
                                     setModal,
                                     company,
                                     setCompany,
                                     visibleMobileSidebar, 
                                     setVisibleMobileSidebar }}>
      {children}
      </CounterContext.Provider>
  )
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

export function useModal(){
  const context = useContext(CounterContext);
  const { modal, setModal } = context;
  return { modal, setModal }
}

export function useCompany(){
  const context = useContext(CounterContext);
  const { company, setCompany } = context;
  return { company, setCompany }
}