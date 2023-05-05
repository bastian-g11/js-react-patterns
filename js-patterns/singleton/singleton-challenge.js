let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error("Only one connection can exist!");
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const databaseConnector = Object.freeze(new DBConnection());
export default databaseConnector;

// ******** Object approach
const dbConnection = (uri) =>
  Object.freeze({
    uri,
    connect: () => {
      console.log(`DB ${this.uri} has been connected!`);
    },
    disconnect: () => {
      console.log("DB disconnected");
    },
  });

const connection = dbConnection("test");
connection.isConnected();
// export default connection;

// **********ChatGPT Suggestion of a singleton using Object notation
// const DBConnection = {
//   instance: null,
//   create(uri) {
//     if (this.instance) {
//       throw new Error('Only one connection can exist!');
//     }
//     const connection = {
//       uri,
//       isConnected: false,
//       connect() {
//         this.isConnected = true;
//         console.log(`DB ${this.uri} has been connected!`);
//       },
//       disconnect() {
//         this.isConnected = false;
//         console.log('DB disconnected');
//       },
//     };
//     this.instance = connection;
//     return connection;
//   },
// };

// const databaseConnector = Object.freeze(DBConnection.create('mongodb://localhost/mydatabase'));
// const connection = databaseConnector;
