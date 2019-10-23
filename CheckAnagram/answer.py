import copy
class Solution(object):
	def isanagram(self, char_dict, t):
		c_dict = copy.copy(char_dict)
		for c in t:
			if c not in char_dict:
				return False
			else:
				c_dict[c] -= 1
		for c in c_dict.keys():
			if c_dict[c] != 0:
				return False
		return True

	def findAnagrams(self, s, p):
		p_dict = {}
		n = len(p)
		m = len(s)
		res = []
		for c in p:
			if c not in p_dict:
				p_dict[c] = 0
			p_dict[c] += 1
		i = 0
		while i < m-n+1:
			if s[i] in p_dict:
				t = s[i:i+n]
				if self.isanagram(p_dict, t):
					res.append(i)
					while n+i < m and s[i] == s[n+i]:
						res.append(i+1)
						i += 1
					if n+i < m and s[i+n] not in p_dict:
						i += n-1
				i += 1
			else:
				i += 1
		return res