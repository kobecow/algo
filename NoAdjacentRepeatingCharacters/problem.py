"""
Given a string, rearrange the string so that no character next to each other are the same.
If no such arrangement is possible, then return None.

Example:
Input: abbccc
Output: cbcbca

"""

def rearrangeString(s: str) -> str or None:
    set_s = set(s)
    
    class TwoValueNode:

        def __init__(self,letter,size):
            self.letter = letter
            self.size = size
            
        def get_size(self):
            return self.size

        def get_letter(self):
            return self.letter

        def plus_size(self):
            self.size += 1

        def minus_size(self):
            self.size -= 1


    class Heap:

        def __init__(self, init_size=10):
            self.cbt = [None for x in range(init_size)]
            self.next_index = 0

        def insert(self, node):
            self.cbt[self.next_index] = node
            self._up_heapify()
            self.next_index += 1

            if self.next_index == len(self.cbt):
                temp = self.cbt
                self.cbt = [None for x in range(len(self.cbt)*2)]
                for index in range(len(temp)):
                    self.cbt[index] = temp[index]


        def _up_heapify(self):
            child_index = self.next_index

            while child_index >= 1:
                parent_index = (child_index -1)//2
                child_node = self.cbt[child_index]
                parent_node = self.cbt[parent_index]

                if child_node.get_size() > parent_node.get_size():
                    self.cbt[child_index] = parent_node
                    self.cbt[parent_index] = child_node

                    child_index = parent_index

                else:
                    break

        def minus(self, index):
            if self.cbt[index].get_size() == 0:
                print("false")
                return False

            self.cbt[index].minus_size()

        def down_heapify(self,index):
            parent_index = index

            while parent_index < self.next_index:

                parent = self.cbt[parent_index]

                max_element = parent
                left_child = None
                right_child = None
                
                left_child_index = parent_index * 2 + 1
                right_child_index = parent_index * 2 + 2

                if left_child_index < self.next_index:
                    #print("LEFT")
                    #print(self.cbt[left_child_index].letter + " : " + str(heap.cbt[left_child_index].size))
                    left_child = self.cbt[left_child_index]

                if right_child_index < self.next_index:
                    #print("RIGHT")
                    #print(self.cbt[right_child_index].letter + " : " + str(heap.cbt[right_child_index].size))
                    right_child = self.cbt[right_child_index]

                
                if left_child is not None:
                    if left_child.get_size() > max_element.get_size():
                        max_element = left_child

                if right_child is not None:
                    if right_child.get_size() > max_element.get_size():
                        max_element = right_child

                if max_element == parent:
                    return
                
                if max_element == right_child:
                    # print("right now")
                    self.cbt[parent_index] = max_element
                    self.cbt[right_child_index] = parent
                    parent_index = right_child_index
                    
                if max_element == left_child:
                    # print("left now")
                    self.cbt[parent_index] = max_element
                    self.cbt[left_child_index] = parent
                    parent_index = left_child_index
                    
                    

    heap = Heap()
    for char in set_s:
        count = s.count(char)
        node = TwoValueNode(char, count)
        heap.insert(node)
    
    temp_index = 0
    while temp_index < len(heap.cbt):
        if heap.cbt[temp_index] is None:
            temp_index += 1
            continue
        print(heap.cbt[temp_index].letter + " : " + str(heap.cbt[temp_index].get_size()))
        
        temp_index += 1


    # check possible or not
    sum_left = 0
    top = heap.cbt[0].get_size()
    if top == 0:
        return None

    for index in range(1,heap.next_index):
        sum_left += heap.cbt[index].get_size()
    
    if top -1 > sum_left:
        return None


    string = ""

    while heap.cbt[0].get_size() > 0:
        #print(heap.cbt[0].get_letter())
        string += heap.cbt[0].get_letter()
        
        heap.minus(0)
        
        if 0 == heap.cbt[1].get_size():
            if 0 == heap.cbt[2].get_size():
                continue
            else:
                string += heap.cbt[2].get_letter()
                heap.minus(2)
                
                heap.down_heapify(2)
                heap.down_heapify(0)
                continue

        string += heap.cbt[1].get_letter()
        heap.minus(1)
        # print("before")
        # print(heap.cbt[0].letter + ": "+ str(heap.cbt[0].size))
        # print(heap.cbt[1].letter + ": "+ str(heap.cbt[1].size))
        # print(heap.cbt[2].letter + ": "+ str(heap.cbt[2].size))
        
        heap.down_heapify(1)
        heap.down_heapify(0)
        
        
        # print("after")
        # print(heap.cbt[0].letter + ": "+ str(heap.cbt[0].size))
        # print(heap.cbt[1].letter + ": "+ str(heap.cbt[1].size))
        # print(heap.cbt[2].letter + ": "+ str(heap.cbt[2].size))

    print("before finish")
    print(heap.cbt[0].letter + ": "+ str(heap.cbt[0].size))
    print(heap.cbt[1].letter + ": "+ str(heap.cbt[1].size))
    print(heap.cbt[2].letter + ": "+ str(heap.cbt[2].size))
    temp_index = 0
    while temp_index < len(heap.cbt):
        if heap.cbt[temp_index] is None:
            temp_index += 1
            continue
        print(heap.cbt[temp_index].letter + " : " + str(heap.cbt[temp_index].size))
        
        temp_index += 1


    return string
    

print(rearrangeString('gahoeaddddggrea'))
# cbcabc

# gahoeaddddggrea
# ddddgggaaaeehor


print(rearrangeString('cccciiiiiddddssskkdddcc'))
