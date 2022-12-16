import Photo from './Photo'

function Background({background}) {
    return (
    <div className="background">
        <div className="overlay"></div>
        <Photo statu={background} />
    </div>
    )
}

export default Background;