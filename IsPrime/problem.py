import math

def isPrime(num: int) -> bool:
    # if num is prime, return True
    # if not, return False

    if num == 1:
        return False

    if num == 2 or num == 3:
        return True

    if num % 2 == 0 or num % 3 == 0:
        return False

    for i in range(3, math.ceil(math.sqrt(num))+1, 2):
        if num % i == 0:
            return False

    return True


if __name__ == '__main__':
    print(isPrime(97))
    # primeList1 = list()
    # for i in range(1,1000):
    #     if isPrime(i):
    #         primeList1.append(i)
            

    # def eratosthenes(n):
    #     list_prime = list(range(2, n))

    #     for i in range(2, n):
    #         if i in list_prime:
    #             for j in range(i * 2, n, i):
    #                 if j in list_prime:
    #                     list_prime.remove(j)

    #         if i > int(math.sqrt(n)):
    #             break

    #     return list_prime

    # primeList2 = eratosthenes(1000)
    # print(primeList1 == primeList2)