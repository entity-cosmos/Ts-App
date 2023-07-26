import React from "react";

interface Props {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

const List: React.FC<Props> = ({ people }) => {

    const renderList = () => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt={person.name} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return <ul>
        {renderList()}
    </ul>
};

export default List;