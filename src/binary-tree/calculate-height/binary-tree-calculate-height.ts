import { BinaryTreeNode } from '@/binary-tree/binary-tree-node'
import BinaryTree from '../binary-tree'

export default class BinaryTreeCalculateHeight<T> extends BinaryTree<T>  {
    public calculateHeight(): number {
        const maxDepth = (node?: BinaryTreeNode<T> | null | undefined): number => {
            if (!node)  {
                return -1
            }

            const leftHeight = maxDepth(node.left)
            const rightHeight = maxDepth(node.right)

            // console.log(`value: ${node.value}`)
            // console.log(`left height: ${leftHeight}`)
            // console.log(`right height: ${rightHeight}`)

            const useTheLeftHeight = leftHeight > rightHeight
            if (useTheLeftHeight)  {
                return(leftHeight + 1)
            }

            return(rightHeight + 1)
        }


        return maxDepth(this.root)
    }
}