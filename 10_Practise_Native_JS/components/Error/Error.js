class Error {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    Нет доступа
                    <p>Попробуйте зайти позже</p>
                </div>
            </div>
        `

        ROOT_ERROR.innerHTML = html;
    }
}

const error = new Error();