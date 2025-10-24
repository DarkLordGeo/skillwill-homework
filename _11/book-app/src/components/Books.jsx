import Book from './Book'
import '../App.css'

const Books = () => {
    const data = [
        {
            id: 1,
            image: "https://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
            header: "A Light in the Attic",
            description: "It's hard to imagine a world without A Light in the Attic. This now-classic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition. Silverstein's humorous and creative verse can amuse the dowdiest of readers. Lemon-faced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love th It's hard to imagine a world without A Light in the Attic. This now-classic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition. Silverstein's humorous and creative verse can amuse the dowdiest of readers. Lemon-faced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love that Silverstein. Need proof of his genius? RockabyeRockabye baby, in the treetopDon't you know a treetopIs no safe place to rock?And who put you up there,And your cradle, too?Baby, I think someone down here'sGot it in for you. Shel, you never sounded so good. ...more",
            characters: ["Backward Bill", "Sour Face Ann"]
        },
        {
            id: 2,
            image: "https://books.toscrape.com/media/cache/08/a9/08a957eb34f8047862e225774c3bdde2.jpg",
            header: "The Grand Design",
            description: "THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLD’S GREAT THINKERS—A MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFEWhen and how did the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existence of beings like ours THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLD’S GREAT THINKERS—A MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF LIFE When and how did the universe begin? Why are we here? Why is there something rather than nothing? What is the nature of reality? Why are the laws of nature so finely tuned as to allow for the existence of beings like ourselves? And, finally, is the apparent “grand design” of our universe evidence of a benevolent creator who set things in motion—or does science offer another explanation? The most fundamental questions about the origins of the universe and of life itself, once the province of philosophy, now occupy the territory where scientists, philosophers, and theologians meet—if only to disagree. In their new book, Stephen Hawking and Leonard Mlodinow present the most recent scientific thinking about the mysteries of the universe, in nontechnical language marked by both brilliance and simplicity. In The Grand Design they explain that according to quantum theory, the cosmos does not have just a single existence or history, but rather that every possible history of the universe exists simultaneously. When applied to the universe as a whole, this idea calls into question the very notion of cause and effect. But the “top-down” approach to cosmology that Hawking and Mlodinow describe would say that the fact that the past takes no definite form means that we create history by observing it, rather than that history creates us. The authors further explain that we ourselves are the product of quantum fluctuations in the very early universe, and show how quantum theory predicts the “multiverse”—the idea that ours is just one of many universes that appeared spontaneously out of nothing, each with different laws of nature.Along the way Hawking and Mlodinow question the conventional concept of reality, posing a “model-dependent” theory of reality as the best we can hope to find. And they conclude with a riveting assessment of M-theory, an explanation of the laws governing us and our universe that is currently the only viable candidate for a complete “theory of everything.” If confirmed, they write, it will be the unified theory that Einstein was looking for, and the ultimate triumph of human reason.A succinct, startling, and lavishly illustrated guide to discoveries that are altering our understanding and threatening some of our most cherished belief systems, The Grand Design is a book that will inform—and provoke—like no other. ...more",
            characters: ['Albert einstein', 'God', 'Buddha']
        },

    ]
    function click(header, characters) {
        console.log(`This is header: ${header}`)
        console.log(`These are characters ${characters.map(character => character)}`)
    }


    return (
        <div className='main-card'>
            {data.map((item) => <Book
                key={item.id}
                image={item.image}
                header={item.header}
                description={item.description}
                characters={item.characters}
                print={click} />)}
        </div>
    )
}

export default Books
