console.log('client side java script code')


const form = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
form.addEventListener('submit', (event) =>
{

    event.preventDefault()
    console.log('1')
    const location = search.value
    message1.textContent = 'Loading...'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) =>
    {
        response.json().then((data) =>
        {
            if (data.error) {
                console.log(data.error);
                message1.textContent = data.error
            }
            else {
                console.log(data.location)
                console.log(data.forecast)
                message1.textContent = data.location
                message2.textContent = data.forecast.temperature + ' ' + 'Degrees In Celsius'
            }

        })
    })

})