"""
Given a string, rearrange the string so that no character next to each other are the same.
If no such arrangement is possible, then return None.

Example:
Input: abbccc
Output: cbcbca

"""

def rearrangeString(s: str) -> str or None:
    pass
    

print(rearrangeString("gahoeaddddggrea"))
# no order required
# ahgogrgededadad

print(rearrangeString("cccciiiiiddddssskkdddcc"))
# no order required
# ckckcscscsdidididididcd


# improvement
# this is too complicated comarared to answer.py.
# use only slice operation, not priority queue.