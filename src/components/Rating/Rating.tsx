import React, {Dispatch, SetStateAction, useState} from "react";

export type RatingPropsType = {
    /**
     * Raiting value variants
     */
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>
}

export const Rating = (props: RatingPropsType) => {



    const setStarHandler = (value: 0 | 1 | 2 | 3 | 4 | 5) => {
        props.setValue(value)
    }

    return (
        <div>
            <Star setStarHandler={() => setStarHandler(1)} selected={props.value > 0}/>
            <Star setStarHandler={() => setStarHandler(2)} selected={props.value > 1}/>
            <Star setStarHandler={() => setStarHandler(3)} selected={props.value > 2}/>
            <Star setStarHandler={() => setStarHandler(4)} selected={props.value > 3}/>
            <Star setStarHandler={() => setStarHandler(5)} selected={props.value > 4}/>
        </div>
    )

    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 3) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 4) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 5) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }


}

type StarPropsType = {
    selected : boolean
    setStarHandler: () => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={props.setStarHandler}>{props.selected ? <b>star </b> : 'star '}</span>

}

//     if (props.selected === true) {
//         return <span onClick={props.setStarHandler}><b>star</b></span>
//     } else {
//         return <span onClick={props.setStarHandler}>star</span>
//     }
// }