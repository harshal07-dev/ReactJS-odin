function Item({ name, isPacked }) {
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   } else {
  //     return <li className="item">{name}</li>;
  //   }
  //   if (isPacked) {
  //     <li className="item">{isPacked ? name + " ✅" : name}</li>;
  //   }
  return (
    <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <ul>
        <Item isPacked={true} name="Bike key" />
        <Item isPacked={true} name="Helmet" />
        <Item isPacked={false} name="Jacket" />
      </ul>
    </section>
  );
}
