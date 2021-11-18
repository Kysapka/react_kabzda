import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion'
import {Rating, RatingPropsType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

function App() {

    let [on1,setOn1] = useState<boolean>(false)
    let [on2,setOn2] = useState<boolean>(false)
    let [on3,setOn3] = useState<boolean>(false)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <div className={"App"}>
            <OnOff setOn={setOn1} on={on1}/>
            <OnOff setOn={setOn2} on={on2}/>
            <OnOff setOn={setOn3} on={on3}/>

            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}

            <PageTitle title={'This is APP component'}/>
            Article 1
            {/*<Rating value={3}/>*/}

            <Accordion titleValue={'Menu'} setCollapsed={setCollapsed} collapsed={collapsed}/>
            <Accordion titleValue={'Users'} setCollapsed={setCollapsed} collapsed={collapsed}/>

            Article 1
            <Rating setValue={setValue} value={value}/>
            <UnControlledRating />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <div>{props.title}</div>
}


export default App;
