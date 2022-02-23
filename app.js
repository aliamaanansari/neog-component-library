const sideBar = document.querySelector('.side-bar')

const navOptions = {
  Avatar: ['large', 'medium', 'small'],
  Alert: ['error', 'info', 'warning ', 'success'],
}

const createNavbar = () => {
  let output = ''
  Object.keys(navOptions).forEach((key) => {
    /*html*/
    output += `
        <div class="nav-item">
          <div class="nav-items-heading">
            <a>${key}</a>
          </div>
           <div class="nav-sub-items">
         ${createSubMenus(navOptions[key], key)}</div>
         </div>`
  })
  return output
}
const createSubMenus = (menus = [], key) => {
  let output = ''
  menus.forEach((item) => {
    /*html*/
    output += `<a href="#${`${item}-${key}`.replace(/\s/g, '-')}">${item}</a>`
  })
  return output
}

sideBar.innerHTML = createNavbar()
