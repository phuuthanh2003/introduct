const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tab = $$('.box_content .myStt .details')
const first = $('.idea .dashboard.first')
console.log(first)

const content = tab.forEach(function(item, index) {
    item.onclick = function() {
        $('.box_content .myStt .details.active').classList.remove('active')
        this.classList.add('active')

        first.style.marginLeft = -100 * index + '%'
    }
})

function getImg() {
    const input = $('.box .box_info .avatar input[type="file"]')
    const img = $('.box .box_info .avatar img')
    input.addEventListener('change', function() {
        img.src = URL.createObjectURL(input.files[0])
    })
}

getImg()
