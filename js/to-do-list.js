const inputDiv = document.querySelector('.inputDiv')
const input = document.getElementById('task')
const button = document.getElementById('liveToastBtn')
const list = document.getElementById('list')

button.addEventListener('click', go)

input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        go()
    }
})

function go(){
    if(input.value != ""){
    var li = document.createElement('li')
    var deleteButton = document.createElement('div')
    deleteButton.classList.add('deleteButton')
    deleteButton.innerText = 'X'
    li.innerHTML = input.value
    list.appendChild(li)
    li.appendChild(deleteButton)
    input.value = ""

    deleteButton.addEventListener('click', function(){
    list.removeChild(li)
    })

    li.addEventListener('click', function(){
    li.classList.toggle('karalama')
    })
    var liveToastBtn = document.getElementById("liveToastBtn")
        var liveToast = document.getElementById("liveToast")
        liveToastBtn.addEventListener('click', function(){
          var toast = new bootstrap.Toast(liveToast)
          toast.show()
        })
}    
}


