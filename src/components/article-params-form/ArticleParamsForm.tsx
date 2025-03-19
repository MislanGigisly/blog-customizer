import { ArrowButton } from 'src/ui/arrow-button';
import {Select} from 'src/ui/select'
import { Button } from 'src/ui/button';
import {RadioGroup} from 'src/ui/radio-group'
import {Separator} from "src/ui/separator"
import {Text} from "src/ui/text"
import {fontFamilyOptions, fontColors, fontSizeOptions, contentWidthArr,backgroundColors,defaultArticleState, ArticleStateType, OptionType} from 'src/constants/articleProps';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

export const ArticleParamsForm = ({
    currentArticleState,
    setCurrentArticleState,
}: {
    currentArticleState: ArticleStateType;
    setCurrentArticleState: (param: ArticleStateType) => void;
}) => {
	const[state, setState] = useState(false);
	const hendleClick = ()=>{
		setState(()=> state === false? true: false)
	};

	const [stateForm, setStateForm] = useState(currentArticleState);
	
	const selectFont = (choose: OptionType) =>{
		setStateForm((oldState)=> ({...oldState,fontFamilyOption: choose}))
	}
	const selectFontColor = (choose: OptionType) =>{
		setStateForm((oldState)=> ({...oldState,fontColor: choose}))
	}
	const selectBackgroudColor = (choose: OptionType) =>{
		setStateForm((oldState)=> ({...oldState,backgroundColor: choose}))
	}
	const selectContentWidth = (choose: OptionType) =>{
		setStateForm((oldState)=> ({...oldState,contentWidth: choose}))
	}
	const selectFontSize = (choose: OptionType) =>{
		setStateForm((oldState)=> ({...oldState,fontSizeOption: choose}))
	}

	const hendlReset = ()=>{
		setCurrentArticleState(defaultArticleState)
	}

	addEventListener("submit", (event)=>{
		event.preventDefault()
		setCurrentArticleState(stateForm)
	})

	return (
		<>
			<ArrowButton isOpen={state} onClick={hendleClick} />
			<aside className={clsx(styles.container, {[styles.container_open]: state})}>

				<form className={styles.form}>
					<Text  
						as = {'h2'}
						size = {31}
						dynamic = {false}
						weight = {800}
						fontStyle = {'normal'}
						uppercase = {true}
						align = {'left'}
						family = {'open-sans'}
						dynamicLite = {false} >
						{'Задайте параметры'}
					</Text>
					<Select onChange={selectFont} selected = {stateForm.fontFamilyOption} options = {fontFamilyOptions} placeholder = {stateForm.fontFamilyOption.value} title='Шрифт' />
					<RadioGroup onChange={selectFontSize} name='Размер шрифта'  options={fontSizeOptions} selected={stateForm.fontSizeOption} title="Размер шрифта"/>
					<Select onChange={selectFontColor} selected = {stateForm.fontColor} options = {fontColors} placeholder = {stateForm.fontColor.title} title='цвет шрифта' />
					<Separator/>
					<Select onChange={selectBackgroudColor} selected = {stateForm.backgroundColor} options = {backgroundColors} placeholder = {stateForm.backgroundColor.title} title='цвет фона' />
					<Select onChange={selectContentWidth} selected = {stateForm.contentWidth} options = {contentWidthArr} placeholder = {stateForm.contentWidth.title} title='ширина контента' />
					<div className={styles.bottomContainer}>
						<Button onClick={hendlReset} title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply'  />
					</div>
				</form>
			</aside>
		</>
	);
};
