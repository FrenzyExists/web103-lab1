
export type gift = {
    id: number;
    name: string;
    pricePoint: number;
    priceUnit: "$"|"€"|"£"|"¥"|"₡"|"₩"
    audience: string;
    image: string;
    description: string;
    submittedBy: string;
    submittedOn: Date|string;
}

export const giftData: gift[] = [
      {
        "id": 1,
        "name": "Red Bull",
        "pricePoint": 2.50,
        "priceUnit": "$",
        "audience": "Energy Seekers",
        "image": "https://i5.walmartimages.com/asr/40de3939-41f1-449a-98dd-5471ff90326f_1.8e1209872ec81b240d1ba73b73c446a4.jpeg",
        "description": "Gives you wings, perfect for those always on the go.",
        "submittedBy": "Tony Montana",
        "submittedOn": "2023-05-12T10:30:00"
      },
      {
        "id": 2,
        "name": "Gold Cuban Cigar",
        "pricePoint": 50.00,
        "priceUnit": "$",
        "audience": "Cigar Aficionados",
        "image": "https://www.mycigarsite.com/wp-content/uploads/2021/04/Cuban-Cigar-101-Guide.jpg",
        "description": "The finest cigar with a gold tip for the elite.",
        "submittedBy": "Vito Corleone",
        "submittedOn": "2022-09-04T14:48:00"
      },
      {
        "id": 3,
        "name": "Louis Vuitton Wallet",
        "pricePoint": 600.00,
        "priceUnit": "€",
        "audience": "Luxury Lovers",
        "image": "https://freebuyer.ru/images/202011/source_img/231811_1/2020-louis-vuitton-wallets-for-men--231811-cheap-louis-vuitton-wallet.jpg",
        "description": "For those who like to keep their cash in style.",
        "submittedBy": "Michael Corleone",
        "submittedOn": "2023-01-22T08:45:00"
      },
      {
        "id": 4,
        "name": "Noise Cancelling Headphones",
        "pricePoint": 300.00,
        "priceUnit": "$",
        "audience": "Music Enthusiasts",
        "image": "https://cdn-s3.touchofmodern.com/products/001/596/443/87ea4bc25ecae7ae4171e42495864168_large.jpg?1566507116",
        "description": "Block out the noise, focus on the beats.",
        "submittedBy": "Vincent Vega",
        "submittedOn": "2023-02-14T16:00:00"
      },
      {
        "id": 5,
        "name": "Vintage Leather Jacket",
        "pricePoint": 120.00,
        "priceUnit": "£",
        "audience": "Retro Style Gurus",
        "image": "https://happygentleman.com/wp-content/uploads/2019/11/mens-distressed-brown-vintage-leather-jacket1.jpg",
        "description": "A throwback to the old-school, for those who never go out of style.",
        "submittedBy": "Jules Winnfield",
        "submittedOn": "2023-04-10T19:20:00"
      },
      {
        "id": 6,
        "name": "Crystal Decanter Set",
        "pricePoint": 200.00,
        "priceUnit": "$",
        "audience": "Whiskey Lovers",
        "image": "https://b3h2.scene7.com/is/image/BedBathandBeyond/109230960605566p?$690$&wid=690&hei=690",
        "description": "Elegance in every pour, for the true connoisseur.",
        "submittedBy": "Sonny Corleone",
        "submittedOn": "2022-11-18T11:15:00"
      },
      {
        "id": 7,
        "name": "Limited Edition Sneakers",
        "pricePoint": 250.00,
        "priceUnit": "$",
        "audience": "Sneakerheads",
        "image": "https://i1.wp.com/hypebeast.com/image/2016/05/nike-limited-edition-sneakers-for-palais-of-speed-4.jpg?quality=95&w=1755",
        "description": "Exclusive kicks for those who stay ahead of the game.",
        "submittedBy": "Clemenza",
        "submittedOn": "2023-06-07T13:45:00"
      },
      {
        "id": 8,
        "name": "Vinyl Record Player",
        "pricePoint": 175.00,
        "priceUnit": "€",
        "audience": "Vinyl Collectors",
        "image": "https://www.tentopproduct.com/wp-content/uploads/2018/05/8.-Crosley-CR704C-PA-Record-Player.jpg",
        "description": "For those who know music sounds better with a crackle.",
        "submittedBy": "Frank Lucas",
        "submittedOn": "2022-12-25T18:20:00"
      },
      {
        "id": 9,
        "name": "Samurai Sword",
        "pricePoint": 1000.00,
        "priceUnit": "¥",
        "audience": "Weapon Collectors",
        "image": "https://cdn.shopify.com/s/files/1/2234/4067/products/DSC05982_1024x1024@2x.jpg?v=1617661668",
        "description": "A handcrafted blade for the ultimate warrior.",
        "submittedBy": "O-Ren Ishii",
        "submittedOn": "2023-03-15T09:00:00"
      },
      {
        "id": 10,
        "name": "Scented Candle Set",
        "pricePoint": 35.00,
        "priceUnit": "$",
        "audience": "Candle Lovers",
        "image": "https://images-na.ssl-images-amazon.com/images/I/71h9XbDJwcL._SL1500_.jpg",
        "description": "Relaxing scents to set the mood right.",
        "submittedBy": "Mia Wallace",
        "submittedOn": "2023-07-20T17:30:00"
      }
    ]
  