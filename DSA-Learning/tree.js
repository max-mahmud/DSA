// //? tree
// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//? Insertion
//   insert(value) {
//     const newNode = new TreeNode(value);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       this.insertRecursively(this.root, newNode);
//     }
//   }
//   insertRecursively(root, newNode) {
//     if (root.value > newNode.value) {
//       if (!root.left) {
//         root.left = newNode;
//       } else {
//         this.insertRecursively(root.left, newNode);
//       }
//     } else {
//       if (!root.right) {
//         root.right = newNode;
//       } else {
//         this.insertRecursively(root.right, newNode);
//       }
//     }
//   }

//? Search
//   search(value) {
//     return this._searchRecursively(this.root, value);
//   }

//   _searchRecursively(node, value) {
//     if (!node) return false;
//     if (value === node.value) return true;
//     if (value < node.value) {
//       return this._searchRecursively(node.left, value);
//     } else {
//       return this._searchRecursively(node.right, value);
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }
//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }
//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }

//   breadthFirstSearch() {
//     if (!this.root) return [];

//     const result = [];
//     const queue = [this.root];

//     while (queue.length > 0) {
//       const current = queue.shift();
//       result.push(current.value);

//       if (current.left) {
//         queue.push(current.left);
//       }
//       if (current.right) {
//         queue.push(current.right);
//       }
//     }
//     return result;
//   }
//? MIN & MAX
//   findMinRecursively(node) {
//     if (!node) return null;
//     while (node.left) {
//       node = node.left;
//     }
//     return node.value;
//   }

//   findMaxRecursively(node) {
//     if (!node) return null;
//     while (node.right) {
//       node = node.right;
//     }
//     return node.value;
//   }

//   //TODO/ I am not able to understand
//   // Delete a node
//   delete(value) {
//     this.root = this._deleteRecursively(this.root, value);
//   }

//   _deleteRecursively(node, value) {
//     if (!node) return null;

//     if (value < node.value) {
//       node.left = this._deleteRecursively(node.left, value);
//     } else if (value > node.value) {
//       node.right = this._deleteRecursively(node.right, value);
//     } else {
//       if (!node.left) {
//         return node.right;
//       } else if (!node.right) {
//         return node.left;
//       }

//       const minRight = this.findMinRecursively(node.right);
//       node.value = minRight.value;
//       node.right = this._deleteRecursively(node.right, minRight.value);
//     }

//     return node;
//   }

//   isTreeEmpty() {
//     return this.root === null;
//   }
// }

// let tree = new BinarySearchTree();
// tree.insert(20);
// tree.insert(10);
// tree.insert(5);
// tree.insert(11);
// tree.insert(30);
// tree.insert(23);
// tree.insert(40);
// console.log(tree);
// tree.inOrder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// console.log(tree.search(15));
// console.log("Breadth-First Search:", tree.breadthFirstSearch());
// console.log(tree.findMinRecursively(tree.root));
// console.log(tree.findMaxRecursively(tree.root));

// tree.delete(20); // Deleting a node

// // console.log(tree);

//? Graph

class Graph {
  constructor() {
    this.vertices = 0;
    this.data = {};
  }

  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
      this.vertices++;
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.data.hasOwnProperty(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.data.hasOwnProperty(vertex2)) {
      this.addVertex(vertex2);
    }

    this.data[vertex1].push(vertex2);
    this.data[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.data[vertex1] && this.data[vertex2]) {
      this.data[vertex1] = this.data[vertex1].filter((v) => v !== vertex2);
      this.data[vertex2] = this.data[vertex2].filter((v) => v !== vertex1);
    }
  }

  removeVertex(vertex) {
    if (this.data[vertex]) {
      // Remove the vertex from the graph
      delete this.data[vertex];

      // Remove all edges incident to the vertex
      for (const otherVertex in this.data) {
        this.data[otherVertex] = this.data[otherVertex].filter((v) => v !== vertex);
      }

      this.vertices--;
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex("A");

myGraph.addEdge("A", "B");
myGraph.addEdge("C", "A");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "B");

// myGraph.removeEdge("B", "D");
myGraph.removeVertex("A");
console.log(myGraph.data);
