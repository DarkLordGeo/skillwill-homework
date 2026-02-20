import React from 'react'

const Form:React.FC = () => {
  return (
    <form>
        <div>
            <label htmlFor='name'>name</label>
            <input type="text" id='name' />
        </div>
    </form>
  )
}

export default Form
