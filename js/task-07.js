const handleChangeFontSize = (event) => {
    refs.input = Number(event.target.value);
    refs.span.style.fontSize = `${refs.input}px`;
}