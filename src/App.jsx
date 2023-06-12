import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState([])
  const [A, setA] = useState({
    Aname1:"",
    Aname2:"",
    Aname3:"",
    Aname4:"",
    Aname5:"",
    Aname6:"",
    Aname7:"",
    Aname8:"",
    Aname9:"",
    Aname10:"",
    Aname11:""
  })

  const [B, setB] = useState({
    Bname1:"",
    Bname2:"",
    Bname3:"",
    Bname4:"",
    Bname5:"",
    Bname6:"",
    Bname7:"",
    Bname8:"",
    Bname9:"",
    Bname10:"",
    Bname11:""
  })

  const cmb = [
    { t1:[1,2,3,4,5] ,t2:[6,7,8,9,10,11] },
    { t1:[3,4,5] ,t2:[1,2,6,7,8,9,10,11] },
    { t1:[3,4,5,11,2,6,7,8,9,10,] ,t2:[1] }
  ]

  const handelOnChangeA = (e) => {
    setA({
      ...A , [e.target.name]:e.target.value
    })
  }
  const handelOnChangeB = (e) => {
    setB({
      ...B , [e.target.name]:e.target.value
    })
  }

  const handelOnSubmit = () => {

    let ta = Object.values(A)
    let tb = Object.values(B)
    
    let values  = cmb.map(elem=>{
      const {t1 , t2} = elem
      const g1 = t1.map(ele=>{
        return ta[ele-1]
      })

      const g2 = t2.map(ele=>{
        return tb[ele-1]
      })

      return {v:[...g1 , ...g2]}

    })

    console.log(values)
    setValue(values)
  }

  return (
    <>
      <div>
        <div className='parent' style={{ display: 'flex' , justifyContent:'center' }} >
         
          <div style={{marginRight:"40px"}}>
          <h2>Team A</h2>
          <label style={{paddingRight:'10px'}}>name 1 :</label> <input type="text" name="Aname1" value={A.Aname1}  onChange={handelOnChangeA}/>
            <br />
            <label style={{paddingRight:'10px'}}>name 2 :</label> <input type="text" name="Aname2" value={A.Aname2} onChange={handelOnChangeA}  />
            <br />
            <label style={{paddingRight:'10px'}}>name 3 :</label> <input type="text" name="Aname3" value={A.Aname3} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}} >name 4 :</label> <input type="text" name="Aname4" value={A.Aname4} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}}>name 5 :</label> <input type="text" name="Aname5" value={A.Aname5} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}}>name 6 :</label> <input type="text" name="Aname6" value={A.Aname6} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}}>name 7 :</label> <input type="text" name="Aname7" value={A.Aname7} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}}>name 8 :</label> <input type="text" name="Aname8" value={A.Aname8} onChange={handelOnChangeA} />
            <br />
            <label style={{paddingRight:'10px'}}>name 9 :</label> <input type="text" name="Aname9" value={A.Aname9} onChange={handelOnChangeA} />
            <br />
            <label >name 10 :</label> <input type="text" name="Aname10" value={A.Aname10} onChange={handelOnChangeA}/>
            <br />
            <label >name 11 :</label> <input type="text" name="Aname11" value={A.Aname11} onChange={handelOnChangeA}/>
            <br />
          
          </div>
          <div style={{marginRight:"40px" }}>
          <h2>Team B</h2>
           <label style={{paddingRight:'10px'}} >name 1 :</label>  <input type="text" name="Bname1" value={B.Bname1} onChange={handelOnChangeB}/>
            <br />
            <label style={{paddingRight:'10px'}}>name 2 :</label> <input type="text" name="Bname2" value={B.Bname2}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 3 :</label> <input type="text" name="Bname3" value={B.Bname3}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 4 :</label> <input type="text" name="Bname4" value={B.Bname4}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 5 :</label> <input type="text" name="Bname5" value={B.Bname5}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 6 :</label> <input type="text" name="Bname6" value={B.Bname6}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 7 :</label> <input type="text" name="Bname7" value={B.Bname7}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}}>name 8 :</label> <input type="text" name="Bname8" value={B.Bname8}  onChange={handelOnChangeB} />
            <br />
            <label style={{paddingRight:'10px'}} >name 9 :</label> <input type="text" name="Bname9" value={B.Bname9}  onChange={handelOnChangeB} />
            <br />
            <label >name 10 :</label> <input type="text" name="Bname10" value={B.Bname10} onChange={handelOnChangeB}  />
            <br />
            <label >name 11 :</label> <input type="text" name="Bname11" value={B.Bname11} style={{marginBottom:'30px'}} onChange={handelOnChangeB}  />
            <br />
          
            <button type='button' style={{background:'blue' , color:'white' , width:'100%'}} onClick={handelOnSubmit} >Submit</button>
          </div>
         
          <div style={{marginRight:"40px"}}>
            <h2 style={{textAlign:'center'}}>All Combinations</h2>
            { value.length === 0? <h3 style={{color:'red'}}>There is no Comibiation right now</h3> :<ol>
             {value.map(elem=><li>{elem.v.join(" , ")}</li>)}
             </ol>}
          </div>
        </div>

       
      </div>
    </>
  )
}

export default App
