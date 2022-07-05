from collections import Counter
a = []
for i in range(int(input())):
    a.append(input())
b=Counter(a).most_common(len(a))
c=b[0][1]
b.sort()
for i in b:
    if i[1]!=c:
        continue
    print(i[0],c)