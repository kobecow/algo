class Solution(object):
    def rotateString(self, A, B):
        if len(A) != len(B):
            return False
        if len(A) == 0:
            return True

        for s in range(len(A)):
            if all(A[(s+i) % len(A)] == B[i] for i in range(len(A))):
                return True
        return False

solution = Solution()
print(solution.rotateString('EALRQQV','LRQQVEA'))
# True

print(solution.rotateString('RSQL','LRSQ'))
# True

print(solution.rotateString('SQIEM','SIQME'))
# False