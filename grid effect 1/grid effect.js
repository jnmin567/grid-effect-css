let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

const wrapper = document.getElementById('tiles');

const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(244, 81, 30)",
    "rgb(76, 175, 80)",
    "rgb(33, 150, 243)",
    "rgb(156, 39, 176)"
];

let count = -1;

const handleOnClick = (event) => {
    count = count + 1;
    const index = parseInt(event.currentTarget.getAttribute('data-index'), 10);

    anime({
        targets: ".tile",
        backgroundColor: colors[count % colors.length],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    });
};

const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute('data-index', index);
    tile.addEventListener("click", handleOnClick);

    return tile;
};

const createTiles = (quantity) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < quantity; i++) {
        fragment.appendChild(createTile(i));
    }
    wrapper.appendChild(fragment);
};

const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
};

createGrid();

window.onresize = createGrid;