const submit = document.getElementById('submit')
const submitBtn = document.getElementById('submitBtn')
const check = document.getElementById('check')
const checkBtn = document.getElementById('checkBtn')


const submitFunc = ()=>{
    axios.post('http://localhost:5050/submit',{code:submit.value}).then((res)=>{
        console.log(res.data)
    })
}

const checkFunc = ()=>{
    axios.post('http://localhost:5050/check',{code:check.value}).then((res)=>{
        console.log(res.data)
    })
}
submitBtn.addEventListener('click',submitFunc)
checkBtn.addEventListener('click',checkFunc)