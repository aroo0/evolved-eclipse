import { attachToResponse } from "astro/dist/core/cookies";
import React from "react";
import { useState } from "react"

const SubscribeComp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState("")
  const [response, setResponse] = useState('')


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setIsLoading(true)

    try {;
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        body: JSON.stringify({
          email: value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json()
      const { message } = data;
      setResponse(message)
      

    } catch (error:any) {
      console.log(error)
      
    }
    finally {
      setIsLoading(false)
    }

  }

  return (
    <div className='subscribe-container'>
      <h2>
        Join newsletter (⁄ ⁄•⁄ω⁄•⁄ ⁄) 
      </h2>
      <form className='subscribe' onSubmit={handleSubmit}>
        <div className="subscribe__input-container">
          <input 
            value={value}
            onChange={onChange}
            className="add-email" 
            placeholder="Email" 
            type="email"
            required />
          <div className="response">
            {response}
          </div>

          </div>
          <button 
            className={`button button--large ${isLoading && "button-disabled"}`}
            type='submit'
            disabled={isLoading}
            >Subscribe</button>
      </form> 
    </div>
  )
}

export default SubscribeComp