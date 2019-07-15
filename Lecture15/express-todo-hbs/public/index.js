window.onload = () => {
  document.getElementById('addBand').onsubmit = async function (e) {
    e.preventDefault()
    const band = await fetch('/api/bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
    
    // const response = await fetch('/api/bands', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const band = await response.json()

    document.getElementById('list').append(`<li> ${band.title} </li>`)
  }
}