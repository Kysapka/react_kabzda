import React, {useState} from 'react';
import {UnControlledRating} from "./UnControlledRating";
import {RatingPropsType} from "./Rating";
import {Story} from "@storybook/react";

export default {
    title: 'My Components/Rating stories',
    component: UnControlledRating
}

const Template:Story = (args) => <UnControlledRating {...args}/>

export const ChangingRating = Template.bind({})

ChangingRating.args = {

}

// export const RatingWithDefaultValue2 = (args: RatingPropsType) => {
//         return <UnControlledRating  />
// }


