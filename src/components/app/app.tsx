import { useState } from 'react';
import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from 'src/styles/index.module.scss';
import {CSSProperties } from 'react';

export const App = () => {

	const [currentArticleState, setCurrentArticleState] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={{
				'--font-family': currentArticleState.fontFamilyOption.value,
				'--font-size': currentArticleState.fontSizeOption.value,
				'--font-color': currentArticleState.fontColor.value,
				'--container-width': currentArticleState.contentWidth.value,
				'--bg-color': currentArticleState.backgroundColor.value} as CSSProperties
			}>
			<ArticleParamsForm  currentArticleState={currentArticleState} setCurrentArticleState={setCurrentArticleState}/>
			<Article />
		</main>
	);
};