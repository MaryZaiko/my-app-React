import React, {FC, useState } from "react";
import './Information.css'
import HeaderPages from "../../components/HeaderPages";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/themeModeContext'
import Button from "../../components/Button";

// type InformationProps ={
// data:Texts[]
// }
// type Texts ={

// }
const Information = ({data}:any) =>{

    const { theme, onChangeTheme = () =>{}} = useThemeContext()
    const isLightTheme = theme === Theme.Light;
  
    const [activeTab, setActiveTab] = useState('tab1');
    const onClickActiveTab = (name:string) =>{
        setActiveTab(name)
    }

const isActiveTab1 = activeTab === 'tab1';
const isActiveTab2 = activeTab === 'tab2';
const isActiveTab3 = activeTab === 'tab3';




    return (
        <div 
        className={classnames('Information', {['container']: isLightTheme}, {['darkContainer']: !isLightTheme})} >
<HeaderPages />
<h1 className="informationTitle">Information</h1>
<div className="tabsContainer">
<Button 
className={classnames(isLightTheme ? "buttonTab" : "buttonTabDark", {['buttonTabActive'] : isActiveTab1})} 
btnContent="Tab 1" onClick={() =>{onClickActiveTab('tab1')}}/>

<Button 
className={classnames(isLightTheme ? "buttonTab" : "buttonTabDark", {['buttonTabActive'] : isActiveTab2})} 
btnContent="Tab 2" onClick={() =>{onClickActiveTab('tab2')}}/>

<Button 
className={classnames(isLightTheme ? "buttonTab" : "buttonTabDark", {['buttonTabActive'] : isActiveTab3})} 
btnContent="Tab 3" onClick={() =>{onClickActiveTab('tab3')}}/>
</div>

<div 
className={classnames('textContainer', {['textContainerDark']: !isLightTheme})}>
<p>{(activeTab === 'tab1') ? data[0] : (activeTab === 'tab2') ? data[1] : data[2] }</p>
</div>


        </div>
    )
}

export default Information