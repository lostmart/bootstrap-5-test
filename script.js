const gameList = [
	{
		title: "Minecraft",
		year: 2009,
		imageUrl: "https://pbs.twimg.com/media/FTsV3NLWQAEFfXJ.jpg:large",
	},
	{
		title: "Fortnite",
		year: 2017,
		imageUrl:
			"https://www.creocommunity.de/wp-content/uploads/2021/12/Fortnite_blog_season-5_BR05_Social_-Launch_Hero-Line-Up-1920x1080-2117b3d382b87887271a17a78122b7316ff0c1c0.jpg",
	},
	{
		title: "Baldur's Gate 3",
		year: 2023,
		imageUrl:
			"https://static.fnac-static.com/multimedia/Images/FD/Comete/166361/CCP_IMG_1200x800/2208556.jpg",
	},
	{
		title: "FC24",
		year: 2023,
		imageUrl:
			"https://media.wired.com/photos/6516df152a96d14834d98190/master/pass/EA-FC-Is-Just-FIFA-Culture.jpg",
	},
	{
		title: "Half life 2",
		year: 2004,
		imageUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
	},
	{
		title: "Pokemon 3D",
		year: 2016,
		imageUrl:
			"https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/b8nqzuddauabjnwo4qjn",
	},
]

/*  DOM ELEMENTS */
const cardContainer = document.querySelector(".row")
/* modal */
const modalTitle = document.querySelector(".modal-title")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

gameList.forEach((game) => {
	cardContainer.innerHTML += `
        <div class="col">
            <article class="card shadow-sm">
               <img class="card-img-top" src="${game.imageUrl} " alt="${game.title} " >
               <div class="card-body">
                  <h5 class="card-title">${game.title} </h5>
                  <p class="card-text">Year: ${game.year} </p>
                  <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary view"
                            data-bs-toggle="modal"
                            data-bs-target="#gameModal"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary edit"
                            data-bs-toggle="modal"
                            data-bs-target="#gameModal"
                        >
                            Edit
                        </button>
                    </div>
               </div>
            </article>
        </div>
    `
})

const viewBtns = document.querySelectorAll(".view")
const editBtns = document.querySelectorAll(".edit")

viewBtns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		modalTitle.innerHTML = gameList[i].title
		modalBody.innerHTML = `
            <img class="img-fluid" src="${gameList[i].imageUrl}" alt="${gameList[i].title}" >
        `
		modalBody.innerHTML += `<p class="mt-2">Year: ${gameList[i].year}</p>`

		modalFooter.innerHTML = `
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close
            </button>
        `
	})
})

editBtns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		modalTitle.innerHTML = "Edit mode !"

		modalBody.innerHTML = `
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" value="${gameList[i].title}" >
                </div>

                <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="number" autocomplete="off" class="form-control" id="year" value="${gameList[i].year}" >
                </div>

                 <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="text" autocomplete="off" class="form-control" id="imageUrl" value="${gameList[i].imageUrl}" >
                    <img class="img-thumbnail mt-2 w-50" src="${gameList[i].imageUrl}"  >
                
                </div>                             
        
        `

		modalFooter.innerHTML = `
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
            </button>
            <button
                type="submit"
                class="btn btn-primary submit"
                data-bs-dismiss="modal">
                Save changes
            </button>

            </form>
        `

		const submitBtn = document.querySelector(".submit")

		/*  submit btn click  */
		submitBtn.addEventListener("click", () => {
			const formTitle = document.querySelector("form").title.value
			const formYear = document.querySelector("form").year.value
			const formImageUrl = document.querySelector("form").imageUrl.value

			/*  form validation */
			// emptinness
			if (formTitle === "" || formYear === "" || formImageUrl === "") {
				alert("Values cannot be empty!")
				return
			}

			const alphanumericRegex = /^[a-zA-Z0-9/.:-_ 'éùçà(),-=?&]+$/
			/* alphanumeric test */
			if (
				!alphanumericRegex.test(formTitle) ||
				!alphanumericRegex.test(formYear) ||
				!alphanumericRegex.test(formImageUrl)
			) {
				alert("No weird characters !!")
				return
			}

			gameList[i].title = formTitle
			gameList[i].year = formYear
			gameList[i].imageUrl = formImageUrl

			/*  select card  */
			document.querySelectorAll(".card-title")[i].innerHTML = gameList[i].title
			document.querySelectorAll(".card-text")[
				i
			].innerHTML = `Year: ${gameList[i].year}`
			document.querySelectorAll(".card-img-top")[i].src = gameList[i].imageUrl
		})
	})
})
