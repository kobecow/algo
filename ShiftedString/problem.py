"""
You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.
"""

def is_shifted(a, b):
  # Fill this in.

  # return True or False
  

  if len(a) != len(b):
    return False

  if a == b:
    return True

  # checking all index.

  for index in range(len(a)):

    if a[0] == b[index]:
      left_length = len(a) - index

      if a[:left_length] == b[-left_length:] and a[left_length:] == b[:-left_length]:
        return True

  return False
  
print(is_shifted('abcde', 'cdeab'))
# True

print(is_shifted('ikaekaj', 'kajikae'))

print(is_shifted('kajikei', 'jkkaie'))
