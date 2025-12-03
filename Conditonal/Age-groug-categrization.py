def ageCategorization(age):
    if age < 13:
        print("He or she is a Child according to given age:", age)
    elif 13 <= age <= 19:
        print("He or she is a Teenager according to given age:", age)
    elif 20 <= age <= 59:
        print("He or she is an Adult according to given age:", age)
    else:
        print("He or she is a Senior according to given age:", age)

age = int(input("Enter your age, then I will tell you your category: "))
ageCategorization(age)
