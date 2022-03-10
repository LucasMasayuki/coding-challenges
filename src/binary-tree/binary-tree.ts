import { BinaryTreeNode } from '@/binary-tree/binary-tree-node'

export default class BinaryTree<T> {
    protected root: BinaryTreeNode<T> | undefined

    private _createNewNode (value: T): BinaryTreeNode<T> {
      return {
        value,
        left: null,
        right: null
      }
    }

    public getroot(): BinaryTreeNode<T> | undefined{
        return this.root
    }

    private _insertIntoCurrentNode (currentNode: BinaryTreeNode<T>): void {
      const { value } = currentNode
      const traverse = (node?: BinaryTreeNode<T> | undefined): void => {
        if (node == null) {
          return
        }

        // console.log(`current node: ${node.value}`)

        if (value > node.value) {
          if (node.right == null) {
            node.right = currentNode
          } else {
            traverse(node.right)
          }
        } else if (value < node.value) {
          if (node.left == null) {
            node.left = currentNode
          } else {
            traverse(node.left)
          }
        }
      }

      traverse(this.root)
    }

    public insert (value: T): this {
      const currentNode = this._createNewNode(value)
      if (this.root == null) {
        this.root = currentNode
      } else {
        this._insertIntoCurrentNode(currentNode)
      }

      return this
    }
}
