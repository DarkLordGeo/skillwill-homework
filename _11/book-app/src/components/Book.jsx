import '../App.css'



const Book = ({ image, header, description, characters, print }) => {
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={image} alt={header} />
            </div>
            <h1>{header}</h1>
            <p>{description}</p>
            <ul>
                <li>
                    {characters.map((characters) => <li> {characters} </li>)}
                </li>
            </ul>
            <button onClick={() => print(header, characters)}>{header}</button>
        </div>
    )
}

export default Book
