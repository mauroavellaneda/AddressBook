const  renderContacts = () => {
    const  contacts = JSON.parse(storage.getItem('contacts'))
  
    let  div = document.querySelector('#contact-list')
    if (contacts) {
      div.innerHTML = ''
      const  ul = document.createElement('ul')
  
      contacts.forEach(contact  => {
          let  li = document.createElement('li')
  
          li.innerHTML = `
            <span>${contact.name}</span> |
            <span>${contact.email}</span> |
            <span>${contact.phone}</span>
          `
          ul.appendChild(li)
        })
              
        div.appendChild(ul)
      } else {
        div.innerHTML = '<p>You have no contacts in your address book yet</p>'
      }
  }