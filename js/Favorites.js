export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }
  load() {
    this.entries = [
      {
        login: "smksouza",
        name: "Samuel Souza",
        public_repos: "19",
        followers: "120000",
      },
      {
        login: "Muglly",
        name: "Rafael Souza",
        public_repos: "34",
        followers: "100000",
      },
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Image de ${user.name}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
            <td class="user">
              <img
                src="https://github.com/smksouza.png"
                alt="Imagem de smksouza"
              />
              <a href="https://github.com/smksouza" target="_blank">
                <p>Samuel Souza</p>
                <span>smksouza</span>
              </a>
            </td>
            <td class="repositories">19</td>
            <td class="followers">1</td>
            <td>
              <button class="remove">&times;</button>
            </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}
