import React, {useState} from "react";

export type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UnControlledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


    return (
        <div>
            <Star onChange={()=>setValue(1)} selected={value > 0}/>
            <Star onChange={()=>setValue(2)} selected={value > 1}/>
            <Star onChange={()=>setValue(3)} selected={value > 2}/>
            <Star onChange={()=>setValue(4)} selected={value > 3}/>
            <Star onChange={()=>setValue(5)} selected={value > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected : boolean
    onChange: () => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={props.onChange}>{props.selected ? <b>star </b> : 'star '}</span>

}