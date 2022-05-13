import re

def solution(string):
    dic = {};
    numbers = re.findall(r'\d+', string)
    chars = re.findall(r'[a-z]+',string)

    for i in range(0,len(numbers)):
        if chars[i] not in dic:
            dic[chars[i]] = int(numbers[i])
        else:
            dic[chars[i]] += int(numbers[i])

    answer = ''
    for i in range(0,len(dic.keys())):
        answer += list(dic.keys())[i] + str(list(dic.values())[i])

    return answer
    

print(solution('a2c9b3c2z0'))
print(solution('a1a1a1a1a1'))
print(solution('a3c11d1c3d3'))
print(solution('a0b1c2b3'))
