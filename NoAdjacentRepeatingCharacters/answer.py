
def rearrangeString(s: str) -> str or None:
    N = len(s)
    print(N)
    A = []
    for c, x in sorted((s.count(x), x) for x in set(s)):
        if c > (N+1)/2: return None
        A.extend(x * c)
        
    
    ans = [None] * N
    ans[::2] = A[N//2:]
    ans[1::2] = A[:N//2]
    return "".join(ans)


print(rearrangeString("ssssbbcccc"))

print(rearrangeString("gahoeaddddggrea"))
# no order required
# ahgogrgededadad

print(rearrangeString("cccciiiiiddddssskkdddcc"))
# no order required
# ckckcscscsdidididididcd
