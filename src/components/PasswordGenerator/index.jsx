import { useState, useEffect } from "react"


import "./style.css"


const PasswordGenerator = () => {
    const [password, setPassword] = useState()
    const [passwordLength, setPasswordLength] = useState(8)
    const [digitLength, setDigitLength] = useState(2)
    const [simbLength, setSimbLength] = useState(2)

    const copyToClipboard = () => {
  if (password) {
    navigator.clipboard.writeText(password);
    alert("Senha copiada para a área de transferência!");
  }
};

    useEffect(() => {
        const draftPassaword = []



        draftPassaword.push(...Array.from({ length : digitLength}, randomDigit))
        draftPassaword.push(...Array.from({ length : simbLength}, randomSimb))
        draftPassaword.push(...Array.from({ length : passwordLength}, randomLetter))
        

 
        
        setPassword(draftPassaword.slice(0, passwordLength).sort(() => Math.random() - 0.5).join(""))
    }, [passwordLength, digitLength, simbLength])

    const randomDigit = () => {
        const digits = "0123456789"

        return digits[Math.floor(Math.random() * digits.length)]
    }

    const randomSimb = () => {
        const simb = "#@$!%¨&*(){}?"

        return simb[Math.floor(Math.random() * simb.length)]
    }
    
    
    const randomLetter = () => {
        const letter = "abcdefghijklmnopqrstuvwxyz"

        const letters = letter[Math.floor(Math.random() * letter.length)]
    
        return Math.random() >= 0.5 ? letters : letters.toUpperCase()
    }
    
    
    return <>
        <div className="slider">
            <label htmlFor="">Tamanho</label>
            <input type="range" id="password-length" min={0} max={64} value={passwordLength} onChange={({ target }) => setPasswordLength(parseInt(target.value))} />

            <span>{passwordLength}</span>

        </div>

        <div className="slider">
            <label htmlFor="">Digitos</label>
            <input type="range" id="digit-length" min={0} max={10} value={digitLength} onChange={({ target }) => setDigitLength(parseInt(target.value))} />

            <span>{digitLength}</span>

        </div>

        <div className="slider">
            <label htmlFor="">Simbolos</label>
            <input type="range" id="simb-length" min={0} max={10} value={simbLength} onChange={({ target }) => setSimbLength(parseInt(target.value))} />

            <span>{simbLength}</span>


        </div>
        <h1 style={{ marginTop: "2Rem", fontFamily: "monospace", width: "64ch" }}>
            {password}
        </h1>

        <button 
        onClick={copyToClipboard}
             style={{ display: "block", margin: "1rem auto", padding: "10px 20px", cursor: "pointer" }}
            >
                Copiar Senha
            </button>

    </>

}

export default PasswordGenerator