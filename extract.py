import re

with open('d:/spark-india/ISET_Full_Details.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find headings. Usually they are either Markdown headings starting with #,
# or lines followed by empty lines, or lines with all uppercase.
# Let's find lines with #
headings = re.findall(r'^#+\s+(.*)$', content, re.MULTILINE)
print("Found Markdown headings:")
for h in headings[:50]:
    print(h)

# Let's also look for section headings which might be in other formats
# Let's search for "Table of Contents" and print the next 50 lines to see the structure of the document
toc_start = content.find("Table of Contents")
if toc_start != -1:
    print("\nTOC content:")
    print(content[toc_start:toc_start+2000])
