import heapq


class Node:
    def __init__(self, character, frequency):
        self.character = character
        self.frequency = frequency
        self.left = None
        self.right = None


def build_frequency_table(data):
    frequency_table = {}
    for character in data:
        if character in frequency_table:
            frequency_table[character] += 1
        else:
            frequency_table[character] = 1

    return frequency_table


def build_huffman_tree(frequency_table):
    nodes = []
    for character, frequency in frequency_table.items():
        nodes.append(Node(character, frequency))

    while len(nodes) > 1:
        nodes.sort(key=lambda node: node.frequency)

        left_node = nodes.pop(0)
        right_node = nodes.pop(0)

        parent_node = Node(None, left_node.frequency + right_node.frequency)
        parent_node.left = left_node
        parent_node.right = right_node

        nodes.append(parent_node)

    return nodes[0]


def build_code_table(huffman_tree):
    code_table = {}

    def _build_code(node, code):
        if node.character is not None:
            code_table[node.character] = code
            return

        if node.left is not None:
            _build_code(node.left, code + "0")

        if node.right is not None:
            _build_code(node.right, code + "1")

    _build_code(huffman_tree, "")

    return code_table


def compress_data(data):

    frequency_table = build_frequency_table(data)

    huffman_tree = build_huffman_tree(frequency_table)

    code_table = build_code_table(huffman_tree)

    compressed_data = ""
    for character in data:
        compressed_data += code_table[character]

    return compressed_data
