// your code here
const btn = document.querySelector('#button')
const input_text = document.querySelector('#name')
const input_year = document.querySelector('#year')
const heading = document.querySelector('#url')
const baseUrl = heading.innerText

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let text = input_text.value
    let year = input_year.value
    let newText = ""
	if(text && year){
		newText = `${baseUrl}?name=${encodeURIComponent(text)}&year=${year}`
	}
    else if(text && !year){
        newText = `${baseUrl}?name=${encodeURIComponent(text)}`
    }
    else if(!text && year){
        newText = `${baseUrl}?year=${encodeURIComponent(year)}`
    }
    heading.innerText = newText
	input_text.value = ""
	input_year.value = ""
})