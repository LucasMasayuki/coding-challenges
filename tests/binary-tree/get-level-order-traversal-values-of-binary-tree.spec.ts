import BinaryTreeLevelOrderTraversal from '@/binary-tree/level-order-traversal/binary-tree-level-order-traversal'

describe('Get level order traversal values of a binary tree', () => {
  test('Input ["6", "1 2 5 3 6 4"], Expected output: 1 2 5 3 6 4', () => {
    const input = ['6', '1 2 5 3 6 4']

    const binaryTree = new BinaryTreeLevelOrderTraversal<number>()

    const nodesValues = input[1].split(' ')

    nodesValues.forEach((value: string) => {
      binaryTree.insert(parseInt(value, 10))
    })

    const expectedOutput = '1 2 5 3 6 4'
    expect(binaryTree.getLevelOrderTraverseValues().join(' ')).toEqual(expectedOutput)
  })
})
