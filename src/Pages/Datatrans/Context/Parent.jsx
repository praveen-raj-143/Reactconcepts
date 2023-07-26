import React, { createContext } from 'react'
import Child from './Child'
const store=createContext()
const Parent = () => {
    const data="praveen raj"
  return (
    <store.Provider value={data}>
        <Child/>
    </store.Provider>
  )
}
export {store}
export default Parent