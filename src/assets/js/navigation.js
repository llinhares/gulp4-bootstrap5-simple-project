(function(){
  function ajaxNavigation(hash){
    var className = hash.replace('.html', '').split('/')
    document.body.className = className[className.length - 1]

    if (!hash) return
    
    const target = document.querySelector('[nav-content-target]')

    const url = hash.substring(1)
    fetch(url)
    .then(resp => resp.text())
    .then(html => {
      target.innerHTML = html
    })

    setHeaderAndFooter()
  }

  function initNavigation(){
    if (location.hash) {
      ajaxNavigation(location.hash)
    } else {
      ajaxNavigation('#/pages/home.html')
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[nav-link]')
    .forEach(link => {
      link.href = link.attributes['nav-link'].value
    })
  })
  
  function setHeaderAndFooter(){
    const headerTarget = document.querySelector('[nav-header-target]')
    const footerTarget = document.querySelector('[nav-footer-target]')

    const urlHeader = '/components/header.html'
    const urlFooter = '/components/footer.html'

    Promise.all([
      fetch(urlHeader).then(resp => resp.text()),
      fetch(urlFooter).then(resp => resp.text())
    ]).then(html => {
        headerTarget.innerHTML = html[0]
        footerTarget.innerHTML = html[1]
    })
  }

  window.onhashchange = e => ajaxNavigation(location.hash)
  
  initNavigation()
})()