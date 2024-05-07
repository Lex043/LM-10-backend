const products = [
    {
        name: "Copa America",
        price: 333,
        slug: "copa-america",
        imageUrl:
            "https://i.ibb.co/QNfQcbw/4f97bf153781437-Y3-Jvc-Cw1-NTUw-LDQz-NDEs-MTM0-Niww.webp",
        category: "Originals",
        words: "2021 Copa America Win. Messi, 34, went into the tournament after four failed attempts for Argentina in finals, and the Albiceleste lifted the Copa America after a 1-0 win over Brazil at the Maracana stadium on July 11.",
    },
    {
        name: "World Class",
        price: 350,
        slug: "world-class",
        imageUrl: "https://i.ibb.co/MZtQHRw/ebce1e73940305-5c1a8f2cd55fc.webp",
        category: "Limited Edition",
        words: "He is the best player I have ever seen. The best thing about him is not what he does, but how simple he makes everything look. He is not just the best player because he can dribble past three or four players, it is because he does it better than anyone in the world.",
    },
    {
        name: "Unbelievable",
        price: 250,
        slug: "unbelievable",
        imageUrl:
            "https://i.ibb.co/mzFkxKf/b88a99163774347-Y3-Jvc-Cwx-OTgz-LDE1-NTEs-MCwy-Nzk.webp",
        category: "Featured",
        words: "He was diagnosed with a growth hormone deficiency as a child, which required expensive treatment and put a strain on his family's finances. In 2021, he won his first major international trophy, guiding Argentina to a Copa America triumph. He helped his country lift their third World Cup title in Qatar a year later.",
    },
    {
        name: "Idan",
        price: 500,
        slug: "idan",
        imageUrl:
            "https://i.ibb.co/Jc6KFDK/e4e7e766347343-Y3-Jvc-Cw0-Mzks-Mz-Qz-LDI4-OCw2-NA.webp",
        category: "Featured",
        words: "At the age of 17, he made his league debut against RCD Espanyol and became the third youngest person ever to play on Barcelona. At that time he was also the youngest player to ever score for Barcelona.",
    },
    {
        name: "Original",
        price: 700,
        slug: "original",
        imageUrl:
            "https://i.ibb.co/kmM245w/2c4fbe160815683-Y3-Jvc-Cwx-OTIw-LDE1-MDEs-MCwz-MTg.webp",
        category: "Originals",
        words: "A forward or attacking midfielder, Messi is blessed with outstanding ball control and pace and he's one of the finest players the game has seen.",
    },
    {
        name: "Skillful",
        price: 400,
        slug: "skillful",
        imageUrl: "https://i.ibb.co/pz3SjvJ/af92d6159152353-6398df9b81db3.webp",
        category: "Limited Edition",
        words: "Lionel Messi is one of the best dribblers of all time. The unique thing about Messi as opposed to the other players on this list is that he is not one to do flashy tricks. The record seven-time Ballon d'Or winner uses his incredible close control, drop of the shoulder and hip swivels to get the better of his opponents.",
    },
    {
        name: "Sorcerer",
        price: 777,
        slug: "sorcerer",
        imageUrl:
            "https://i.ibb.co/MM7QRMZ/eb62a3169368255-Y3-Jvc-Cwx-NTAw-LDEx-Nz-Ms-MCw0-Nj-Q.webp",
        category: "Limited Edition",
        words: "Lionel Messi has earned the title of a magician. For what he produces on the football pitch. Zig zag dribbles, cutting edge passes that no one else sees, and astonishing goals.",
    },
    {
        name: "Goat",
        price: 333,
        slug: "goat",
        imageUrl:
            "https://i.ibb.co/vxyCDCF/4e72ac167620351-Y3-Jvc-Cwx-MTk2-LDkz-NSwz-Mz-Qs-Nj-Ix.webp",
        category: "Originals",
        words: "Lionel Messi—probably the best player in the world today. He is one of the finest and most exciting footballing talents in the world. He had this never ending comparison with the former Manchester United Winger Cristiano Ronaldo but he kind of shrugged off it by helping his team defeat Manchester United convincingly in the UEFA Champions League finals at Rome 2009.",
    },
    {
        name: "Class",
        price: 250,
        slug: "class",
        imageUrl:
            "https://i.ibb.co/cbzHXMw/5b13f8159414699-Y3-Jvc-Cw4-MDgs-Nj-My-LDAs-MA.webp",
        category: "Limited Edition",
        words: "Messi rarely does stepovers and La Croqueta, a move popularized by his former teammate and legendary midfielder Andres Iniesta, is one of his go-to moves. He simply shifts the ball from one foot to the other to evade a challenge before heading past the on-rushing defender with his burst of pace.",
    },
    {
        name: "New Era",
        price: 550,
        slug: "new-era",
        imageUrl:
            "https://i.ibb.co/fDh4hJ4/4cdfab116614271-Y3-Jvc-Cwx-MTY5-LDkx-NCwx-MDks-Nj-Mw.webp",
        category: "Featured",
        words: "Lionel Messi has finally signed his eagerly anticipated Paris Saint-Germain (PSG) contract to complete the move that confirms the end of a career-long association with Barcelona and sends PSG into a new era.",
    },
    {
        name: "Genius",
        price: 650,
        slug: "genius",
        imageUrl:
            "https://i.ibb.co/GPhpBZT/2bbb3a95114393-Y3-Jvc-Cwx-NDAw-LDEw-OTUs-MCwz-MQ.webp",
        category: "Latest",
        words: "According to sources and the Guinness website, Lionel Messi possesses as many as 60 Guinness World records to his name. Argentine superstar Lionel Messi is arguably the greatest footballer of his generation and one of the best players of all time.",
    },
    {
        name: "Alien",
        price: 450,
        slug: "alien",
        imageUrl: "https://i.ibb.co/GPNpXLr/8107af146610383-62b34b3634853.webp",
        category: "Latest",
        words: "When you think he is going to lose it, he comes away with it. When you think he doesn’t see you, he leaves you 1vs1 against the keeper.",
    },
    {
        name: "Baller",
        price: 450,
        slug: "baller",
        imageUrl:
            "https://i.ibb.co/YPprL6q/48e100160199357-Y3-Jvc-Cwz-MTM0-LDI0-NTIs-MTg2-LDA.webp",
        category: "Featured",
        words: "At 22, Messi got his first FIFA World Player of the Year award. After that, he made efforts to keep that award in his possession by winning the award for the next 3 years.",
    },
    {
        name: "A New Beginning",
        price: 550,
        slug: "a-new-beginning",
        imageUrl:
            "https://i.ibb.co/VDBpktP/8d92ce159658003-Y3-Jvc-Cwx-NDAw-LDEw-OTUs-MCwy-MTg.webp",
        category: "Latest",
        words: "The defining image of this World Cup was just about its last one. There was a kiss for the trophy. Lionel Messi finally became acquainted with the World Cup. On a night high on drama and higher on emotion, it had the perfect ending for the greatest of them all.",
    },
    {
        name: "World Cup",
        price: 500,
        slug: "world-cup",
        imageUrl:
            "https://mir-s3-cdn-cf.behance.net/projects/808/aba649160354591.Y3JvcCwxMDAwMCw3ODIxLDAsNjE4.jpg",
        category: "Originals",
        words: "After Argentina's victory over France in Sunday's thriller and jaw-dropping World Cup final held in Qatar’s Doha, there shouldn’t be any noise surrounding the maestro. In a glittering career that has spanned three decades, the footballer has bagged a record 37 club trophies, seven Ballon D'Or awards and six European Golden Boots.",
    },
    {
        name: "The Best",
        price: 750,
        slug: "the-best",
        imageUrl:
            "https://i.ibb.co/M1gTz0G/73b09532789969-Y3-Jvc-Cwy-Nzcz-LDIx-Njks-Mz-Uz-LDQ4-Mw.webp",
        category: "Latest",
        words: "Argentinian footballer Lionel Messi, widely regarded as one of the greatest players of all time, has received seven Ballon d'Or awards, the most for any football player, as well as the 2009 FIFA World Player of the Year, and the 2019 and 2022 The Best FIFA Men's Player.",
    },
];

module.exports = products;
