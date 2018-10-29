import re

# regexObject = re.compile(r"\b\w{6,}\b/g")
regexObject = re.compile(r'\b\w{3,}\b')
string = 'Nemnem tudom miert nem mukodik'
m = re.findall(regexObject, string)
print(m)

pattern = r"\w{4,}"
sequence = "Cookie muki"
print(re.match(pattern, sequence))
