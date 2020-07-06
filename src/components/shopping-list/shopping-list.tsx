import React from "react";

interface Props {
  name: string
}

export class ShoppingList extends React.Component<Props> {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">Instagram</li>
          <li className="list-group-item">WhatsApp</li>
          <li className="list-group-item">Oculus</li>
        </ul>
      </div>
    );
  }
}
