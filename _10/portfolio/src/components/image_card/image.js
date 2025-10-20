import me from '../../images/me.jpg';

function ImageCard() {
    return (
        <>
            <div>
                <img src={me} alt="lasha's image" width={'300px'} height={'300px'} />
                <br />
                <h1>lasha ergeshidze</h1>
            </div>
        </>
    )
}

export default ImageCard