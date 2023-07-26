import React from 'react'
import Func from './Func'
import Clas from './Clas'
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'
import Hocchild from './HOC/Hocchild'
import Statefull from './Statefull'
import Stateless from './Stateless'
const Reactcomps = () => {
  return (
    <div>
      <Func/>
      <Clas/>
      <Controlled/>
      <Uncontrolled/>
      <Hocchild/>
      <Statefull/>
      <Stateless name='praveen raj'/>
    </div>
  )
}

export default Reactcomps