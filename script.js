const header = document.getElementById('header')
const headerContainer = document.getElementById('headerContainer')
const burgerNav = document.getElementById('burgerNav')
const burgerIcon = document.getElementById('burgerIcon')
const closeIcon = document.getElementById('closeIcon')
const listItems = document.getElementById('listItems')
const btn = document.getElementById('btn')

header.style.backgroundColor = '#dab3ff'
headerContainer.style.maxWidth = '1200px'
headerContainer.style.height = '60px'
headerContainer.style.margin = '0 auto'
headerContainer.style.display = 'flex'
headerContainer.style.justifyContent = 'space-between'
headerContainer.style.alignItems = 'center'
headerContainer.style.color = 'white'
headerContainer.style.position = 'relative'


burgerNav.style.display = 'none'
burgerNav.style.backgroundColor = '#b380ff'
burgerNav.style.position = 'absolute'
burgerNav.style.top = '60px'
burgerNav.style.right = '0'
burgerNav.style.padding = '20px'
burgerNav.style.flexDirection = 'column'
burgerNav.style.rowGap = '20px'
burgerNav.style.alignItems = 'center'
burgerNav.style.width = '230px'
burgerNav.style.zIndex = '-1'

listItems.style.listStyle = 'none'
listItems.style.display = 'flex'
listItems.style.flexDirection = 'column'
listItems.style.rowGap = '10px'
listItems.style.alignItems = 'center'
listItems.style.fontSize = '20px'
listItems.style.fontWeight = 'bold'
listItems.style.padding = '0'
listItems.style.margin = '0'


btn.style.padding = '5px 10px'
btn.style.fontSize = '18px'
btn.style.border = 'none'
btn.style.backgroundColor = 'white'
btn.style.color = '#b380ff'
btn.style.fontWeight = 'bold'
btn.style.borderRadius = '15px'
btn.style.cursor = 'pointer'

burgerIcon.style.fontSize = '40px'
burgerIcon.style.cursor = 'pointer'

closeIcon.style.fontSize = '40px'
closeIcon.style.display = 'none'
closeIcon.style.cursor = 'pointer'

burgerIcon.addEventListener('click', () => {
    burgerNav.style.display = 'flex'
    closeIcon.style.display = 'inline'
    burgerIcon.style.display = 'none'
    burgerNav.style.animation = 'slideDown 1s'
})

closeIcon.addEventListener('click', () => {
    burgerNav.style.display = 'none'
    closeIcon.style.display = 'none'
    burgerIcon.style.display = 'inline'
})


