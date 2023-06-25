import './styles/parts.css';

const Parts = () => {
  const parts = [
    {
      name: 'Fork',
      description: 'RockShox Judy',
      imageSrc: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/suspension---forks/suspension---forks/fs-judy-gold-rl-a3/c120mmblack3qdv2.png?w=1712&quality=80&format=webp',
      price: 210,
    },
    {
      name: 'Tires',
      description: 'Minion DHF',
      imageSrc: 'https://www.maxxis.com/us/wp-content/uploads/sites/13/2021/01/minion-dhf.jpg',
      price: 70,
    },
    {
      name: 'Drive',
      description: 'SRAM NX',
      imageSrc: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/cranksets/cranksets/fc-nx-1-b1/ps32t175mmblacksidel.jpg?w=1600&quality=80&format=webp',
      price: 113,
    },
    {
      name: 'Post',
      description: 'RockShox Dropper',
      imageSrc: 'https://content.backcountry.com/images/items/1200/RSX/RSX009F/BK.jpg',
      price: 250,
    },
    {
      name: 'Pedals',
      description: 'OneUp',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0284/9430/products/OneUp-Components_SmallCompPedal_PURPLE_Top_8df8ff19-4329-4e9c-9944-7aa14eb04281_grande.jpg?v=1681159532',
      price: 50,
    },
    {
      name: 'Grips',
      description: 'Diety',
      imageSrc: 'https://content.backcountry.com/images/items/1200/DTC/DTC0014/TUR.jpg',
      price: 30,
    },
    {
      name: 'Shades',
      description: 'Smith Ruckus',
      imageSrc: 'https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw47d53c5d/images/product-images/ruckus-sunglasses/ruckus-sunglasses_matteBlack-cpRedMirror_3Q.png?sw=700&sh=700&sm=fit',
      price: 150,
    },
  ];

  const totalCost = parts.reduce((acc, part) => acc + part.price, 0);

  return (
    <div className="parts-container">
      <div className="parts-header">
        <h1>Bike Components</h1>
      </div>
      <div className="parts-list">
        <div className="parts-item">
          {parts.map((part, index) => (
            <div className="part" key={index}>
              <h2>{part.name}</h2>
              <p>{part.description}</p>
              <img className="img" src={part.imageSrc} alt={part.name} />
              <p>${part.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="parts-total">
      <p>Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Parts;