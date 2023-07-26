import React, { useState } from "react";

interface Props {
    onSubmit: (input: {
        name: string,
        age: number,
        img: string,
        note: string
    }) => void
}

const AddToList: React.FC<Props> = ({ onSubmit }) => {

    const [input, setInput] = useState({
        name: "",
        age: 0,
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        onSubmit(input);
        setInput({
            name: "",
            age: 0,
            note: "",
            img: ""
        })
    }
    return <div className="AddToList">
        <input
            type="text"
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
        />
        <input
            type="number"
            placeholder="Age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input
            type="text"
            placeholder="Image Url"
            className="AddToList-input"
            value={input.img}
            onChange={handleChange}
            name="img"
        />
        <textarea
            placeholder="Note"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}
            name="note"
        />
        <button
            className="AddToList-btn"
            onClick={handleClick}
        >
            Add to List
        </button>
    </div>
};

export default AddToList;