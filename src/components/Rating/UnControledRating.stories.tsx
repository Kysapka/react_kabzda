import React, {useState} from 'react';
import {UnControlledRating} from "./UnControlledRating";

export default {
    title: 'Rating stories',
    component: UnControlledRating
}

export const RatingWithDefaultValue = () => {
        return <UnControlledRating  />
}


