import { BinaryTreeNode } from '@/binary-tree/binary-tree-node'
import BinaryTree from '../binary-tree'

export default class BinaryTreeLevelOrderTraversal<T> extends BinaryTree<T>  {
    public getLevelOrderTraverseValues(initialNode = this.root): T[] {

        if (!initialNode) {
            return []
        }

        const levelTraverseValues: T[] = []
        let currentQueue = [initialNode]
        let nextQueue: BinaryTreeNode<T>[] = []
        let queues = [
            currentQueue,
            nextQueue,
        ]
        let levelNumber = 0

        while (currentQueue.length > 0) {
            let node = currentQueue.shift()

            if (!node) {
                continue
            }

            levelTraverseValues.push(node.value)

            if (node.left) {
                nextQueue.push(node.left)
            }

            if (node.right) {
                nextQueue.push(node.right)
            }

            if (currentQueue.length === 0) {
                levelNumber += 1
                currentQueue = queues[levelNumber % 2]
                nextQueue = queues[(levelNumber + 1) % 2]
            }
        }

        return levelTraverseValues
    }
}