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

const cardContainer = document.querySelector(".row")

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
                            class="btn btn-sm btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#gameModal"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
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
