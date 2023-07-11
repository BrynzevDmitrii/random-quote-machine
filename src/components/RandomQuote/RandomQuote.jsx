import styles from './RandomQuote.module.scss'

export const RandomQuote = (props) => {
    return ( 
        <div>
            {
                JSON.stringify(props.quote) === '{}'?
                <div className={styles.loading}> Загрузка...</div>:
                <div className={styles.quoteWrapper}>
                    <span className={styles.textQuote}>{ props.quote.quoteText }</span>
                    <span className={styles.author}>{ props.quote.quoteAuthor }</span>
                </div>
               
            }
            
            
        </div>
     );
}

