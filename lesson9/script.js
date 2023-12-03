if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = [
        {
            name: 'Каталог товаров',
            hasChildren: true,
            items: [
                {
                    name: 'Мойки',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                        }
                    ]
                },
                {
                    name: 'Handmade',
                    hasChildren: true,
                    items:[
                        {
                            name: 'Smth',
                            hasChildren: false,
                            items: []
                        },
                        {
                            name: 'Smth',
                            hasChildren: false,
                            items: []
                        }
                    ]
                    
                },
                {
                    name: 'Vigro Glass',
                    hasChildren: false,
                    items: []
                },
                {
                    name: 'Фильтры',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Vigro Mramor',
                            hasChildren: false,
                            items: []
                        }
                    ]
                }
            ]
        }
    ];

    const listContainer = document.getElementById('list-items');
    const items = new ListItems(listContainer, data);
    items.render();

    function ListItems(container, data) {
        this.container = container;
        this.data = data;

        this.render = function () {
            this.renderItems(this.data, this.container);
        };

        this.renderItems = function (items, parent) {
            items.forEach((item) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('list-item', 'list-item_open');
                
                const innerDiv = document.createElement('div');
                innerDiv.classList.add('list-item__inner');

                const arrowImg = document.createElement('img');
                arrowImg.classList.add('list-item__arrow');
                arrowImg.src = 'img/chevron-down.png';
                
                if (item.hasChildren) {
                    arrowImg.addEventListener('click', () => {
                        itemDiv.classList.toggle('list-item_open');
                    });
                } else {
                    arrowImg.style.visibility = 'hidden';
                }
                
                innerDiv.appendChild(arrowImg);

                const folderImg = document.createElement('img');
                folderImg.classList.add('list-item__folder');
                folderImg.src = 'img/folder.png';
                innerDiv.appendChild(folderImg);

                const titleSpan = document.createElement('span');
                titleSpan.innerText = item.name;
                innerDiv.appendChild(titleSpan);

                itemDiv.appendChild(innerDiv);

                if (item.hasChildren) {
                    const childDiv = document.createElement('div');
                    childDiv.classList.add('list-item__items');
                    this.renderItems(item.items, childDiv);
                    itemDiv.appendChild(childDiv);
                }

                parent.appendChild(itemDiv);
            });
        };
    }
}
