def solution(N,A,B):
    friends = list(range(N + 1))

    def find(a):
        if a == friends[a]:
            return a
        else: 
            friends[a] = find(friends[a])
            return friends[a]
    def union(a,b):
        findA = find(a)
        findB = find(b)
        if findA != findB: 
            friends[findA] = findB
    
    for i in range(0, len(A)):
        union(A[i], B[i])
    
    for i in range(0, N):
        find(i)
    
    friendSet = {};
    for i in range(0, N+1):
        if friends[i] not in friendSet:
            friendSet[friends[i]] = [i]
        else:
            friendSet[friends[i]].append(i)

    

    print(friendSet)
    
print(solution(6, [1,1,2,5], [2,3,4,6])) #3