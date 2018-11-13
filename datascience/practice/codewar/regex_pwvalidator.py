# password validator with regexp
# Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
# ^ beginning of a string
# (?= a so called positive lookahead
regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"

# Minimum eight characters, at least one letter, one number and one special character:
regex2 = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

# At least one upper case English letter, (?=.*?[A-Z])
# At least one lower case English letter, (?=.*?[a-z])
# At least one digit, (?=.*?[0-9])
# At least one special character, (?=.*?[#?!@$%^&*-])
# Minimum eight in length .{8,} (with the anchors)
