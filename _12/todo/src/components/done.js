import { useState ,useCallback} from 'react'
import './styles.css'

function Backlog(){

    const [inputValues,setInputValues] = useState([])
    const [currentTask, setCurrentTask] = useState("")

    const [number,setNumber] = useState(0)

    const colors = ["#3599ea", "#ea492d",  "#f0cd14", "#93cd55"]

    const random = colors[Math.ceil(Math.random() * colors.length)]


    const inputStyle = {
        height: '50px',
        margin: '10px 0px',
        border: `1px solid ${random || "#3599ea"}`,
        borderLeft: `6px solid ${random || "#3599ea"}`,
        display: 'inline-block',
        transition: '0.2s ease-in',
        paddingLeft: '20px',
        borderRadius: '7px',
        outline: 'none'
    }



    const handleChange = useCallback((event) => {
        setCurrentTask(event.target.value)
    })

    const handleAddition = (e) => {
        e.preventDefault()
        setNumber(number + 1)
    }

    const handleAddInput = useCallback((e) => {
        e.preventDefault()    
        const task = [...inputValues, [currentTask,inputStyle]]
        setInputValues(task)
        setCurrentTask('')
    },[currentTask,inputValues])
    
    const borderColor = {
        borderBottom: '2px solid #f5c721'
    }                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

    return (
        <div className='main-div'>
            <header
            style={borderColor}
            className='header'
            >
                <h2 className='header-name'>Done</h2>
                <div className='line'></div>
                <h2 className='number'>{number}</h2>
            </header>
            <main>
                <div>
                    
                    {inputValues.map(([value,style],index) => (
                        <input 
                        key={index}
                        style={style}
                        className='input-field'
                        type='text'
                        disabled
                        value={value}
                        />
                    ))}

                    <form onSubmit={(e) => {handleAddInput(e);handleAddition(e)}}>
                        <input 
                        className='input-field' 
                        type='text'
                        onChange={(e) => handleChange(e)}
                        value={currentTask}
                        />
                    </form>
                </div>
            </main>
        </div>
    )
    
}

export default Backlog