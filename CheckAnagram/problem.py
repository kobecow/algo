"""
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.
"""

def checkAnagram(s: str, p: str) -> [int]:
    p_len = len(p)
    ans = [] 
    #TODO
    # index+p_len > len(p)
    for index in range(len(s) - p_len+1):
        
        temp_resurl = is_anagram(s[index:index+p_len], p)
        if temp_resurl == True:
            ans.append(index)

    return ans

def is_anagram(s: str, target: str) -> bool:
    """
    return True or False
    check zero index in target
    go next
    """
    if len(s) == 0:
        return True

    if s[0] in target:
        delete_index = target.index(s[0])
        if delete_index == len(target)-1:
            new_target = target[:delete_index]
        else:
            new_target = target[:delete_index] + target[delete_index+1:]

        return is_anagram(s[1:], new_target)

    return False





print(checkAnagram('abcbcaabcabac', 'ca'))
# [4,8,11]

# check
# print("abcbcaabcabac"[4:6])
# print("abcbcaabcabac"[8:10])
# print("abcbcaabcabac"[11:13])

