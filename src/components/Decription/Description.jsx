import Button from "../UI/Button";
import demo_text from "../demo_text/demo_text";

function Description() {
    const text = demo_text

    return <div className="description container">
        <h1 className="description__header">Walking in Old Tallinn</h1>
        <Button className="button--main description__button">Feedback</Button>

        {text.map((item, i) => <p key={i} className="description__text">{item}</p> )}
        <div className="description__carousel">
            Pics
            Buttons 
        </div>
    </div>
}

export default Description;