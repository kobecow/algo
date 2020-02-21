
input_file = open("input_files/b_small.in", "r")
path_w = 'output/b_small.out'
lines = input_file.readlines()
input_file.close()
count_line = 0
while count_line < 2:
    if count_line == 0:
        target = lines[count_line].rstrip('\n').split(' ')[0]

    if count_line == 1:
        pizzas = lines[count_line].rstrip('\n').split(' ')

    
    count_line +=1


pizzas = list(map(int, pizzas))
target = int(target)
# print(target)
# print(pizzas)

def binary_search(arr, target):

    def re_binary_search(arr, target, s_index, e_index):
        if s_index > e_index:
            return -1

        m_index = (s_index + e_index) // 2
        if arr[m_index] == target:
            return check_duplicate(arr, m_index, target)

        elif arr[m_index] < target < arr[m_index+1]:
            return m_index

        elif arr[m_index-1] < target < arr[m_index]:
            return m_index-1

        elif target < arr[m_index]:
            return re_binary_search(arr, target,s_index, m_index-1)
        
        elif target > arr[m_index]:
            return re_binary_search(arr, target,m_index+1, e_index)
        
    return re_binary_search(arr, target, 0, len(arr)-1)

def check_duplicate(arr, index, target):
    
    if index == len(arr)-1:
        return index

    while(arr[index] == target):
        if arr[index +1] == target:
            index += 1
        else:
            break

    return index

def pick_big_number(arr, target):
    if target < arr[0]:
        # print('Nothing')
        return -1

    elif target > arr[-1]:
        # print('Biggest')
        # print(len(arr))
        return len(arr)-1

    # print('BINARY')
    return binary_search(arr, target)


def check_all_complete(arr):
    if len(arr) == 1:
        return True

    sorted_arr = sorted(arr)

    for index in range(len(sorted_arr)-1):
        if sorted_arr[index] + 1  == sorted_arr[index+1]:
            next
        else:
            return False

    return True


def reset_current_indexes(arr):
        sorted_arr = sorted(arr)

        for index in range(len(sorted_arr)-1):
            if sorted_arr[index] +2 >= sorted_arr[index+1]:
                continue
            else:
                return sorted_arr[index+1:]

        return [sorted_arr[-1]]

def get_new_target(arr, indexes, target):
    s = 0
    if len(arr) > 0:
        for index in indexes:
            s += arr[index]

    return target - s, s


def check(arr,pizzas):
    s = 0
    for x in arr:
        s += pizzas[x]

    return s





def main(pizzas, target):
    current_indexes = []
    current_max = 0

    max_indexes = []
    max_sum = 0

    subset_end_flag = False
    all_completed_flag = False

    current_index = len(pizzas)
    new_target = target
    # print(pizzas[0:current_index])
    # print(new_target)
    while(not subset_end_flag):

        # print('YES')
        # print(current_indexes)
        add_index = pick_big_number(pizzas[0:current_index], new_target)
        # print(add_index)
        if add_index == -1:
            subset_end_flag = True
            all_completed_flag = check_all_complete(current_indexes)
            if all_completed_flag:
                return max_indexes
            else:
                current_indexes = reset_current_indexes(current_indexes)
                subset_end_flag = False
                current_index = min(current_indexes)
                current_indexes.remove(current_index)
                new_target, current_max = get_new_target(pizzas,current_indexes,target)


        else:
            current_indexes.insert(0, add_index)
            new_target = new_target - pizzas[add_index]
            current_max = current_max + pizzas[add_index]
            current_index = add_index
            if current_max > max_sum:
                # print('UPDATE')
                max_indexes = current_indexes
                max_sum = current_max

                if max_sum == target:
                    return max_indexes

            if add_index == 0:
                subset_end_flag = True
                all_completed_flag = check_all_complete(current_indexes)
                if all_completed_flag:
                    return max_indexes
                else:
                    current_indexes = reset_current_indexes(current_indexes)
                    # print('RESET')
                    # print(current_indexes)         
                    subset_end_flag = False
                    current_index = min(current_indexes)
                    current_indexes.remove(current_index)
                    new_target, current_max = get_new_target(pizzas,current_indexes,target)
                    # print(new_target)
                    # print(current_indexes)

                
    return max_indexes
    
    

# print(main(pizzas,target))
print(check(main(pizzas,target),pizzas))



ans = main(pizzas,target)
# print(ans[0])
# print(ans[-1])
# print(len(ans))
with open(path_w, mode='w') as f:
    f.write(str(len(ans)))
    f.write('\n')
    for x in ans:
        f.write(str(x))
        f.write(' ')
    
with open(path_w) as f:
    print(f.read())
