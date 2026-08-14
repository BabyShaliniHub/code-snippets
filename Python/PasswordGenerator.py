# PasswordGenerator.py
# Generates a random password using letters, numbers, and special characters.

import secrets
import string

length = int(input("Enter password length: "))

characters = (
    string.ascii_letters
    + string.digits
    + string.punctuation
)

password = "".join(
    secrets.choice(characters)
    for _ in range(length)
)

print("Generated Password:", password)
