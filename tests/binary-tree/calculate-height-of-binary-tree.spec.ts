import BinaryTreeCalculateHeight from '@/binary-tree/calculate-height/binary-tree-calculate-height'

describe('Calculate height of a binary tree', () => {
  test('Input ["7", "3 5 2 1 4 6 7"], Expected Output: 3', () => {
    const input = ['7', '3 5 2 1 4 6 7']

    const binaryTree = new BinaryTreeCalculateHeight<number>()

    const nodesValues = input[1].split(' ')

    nodesValues.forEach((value: string) => {
      binaryTree.insert(parseInt(value, 10))
    })

    const expectedOutput = 3
    expect(binaryTree.calculateHeight()).toEqual(expectedOutput)
  })
})
