# OrderBill.py
# Generates the  order bill for an e-commerce application. It calculates item totals, discount, tax, and final amount.

cart = [
    {
        "product": "Dell",
        "price": 75000,
        "quantity": 1
    },
    {
        "product": "AMAQ Pods",
        "price": 1200,
        "quantity": 2
    },
    {
        "product": "Phone Case",
        "price": 2500,
        "quantity": 1
    }
]

DISCOUNT = 1000
TAX_RATE = 0.18

subtotal = 0

print("=" * 65)
print("                         ORDER BILL")
print("=" * 65)

print(
    f"{'Product':<25}"
    f"{'Qty':>8}"
    f"{'Price':>15}"
    f"{'Amount':>15}"
)

print("-" * 65)

for item in cart:

    item_total = item["price"] * item["quantity"]
    subtotal += item_total

    print(
        f"{item['product']:<25}"
        f"{item['quantity']:>8}"
        f"₹{item['price']:>14.2f}"
        f"₹{item_total:>14.2f}"
    )

taxable_amount = subtotal - DISCOUNT
tax = taxable_amount * TAX_RATE
grand_total = taxable_amount + tax

print("-" * 65)

print(f"{'Subtotal':<48} ₹{subtotal:>14.2f}")
print(f"{'Discount':<48} -₹{DISCOUNT:>13.2f}")
print(f"{'Tax (18%)':<48} ₹{tax:>14.2f}")

print("=" * 65)

print(f"{'ORDER TOTAL':<48} ₹{grand_total:>14.2f}")

print("=" * 65)
print("Thank you for your purchase!")
