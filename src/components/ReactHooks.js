import React , { useState } from 'react'

// hooks state berlaku di fucntion
const RactHooks = () => {
    const [angka, setAngka] = useState(0)
    const [text, setText] = useState("")
    const [arr, setArr] = useState([
        {
            id:1,
            title:"this title"
        }
    ])

    const add = () =>{
        setAngka(angka + 2)
    }
    const kurang = () =>{
        setAngka(angka - 1)
    }

    return(
        <div>
            {angka}
            <button onClick={add}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    )
}