const Languages = ({languages}) => {
    return (
        <ul>
        {renderLanguages(languages)}
        </ul>
    )
}

const renderLanguages = (languages) => {
    let li = []
    Object.values(languages).forEach(language => {
        li.push(<li>{language}</li>)
    })
    return li
}

export default Languages