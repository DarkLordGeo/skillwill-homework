import { useParams, Link } from "react-router-dom";

const FactPage = () => {
    const { factId } = useParams();
    const facts = [
        { id: 1, fact: "His real name is Mason, and 'Dipper' is a nickname" },
        { id: 2, fact: "He is a curious and intelligent paranormal investigator" },
        { id: 3, fact: "He is fiercely loyal to his twin sister, Mabel" },
    ];
    const currentFact = facts.find(f => f.id === Number(factId));
    
    return (
        <div>
            <h1>Fact Page</h1>
            <ul>
                {facts.map(f => (
                    <li key={f.id}>
                        <Link to={`/facts/${f.id}`}>Fact {f.id}</Link>
                    </li>
                ))}
            </ul>

            {currentFact ? (
                <p>{currentFact.fact}</p>
            ) : (
                <p>select a fact from above.</p>
            )}
        </div>
    );
};

export default FactPage;
