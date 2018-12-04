import math
# def solve(meal_cost, tip_percent, tax_percent):
#     return round(meal_cost*(1.0 + float(tip_percent/100) + float(tax_percent/100)))


def solve(meal_cost, tip_percent, tax_percent):
    items = [meal_cost, meal_cost *
             float(tip_percent/100), meal_cost*float(tax_percent/100)]
    return (round(sum(items)))


print(solve(12.00, 20, 8))
print(solve(10.25, 17, 5))
