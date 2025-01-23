const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                          <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                          <div class="data">
                                              <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                              <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>

                                              <p><span>Followers: <span>${user.followers ?? 'Não possui seguidores 😢'}</p>
                                              <p><span>Following: <span>${user.following ?? 'Não segue ninguém 😢'}</p
                                          </div>
                                      </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        let eventItens = ''
        user.eventList.forEach(eventList => {
            console.log(eventList)
            if (eventList.type === "CreateEvent") eventItens += "<li>“Sem mensagem de commit”</li>"
            else eventItens += `<li><span class="repoName">${eventList.repo.name}</span> - ${eventList.type}</li>`
        })

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        if(user.eventList.length > 0) {
            this.userProfile.innerHTML += `<div class="eventList section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }