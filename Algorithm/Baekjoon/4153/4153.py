d = true
while d == true:
    a, b, c = map(int, input().split())
    if a == 0 and b == 0 and c == 0 :
        break
    a *= a
    b *= b
    c*= c
    if a + b == c or b + c == a or c + a == b : print("right")
    else : print("wrong")
