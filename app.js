import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.idobata.io/graphql', {
    headers: {
      'Authorization': `Bearer ${process.env.IDOBATA_TOKEN}`
    }
  })
)

class AppRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer
      }
    `
  };
  static routeName = 'AppRoute';
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello @{this.props.viewer.name}!
          <img src={this.props.viewer.iconUrl}/>
        </h1>
        {
          this.props.viewer.rooms.edges.map(roomEdge =>
            <div key={roomEdge.node.id}>
              <h2>
                {roomEdge.node.name}
              </h2>
            </div>
          )
        }
      </div>
    )
  }
}

App = Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Guy {
        name, iconUrl

        rooms(first: 5) {
          edges {
            node {
              id, name
            }
          }
        }
      }
    `,
  },
});

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppRoute()}
  />,
  document.getElementById('root')
);
