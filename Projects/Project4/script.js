document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const subjects = [];
    document.querySelectorAll("input[name='subjects']:checked").forEach(function(checkbox) {
        subjects.push(checkbox.value);
    });
    const device = document.getElementById("device").value;

    const data = {
        name: name,
        subjects: subjects,
        device: device
    };

    fetch('юрл вебхуку', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Нове опитування:
            Ім'я: ${data.name}
            Предмети ЗНО: ${data.subjects.join(", ")}
            Пристрій для Інтернету: ${data.device}`
        })
    })
    .then(response => response.json())
    .then(data => {
        // alert("Данные отправлено!");
    })
    .catch(error => {
        console.error('Помилка:', error);
        // alert("Случилась ошибка при отправке данных!");
    });
});
